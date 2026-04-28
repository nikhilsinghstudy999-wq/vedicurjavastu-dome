'use client';
import { useState, useEffect, useRef } from 'react';

/* ================================================================
   STATIC DATA – all sections (home_sections, free_tools, services,
   blog_posts, testimonials, site_settings) live here.
   ================================================================ */
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
    { id: '2', tool_key: 'daily_horoscope', title: 'Daily Horoscope', description: 'Your 12‑Rashi forecast, updated every morning', icon: '✦', color: '#7B2FBE', icon_type: 'svg', is_published: true, order_index: 2 },
    { id: '3', tool_key: 'name_suggestion', title: 'Name Suggestion', description: 'Auspicious syllables based on 27 Nakshatras', icon: '✨', color: '#E8B960', is_published: true, order_index: 3 },
  ],
  services: [
    { id: '1', title: 'Residential Vastu', description: 'Harmonise your home', benefits: ['Better Sleep','Family Harmony','Financial Flow'], icon: '🏠', color_gradient: '', is_published: true, order_index: 1 },
    { id: '2', title: 'Commercial Vastu', description: 'Align your business', benefits: ['Revenue Growth','Team Cohesion','Client Retention'], icon: '🏢', color_gradient: '', is_published: true, order_index: 2 },
    { id: '3', title: 'Land & Plot Selection', description: 'Auspicious foundations', benefits: ['Ideal Orientation','Soil Analysis','Future Prospects'], icon: '🌍', color_gradient: '', is_published: true, order_index: 3 },
  ],
  blog_posts: [
    {
      id: '1',
      title: 'The Science of Vastu – How Ancient Principles Align with Modern Research',
      slug: 'science-of-vastu',
      excerpt: 'Discover how ancient Vastu principles align with modern science to create harmonious living spaces.',
      category: 'Vastu Science',
      read_time: 12,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      featured_image: '/images/blog/vastu-science.svg',
      content: `Vastu Shastra is an ancient Indian architectural philosophy that integrates five fundamental elements—earth, water, fire, air, and space—to create balanced, harmonious living environments. While many dismiss Vastu as mere superstition, modern scientific research is increasingly validating its core principles. The southwest direction, for instance, receives the most stable solar radiation during the day, making it ideal for heavy structures and master bedrooms. This aligns with modern passive solar design principles. The northeast corner, designated for water elements, benefits from the Earth's magnetic field, which is most beneficial in that direction. Placing water bodies there enhances positive ion flow, improving air quality and mental alertness. The southeast, associated with fire, receives intense morning sunlight, making it the hottest zone—perfect for kitchens where natural UV rays act as disinfectants. Computational fluid dynamics studies have shown that northwest window placement creates a Venturi effect, drawing fresh air through the house and reducing energy consumption by 30%. The central Brahmasthan, when kept open, serves as a thermal buffer and light well, a principle now mandated by the Indian Green Building Council. Sleeping with the head towards the south aligns the body's iron‑rich blood with geomagnetic lines, improving sleep quality by 25% and reducing blood pressure fluctuations. Over 500 clients across 15 countries have reported that Vastu corrections led to a 20‑30% improvement in overall well‑being. Vastuvid K.K. Nagaich combines this ancient wisdom with modern diagnostics—EMF meters, geomagnetic compasses, and thermal imaging—to provide holistic, scientifically grounded Vastu analysis.`
    },
    {
      id: '2',
      title: 'Numerology for Beginners – Unlock the Secrets of Your Birth Number',
      slug: 'numerology-beginners',
      excerpt: 'Unlock the secrets of numbers and their influence on your life, career, and destiny.',
      category: 'Numerology',
      read_time: 10,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `Numerology is the ancient study of numbers and their mystical influence on human life. Rooted in Vedic philosophy, numerology assigns specific vibrations to each number, which affect an individual's personality, career, relationships, and destiny. In Vedic numerology, three primary numbers are derived from your birth date: the Psychic Number (or Driver Number), the Destiny Number (or Life Path Number), and the Name Number. The Psychic Number is derived from your birth day and reveals your inner self and personality traits. For instance, a person with Psychic Number 1 is a natural leader, confident and ambitious, while Number 2 is gentle, diplomatic, and intuitive. Understanding this number helps you align with your strengths and overcome weaknesses. The Destiny Number is the sum of your full birth date and indicates your life's purpose, the path you are destined to walk, and the challenges you'll face. For example, a Destiny Number 5 signifies a life of freedom, adventure, and constant change. Knowing your Destiny Number guides major life decisions, from career choices to relationships. The Name Number influences your public image and outward personality. Vastuvid K.K. Nagaich often recommends subtle name adjustments to harmonise with your Psychic and Destiny Numbers. Practical applications include career guidance (Number 3 + Destiny 8 = creative yet pragmatic, ideal for architecture, law, or finance), relationship compatibility (2 and 6 are highly compatible), health predictions (Number 4 may indicate chronic conditions), and business finance (launching on a date aligned with your numbers can influence success). Clients of VedicUrja have reported tangible benefits: a Delhi businessman with Psychic Number 7 saw a 40% revenue increase after changing his company's name to vibrate at Number 5. Vedic numerology is not mere superstition; it is a practical tool for self‑awareness and strategic living.`
    },
    {
      id: '3',
      title: 'Remedies Without Demolition – Powerful Vastu Corrections for Your Home',
      slug: 'remedies-without-demolition',
      excerpt: 'Powerful Vastu corrections that require no structural change yet bring profound transformation.',
      category: 'Remedies',
      read_time: 11,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `One of the greatest misconceptions about Vastu Shastra is that rectifying a defect requires destructive renovations. In reality, Vedic wisdom offers a vast array of non‑invasive remedies that can neutralise negative energies and enhance positive ones without any demolition. Common doshas include a toilet in the northeast, a kitchen in the north, or a master bedroom in the southeast. Remedies work at three levels: elemental, yantric, and behavioural. Elemental remedies use the five elements to counterbalance defects: a water feature in the northeast calms mental agitation; a salt lamp in the southeast strengthens the fire element; a ceramic pot with soil in the southwest stabilises relationships; wind chimes in the northwest encourage positive communication; and decluttering the Brahmasthan is the single most powerful remedy. Yantric remedies involve sacred geometric diagrams: the Vastu Purush Yantra aligns the entire home with cosmic energy; the Shri Yantra attracts wealth and harmony; the Kuber Yantra enhances financial inflow; and the Mangal Yantra pacifies aggressive Mars energy. Behavioural remedies include colour therapy, daily rituals (facing east or north while working), and mirror placement. A Lucknow family with a northeast toilet saw chronic health issues resolved after placing a copper pyramid beneath the toilet floor. A businessman with a south‑facing entrance doubled revenue after installing a Vastu yantra and adding a water feature in the north. Vastuvid K.K. Nagaich has refined these techniques for decades, blending ancient knowledge with modern practicality.`
    },
    {
      id: '4',
      title: 'Vastu for Main Entrance – The Power of Your Home\'s Door Direction',
      slug: 'vastu-main-entrance-door',
      excerpt: 'Learn how the direction of your main door influences prosperity, health, and relationships.',
      category: 'Vastu Science',
      read_time: 9,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `The main entrance of a home is considered the mouth of the Vastu Purush—the cosmic being that governs the energy of the building. It is through the main door that prana (life energy) enters, along with opportunities, wealth, and well‑being. An incorrectly placed or designed entrance can lead to financial loss, health issues, and relationship strife, while a well‑aligned door can attract abundance. The most auspicious directions for a main door are North, East, and Northeast. North is governed by Kuber, the god of wealth, and invites financial prosperity. East, associated with the rising sun, brings health, fame, and spiritual growth. Northeast (Ishanya) is the most sacred, combining the benefits of both North and East. West‑facing doors can be acceptable if properly remedied, while South‑facing doors require careful Vastu corrections. Beyond direction, the door's design matters: it should be the largest door in the house, open inwards, and never creak. The threshold (dahleej) should be high enough to block negative energies, and the door should be made of high‑quality wood without cracks. Colours also play a role—dark browns, natural wood, and shades of yellow and gold are ideal. A common dosha is a door directly aligned with a back door or window, causing energy to rush through without settling. This can be corrected by placing a crystal or a heavy piece of furniture to slow the flow. Another frequent issue is a toilet above or opposite the main door, which can be remedied by keeping the toilet door closed and placing a Vastu yantra. Vastuvid K.K. Nagaich has seen miraculous transformations when families corrected their main door alignment—from a business that was on the verge of closure to a couple whose marital discord vanished. The main door is not just an architectural feature; it is the primary channel through which cosmic energy enters your life.`
    },
    {
      id: '5',
      title: 'Kitchen Vastu – Cooking Up Health, Wealth, and Harmony',
      slug: 'kitchen-vastu-health-wealth',
      excerpt: 'Master the art of kitchen placement and design to enhance family health and financial flow.',
      category: 'Vastu Science',
      read_time: 10,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `The kitchen is the heart of the home, representing the fire element (Agni) and directly influencing the health, vitality, and financial prosperity of the family. In Vastu Shastra, the ideal location for the kitchen is the Southeast corner (Agneya). This direction receives intense morning sunlight, the purest form of natural fire energy, which aids in cooking and digestion. If the Southeast is not available, the Northwest (Vayavya) is the second‑best option, as it represents air, which supports fire. The kitchen should never be in the Northeast (sacred space), the Southwest (earth zone, causing heaviness), or the centre (Brahmasthan, which should remain open). The cooking range must be placed in the East so that the person cooking faces East—the direction of the rising sun, which brings health and positive energy. The sink and water sources should be in the North or Northeast, keeping fire and water elements separate to avoid conflict. Storage for grains and spices should be in the South or West, while lighter items can be kept in the North. Colours in the kitchen should be warm: shades of orange, red, yellow, and peach stimulate appetite and create a lively atmosphere. Avoid dark colours like black or blue, which dampen the fire energy. A common Vastu defect is a kitchen directly above or below a toilet or pooja room—both create severe doshas. If unavoidable, remedial measures include placing a Vastu pyramid between the floors and ensuring the toilet door is always closed. The placement of electrical appliances (microwave, oven, mixer) should be in the Southwest or South, keeping them away from water sources. Exhaust fans should be in the East or North. Vastuvid K.K. Nagaich has observed that families struggling with health issues often have kitchens in the wrong direction. A simple shift of the cooking stove to face East, combined with colour changes and elemental balancing, has resulted in dramatic improvements in both health and financial stability.`
    },
    {
      id: '6',
      title: 'Bedroom Vastu for Marital Harmony and Restful Sleep',
      slug: 'bedroom-vastu-marital-harmony',
      excerpt: 'Optimise your bedroom layout for deep sleep, loving relationships, and emotional well‑being.',
      category: 'Vastu Science',
      read_time: 9,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `The master bedroom is a sanctuary for rest, rejuvenation, and intimacy. According to Vastu Shastra, the ideal location for the master bedroom is the Southwest (Nairutya) corner of the home. This direction provides stability, strengthens relationships, and promotes sound sleep. The second‑best option is the South, followed by the West. Bedrooms should never be in the Northeast (which is for prayer and meditation), the Southeast (which induces aggression), or the Northwest (which causes restlessness). The bed should be placed in the Southwest area of the room, with the head facing South or East. Sleeping with the head towards the South aligns the body with the Earth's magnetic field, reducing blood pressure and improving sleep quality. Many scientific studies correlate this alignment with deeper, more restful sleep. Mirrors play a crucial role in bedroom Vastu. A mirror directly opposite the bed is considered a major dosha, as it reflects the couple's image and can lead to misunderstandings and infidelity. If a mirror is unavoidable, it should be covered at night. Electronics—televisions, computers, and mobile phones—emit electromagnetic radiation that disturbs the nervous system. They should be kept away from the bed, preferably covered, and switched off an hour before sleep. Colours in the bedroom should be soothing: light pink, peach, cream, and soft earth tones promote love and rest. Avoid bright reds, dark blues, or greys. The placement of the wardrobe should be in the Southwest or West, ensuring it does not block natural light or ventilation. For couples trying to conceive, Vastu recommends placing a small, living plant (like a money plant) in the North or East of the bedroom. Children's bedrooms should be in the Northwest or West, stimulating growth and learning. Vastuvid K.K. Nagaich has counselled countless couples whose relationships improved after simple bedroom Vastu corrections—from repositioning the bed to removing a problematic mirror.`
    },
    {
      id: '7',
      title: 'Commercial Vastu – How Office Layout Affects Business Success',
      slug: 'commercial-vastu-office-layout',
      excerpt: 'Strategic office Vastu for revenue growth, team cohesion, and client attraction.',
      category: 'Commercial Vastu',
      read_time: 11,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `In the competitive world of business, every advantage counts. Commercial Vastu is the application of ancient spatial principles to modern workplaces, offices, shops, and factories, with the goal of maximising productivity, attracting clients, and ensuring financial growth. The most critical element of an office is the entrance. A North or East‑facing entrance invites prosperity and new opportunities. The entrance should be spacious, well‑lit, and free of clutter. A South or Southwest entrance, while not ideal, can be corrected with the placement of Vastu yantras and colour therapy. The owner or CEO should sit in the Southwest corner of the office, facing North or East. This position provides stability, authority, and clear decision‑making. Employees should sit in the Northwest (for marketing and sales), the Southeast (for accounts and finance), or the North (for creative teams). A common mistake is placing the owner under a beam—this creates a feeling of pressure and can lead to flawed business decisions. The remedy is to install a false ceiling or place a crystal hanging from the beam. The cash counter must open towards the North, as this is the direction of Kuber, the god of wealth. A mirror on the northern wall behind the cash counter symbolically doubles the money. Inventory and heavy machinery should be stored in the Southwest, while finished goods should be dispatched from the Northwest. The conference room should be in the Northwest or West, with the head of the table facing East or North. Colours in the office should reflect the nature of the business: blue and green for creative agencies, yellow and orange for financial services, and white and cream for legal firms. Vastuvid K.K. Nagaich has transformed struggling businesses by implementing these principles—a Mumbai‑based textile firm saw a 35% increase in orders within three months after a complete office Vastu overhaul. Whether you run a small shop or a large corporation, aligning your workspace with Vedic principles can be the difference between stagnation and exponential growth.`
    },
    {
      id: '8',
      title: 'Understanding the Panch Mahabhutas – The Five Elements of Vastu',
      slug: 'panch-mahabhutas-five-elements',
      excerpt: 'A deep dive into earth, water, fire, air, and space – the building blocks of Vedic architecture.',
      category: 'Vastu Science',
      read_time: 10,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `At the core of Vastu Shastra lies the concept of the Panch Mahabhutas—the five great elements: Prithvi (earth), Jal (water), Agni (fire), Vayu (air), and Akash (space). These elements are not merely physical substances but cosmic energies that govern the universe and the human body. Understanding their interplay is the key to creating harmonious living spaces. Prithvi (Earth) represents stability, nourishment, and grounding. In the human body, it corresponds to bones, muscles, and the sense of smell. In a home, the Southwest zone is the earth quadrant. Heavy structures, master bedrooms, and storage belong here. When the earth element is balanced, residents feel secure and rooted. An imbalance can cause anxiety, instability, and financial insecurity. Jal (Water) is the element of flow, purification, and abundance. It governs the Northeast direction and corresponds to bodily fluids, taste, and emotional well‑being. Water features, indoor plants, and aquariums should be placed in the North or Northeast. A balanced water element enhances wealth, creativity, and intuition. Agni (Fire) embodies transformation, energy, and ambition. The Southeast corner is the fire zone, ideal for kitchens, electrical appliances, and heating systems. In the body, fire governs metabolism and vision. Balanced fire energy boosts confidence and drive; excess fire leads to aggression, conflict, and burnout. Vayu (Air) represents movement, communication, and intellect. The Northwest direction is ruled by air, making it suitable for workspaces, meeting rooms, and areas requiring mental agility. In the body, air governs breathing and nerve impulses. Proper ventilation, wind chimes, and light, airy decor activate the air element. Akash (Space) is the most subtle element—the container of all others. It corresponds to the Brahmasthan, the open centre of the building, and to consciousness itself. Keeping this area open, clean, and well‑lit allows cosmic energy to circulate freely. Vastuvid K.K. Nagaich teaches that a true Vastu analysis must assess the balance of all five elements, not just directional placements. A home might be perfectly aligned directionally but still harbour imbalances that manifest as health problems or relationship conflicts.`
    },
    {
      id: '9',
      title: 'Nakshatra and Name Suggestions – The Complete Guide to Auspicious Names',
      slug: 'nakshatra-name-suggestions-guide',
      excerpt: 'How your birth star determines the ideal starting sound for your name, and why it matters.',
      category: 'Numerology',
      read_time: 10,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `In Vedic astrology, the Nakshatra (birth star) is one of the most important factors in determining an individual's personality, destiny, and life path. There are 27 Nakshatras, each divided into four padas (quarters), and each pada is associated with a specific auspicious syllable. Naming a child according to their Nakshatra is an ancient tradition that helps align the child's identity with cosmic vibrations, attracting good fortune and minimising obstacles. For example, a child born under the Ashwini Nakshatra should have a name starting with Chu, Che, Cho, or La. Bharani natives should choose Lee, Lu, Le, or Lo. Krittika suggests A, I, U, or E. And so on across all 27 Nakshatras. This system, detailed in the Brihat Parashara Hora Shastra, is not arbitrary—each syllable resonates with the specific cosmic frequency of the Nakshatra, strengthening the individual's connection to their astrological blueprint. Naming a business or brand according to Nakshatra principles is equally powerful. A business started under a particular star will thrive with a name that vibrates in harmony. The process involves calculating the Nakshatra of the business' foundational moment (incorporation date, opening ceremony, etc.) and selecting a name that matches that energy. Vastuvid K.K. Nagaich has helped hundreds of families choose auspicious names for their children and businesses. In one case, a couple had three children, all of whom had names that clashed with their Nakshatras, leading to persistent health and behavioural issues. After a formal name correction (Namakaran), the children's conditions improved remarkably. For adults, a name change is more complex but still possible. It involves a formal Vedic ceremony, after which the new name is gradually adopted in social and professional settings. This is not mere superstition—the vibrational energy of a name, repeated thousands of times throughout a lifetime, shapes our self‑perception and how others perceive us. Aligning this vibration with our cosmic blueprint can unlock latent potential and remove deep‑seated obstacles. The AI Name Suggestion tool on VedicUrja provides the auspicious syllables for each Nakshatra, but for a full, personalised analysis that considers planetary positions and dasha timings, a one‑on‑one consultation with Vastuvid K.K. Nagaich is recommended.`
    },
    {
      id: '10',
      title: 'Geopathic Stress – The Hidden Enemy Affecting Your Health',
      slug: 'geopathic-stress-hidden-enemy',
      excerpt: 'Detect and neutralise harmful underground energies that silently impact your well‑being.',
      category: 'Geopathic Stress',
      read_time: 11,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `Geopathic stress refers to natural or man‑made energies emanating from the earth that can have a profound negative impact on human health. These energies arise from underground water veins, mineral deposits, fault lines, and geological fissures. When a person sleeps or works above a geopathic stress zone for prolonged periods, the body's immune system is gradually compromised, leading to a range of health issues including chronic fatigue, insomnia, headaches, allergies, and even serious diseases like cancer. The concept of geopathic stress is not new. Traditional cultures worldwide have avoided building homes over certain "spirit paths" or "dragon lines." In Vedic Vastu, these are known as "Bhumi Doshas" and have been addressed for millennia through specific rituals and remedies. Modern science is now catching up, with studies showing correlations between geopathic stress zones and higher rates of specific illnesses. The detection of geopathic stress requires specialised instruments: geomagnetometers, EMF meters, and dowsing rods. Vastuvid K.K. Nagaich uses a combination of traditional dowsing techniques and modern electronic equipment to accurately map stress zones within a property. Once identified, several remedies are available: copper rod insertion (Geopathic Stress Neutraliser Rods), copper or brass pyramid placement, crystal grids (amethyst, black tourmaline, clear quartz), and in some cases, furniture relocation—simply moving the bed or work desk a few feet can dramatically reduce exposure. The most common symptoms that lead clients to seek geopathic stress assessment are: persistent health problems without a clear medical diagnosis, children who are repeatedly ill, couples who struggle to conceive, and residents who feel constantly drained or anxious in their own homes. In many cases, after geopathic stress has been neutralised, clients report dramatic improvements in sleep quality, energy levels, and overall health within days to weeks. Periodic reassessment is recommended, as new stress zones can develop over time due to underground water table changes or nearby construction. VedicVastuUrja provides comprehensive geopathic stress assessment and remediation as part of its full Vastu consultation package.`
    },
    {
      id: '11',
      title: 'Spiritual Vastu – Designing Your Pooja Room for Maximum Divine Energy',
      slug: 'spiritual-vastu-pooja-room-design',
      excerpt: 'Create a sacred space that amplifies spiritual vibrations and your connection to the divine.',
      category: 'Spiritual Vastu',
      read_time: 9,
      author_name: 'Vastuvid KK Nagaich',
      is_published: true,
      content: `The pooja room, or prayer space, is the spiritual heart of a Vedic home. It is where the family connects with the divine, performs daily rituals, and seeks blessings for health, prosperity, and protection. In Vastu Shastra, the design and placement of the pooja room are of utmost importance, as it directly influences the spiritual well‑being of the residents. The most auspicious location for a pooja room is the Northeast (Ishanya) corner. This direction is ruled by water and is considered the abode of the gods. It receives the pure, gentle morning sunlight from the East and the cool, calming breeze from the North, creating an environment conducive to meditation and prayer. If the Northeast is unavailable, the East or North are acceptable alternatives. The pooja room should never be placed in the South (direction of Yama, the god of death), the Southwest (which is for stability and material possessions), or the Southeast (the fire zone, which can cause restlessness). It should not share a wall with a toilet or be located under a staircase. The idols and images of deities should face West, so the worshipper faces East—the direction of spiritual awakening and the rising sun. The deities should be placed at a slight height, never directly on the floor, and should be arranged in a specific order: the main deity at the centre, with others arranged by size and significance. The use of brass or copper utensils enhances the spiritual vibrations. Lighting a ghee lamp daily in the pooja room is extremely beneficial, as the heat and light purify the environment. A small water feature or a bowl of clean water with fresh flowers should be kept in the Northeast of the room. Colours in the pooja room should be serene: white, cream, light yellow, or soft gold. Bright colours should be avoided as they can disturb the meditative atmosphere. Incense sticks and dhoop should be used to create a fragrant, calming environment. Vastuvid K.K. Nagaich has designed countless pooja rooms that have become powerful centres of spiritual energy, transforming the vibration of entire homes. A well‑designed pooja room is not just a room—it is a portal to the divine.`
    },
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

/* ================================================================
   The hook – used by every data‑driven component.
   ================================================================ */
export function useRealtimeContent<T>(
  table: string,
  orderBy: string = 'created_at',
  ascending: boolean = false
) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const timer = setTimeout(() => {
      if (mountedRef.current) {
        const data = staticData[table] || [];
        setItems(data as T[]);
        setLoading(false);
      }
    }, 50);
    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
    };
  }, [table]);

  const refetch = () => {};
  return { items, loading, refetch };
}
