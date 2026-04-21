'use client';
import { useState, useEffect, useRef } from 'react';

// Static fallback data for all content types
const staticData: Record<string, any[]> = {
  home_sections: [
    { id: '1', section_key: 'hero', title: 'Ancient Wisdom.', subtitle: 'Modern Precision.', description: 'Guided by Vastuvid KK Nagaich, rooted in the sacred geometry of Uttar Pradesh.', button_text: 'Consult Vastuvid', button_link: '/contact', secondary_button_text: 'Explore Free Tools', secondary_button_link: '/free-tools', is_published: true, order_index: 1 },
    { id: '2', section_key: 'acharya_vow', title: 'Guided by Lineage, Driven by Results', subtitle: 'Our Sacred Vow', description: 'For over four decades, our family has preserved the authentic Vastu Shastra traditions.', button_text: 'Discover Our Lineage', button_link: '/about', is_published: true, order_index: 2 },
    { id: '3', section_key: 'virtual_consult', title: 'Connect with Acharya, Virtually', description: 'Secure video consultation from anywhere in the world.', button_text: 'Book Virtual Consultation', button_link: '/bookings', is_published: true, order_index: 8 },
    { id: '4', section_key: 'global_presence', title: 'Global Wisdom, Local Precision', description: 'Our Vastu solutions transcend borders.', button_text: 'Book a Consultation', button_link: '/bookings', is_published: true, order_index: 11 },
    { id: '5', section_key: 'final_cta', title: 'Begin Your Transformation Today', subtitle: 'Book a private consultation with Vastuvid KK Nagaich.', button_text: 'Schedule Now', button_link: '/bookings', secondary_button_text: 'Try Free AI Tools', secondary_button_link: '/free-tools', is_published: true, order_index: 12 },
  ],
  free_tools: [
    { id: '1', tool_key: 'kundali', title: 'AI Kundali', description: 'Vedic birth chart with nakshatra and planetary positions', icon: '🔮', color: '#FF9933', is_published: true, order_index: 1 },
    { id: '2', tool_key: 'vastu_scan', title: 'AI Vastu Scan', description: '16‑zone energy analysis with personalized remedies', icon: '🏠', color: '#C10000', is_published: true, order_index: 2 },
    { id: '3', tool_key: 'name_suggestion', title: 'Name Suggestion', description: 'Auspicious syllables based on 27 Nakshatras', icon: '✨', color: '#E8B960', is_published: true, order_index: 3 },
  ],
  services: [
    { id: '1', title: 'Residential Vastu', description: 'Harmonise your home', benefits: ['Better Sleep','Family Harmony','Financial Flow'], icon: '🏠', color_gradient: '', is_published: true, order_index: 1 },
    { id: '2', title: 'Commercial Vastu', description: 'Align your business', benefits: ['Revenue Growth','Team Cohesion','Client Retention'], icon: '🏢', color_gradient: '', is_published: true, order_index: 2 },
    { id: '3', title: 'Land & Plot Selection', description: 'Auspicious foundations', benefits: ['Ideal Orientation','Soil Analysis','Future Prospects'], icon: '🌍', color_gradient: '', is_published: true, order_index: 3 },
  ],
  blog_posts: [
    { id: '1', title: 'The Science of Vastu', slug: 'science-of-vastu', excerpt: 'Discover how ancient Vastu principles align with modern science.', category: 'Vastu Science', read_time: 5, author_name: 'Vastuvid KK Nagaich', is_published: true, featured_image: '/images/blog/vastu-science.svg' },
    { id: '2', title: 'Numerology for Beginners', slug: 'numerology-beginners', excerpt: 'Unlock the secrets of numbers in your life.', category: 'Numerology', read_time: 4, author_name: 'Vastuvid KK Nagaich', is_published: true },
    { id: '3', title: 'Remedies Without Demolition', slug: 'remedies-without-demolition', excerpt: 'Simple Vastu corrections that don\'t require breaking walls.', category: 'Remedies', read_time: 6, author_name: 'Vastuvid KK Nagaich', is_published: true },
  ],
  testimonials: [
    { id: '1', client_name: 'Priya Malhotra', location: 'London, UK', content: 'Acharya\'s guidance transformed our home. We\'ve never felt such peace.', rating: 5, verified: true, is_published: true, order_index: 1 },
    { id: '2', client_name: 'James Whitmore', location: 'New York, USA', content: 'The commercial Vastu analysis was spot on. Revenue up 40% in months.', rating: 5, verified: true, is_published: true, order_index: 2 },
    { id: '3', client_name: 'Ananya Sharma', location: 'Dubai, UAE', content: 'My health improved dramatically after implementing the remedies.', rating: 5, verified: true, is_published: true, order_index: 3 },
    { id: '4', client_name: 'Michael Chen', location: 'Singapore', content: 'Unparalleled depth of knowledge. Practical and transformative.', rating: 5, verified: true, is_published: true, order_index: 4 },
    { id: '5', client_name: 'Elena Rossi', location: 'Milan, Italy', content: 'Finally feel at peace in my own home. Forever grateful.', rating: 5, verified: true, is_published: true, order_index: 5 },
    { id: '6', client_name: 'David Miller', location: 'Sydney, Australia', content: 'The land selection advice saved us from a disastrous purchase.', rating: 5, verified: true, is_published: true, order_index: 6 },
  ],
  site_settings: [
    { key: 'footer_about', value: 'VedicUrja – Ancient Wisdom. Modern Precision.' },
    { key: 'footer_copyright', value: '© 2026 VedicUrja. All rights reserved.' },
  ],
};

export function useRealtimeContent<T>(table: string, orderBy: string = 'created_at', ascending: boolean = false) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    // Simulate async fetch
    const timer = setTimeout(() => {
      if (mountedRef.current) {
        const data = staticData[table] || [];
        setItems(data as T[]);
        setLoading(false);
      }
    }, 100);
    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
    };
  }, [table]);

  const refetch = () => {};
  return { items, loading, refetch };
}
