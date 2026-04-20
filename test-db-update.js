const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)?.[1]?.trim();
const key = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/)?.[1]?.trim();

if (!url || !key) {
    console.error('❌ Credentials not found in .env.local');
    process.exit(1);
}

console.log('🔍 Connecting to Supabase...');
const supabase = createClient(url, key, { auth: { persistSession: false } });

async function test() {
    // 1. Fetch acharya_vow
    console.log('\n📡 Fetching home_sections...');
    const { data: sections, error: fetchError } = await supabase
        .from('home_sections')
        .select('*')
        .eq('section_key', 'acharya_vow');
    
    if (fetchError) {
        console.error('❌ Fetch failed:', fetchError.message);
        console.log('\n🔧 This indicates an RLS or permissions issue.');
        console.log('   Run this SQL in Supabase:');
        console.log(`
-- Grant SELECT to anon
GRANT SELECT ON public.home_sections TO anon;
GRANT SELECT ON public.home_sections TO authenticated;

-- Add to realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.home_sections;

-- Create RLS policy
CREATE POLICY "Public read published home_sections" ON public.home_sections
    FOR SELECT USING (is_published = true);
        `);
        process.exit(1);
    }
    
    if (!sections || sections.length === 0) {
        console.error('❌ No acharya_vow section found.');
        console.log('\n🔧 Run this SQL to seed the section:');
        console.log(`
INSERT INTO public.home_sections (section_key, title, subtitle, description, button_text, button_link, is_published)
VALUES ('acharya_vow', 'Guided by Lineage, Driven by Results', 'Our Sacred Vow', 
        'For over four decades, our family has preserved the authentic Vastu Shastra traditions.',
        'Discover Our Lineage', '/about', true)
ON CONFLICT (section_key) DO NOTHING;
        `);
        process.exit(1);
    }
    
    const section = sections[0];
    console.log(`✅ Found: "${section.title}" (ID: ${section.id})`);
    
    // 2. Try to update
    const newTitle = `TEST UPDATE ${new Date().toLocaleTimeString()}`;
    console.log(`\n📝 Attempting to update to: "${newTitle}"`);
    
    const { data: updated, error: updateError } = await supabase
        .from('home_sections')
        .update({ title: newTitle })
        .eq('id', section.id)
        .select()
        .single();
    
    if (updateError) {
        console.error('❌ Update failed:', updateError.message);
        console.log('\n🔧 This indicates missing UPDATE permission.');
        console.log('   Run this SQL in Supabase:');
        console.log(`
-- Grant UPDATE to authenticated
GRANT UPDATE ON public.home_sections TO authenticated;

-- Create RLS policy for admin updates
CREATE POLICY "Admin can update home_sections" ON public.home_sections
    FOR UPDATE USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
    WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));
        `);
        process.exit(1);
    }
    
    console.log(`✅ Updated successfully: "${updated.title}"`);
    
    // 3. Revert
    console.log('\n🔄 Reverting to original title...');
    await supabase.from('home_sections').update({ title: section.title }).eq('id', section.id);
    console.log('✅ Reverted.');
    
    console.log('\n🎉 SUCCESS: Database writes are working!');
    console.log('   If admin panel still fails, the issue is in frontend code.');
}

test().catch(err => {
    console.error('❌ Unexpected error:', err.message);
    process.exit(1);
});
