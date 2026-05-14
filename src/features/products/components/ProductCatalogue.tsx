'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Product data – 20 Vastu products
const products = [
  { id: 1, name: "Copper Vastu Pyramid", category: "Pyramids", price: 2999, description: "3‑inch copper pyramid for energy amplification, Vastu dosha correction, and protection. Energised with mantras.", benefits: ["Amplifies positive energy", "Corrects Vastu defects", "Protects from negativity"], whatsapp: "Hi, I want to buy the Copper Vastu Pyramid (₹2,999). Please guide me.", image: "/images/products/product-1.jpg" },
  { id: 2, name: "Sri Yantra (Copper)", category: "Yantras", price: 1499, description: "Energised copper Sri Yantra – attracts wealth, prosperity, and spiritual growth. 3D embossed design.", benefits: ["Attracts wealth & abundance", "Spiritual growth", "Removes financial obstacles"], whatsapp: "Hi, I want to buy the Sri Yantra (₹1,499). Please guide me.", image: "/images/products/product-2.jpg" },
  { id: 3, name: "Clear Quartz Crystal", category: "Crystals", price: 999, description: "Natural clear quartz point – amplifies energy, brings clarity, and enhances meditation.", benefits: ["Amplifies energy", "Mental clarity", "Balances chakras"], whatsapp: "Hi, I want to buy the Clear Quartz Crystal (₹999). Please guide me.", image: "/images/products/product-3.jpg" },
  { id: 4, name: "Kuber Yantra", category: "Yantras", price: 1299, description: "Energised Kuber Yantra for financial stability and business growth. Place in North direction.", benefits: ["Attracts wealth", "Business growth", "Financial stability"], whatsapp: "Hi, I want to buy the Kuber Yantra (₹1,299). Please guide me.", image: "/images/products/product-4.jpg" },
  { id: 5, name: "Rose Quartz Tree", category: "Crystals", price: 2499, description: "Rose quartz tree of life – harmonises relationships, attracts love, and brings peace.", benefits: ["Harmonises relationships", "Attracts love", "Emotional healing"], whatsapp: "Hi, I want to buy the Rose Quartz Tree (₹2,499). Please guide me.", image: "/images/products/product-5.jpg" },
  { id: 6, name: "Brass Tortoise", category: "Vastu Figurines", price: 899, description: "Brass tortoise for longevity, stability, and career growth. Place in North direction.", benefits: ["Longevity & health", "Career stability", "Protection"], whatsapp: "Hi, I want to buy the Brass Tortoise (₹899). Please guide me.", image: "/images/products/product-6.jpg" },
  { id: 7, name: "Vastu Dosh Nivaran Yantra", category: "Yantras", price: 1999, description: "Powerful yantra to remove Vastu defects without demolition. Energised by Vastuvid K.K. Nagaich.", benefits: ["Removes Vastu defects", "Balances five elements", "Harmonises space"], whatsapp: "Hi, I want to buy the Vastu Dosh Nivaran Yantra (₹1,999). Please guide me.", image: "/images/products/product-7.jpg" },
  { id: 8, name: "Amethyst Crystal", category: "Crystals", price: 1199, description: "Natural amethyst geode – promotes peace, stress relief, and spiritual awareness.", benefits: ["Stress relief", "Peaceful sleep", "Spiritual awareness"], whatsapp: "Hi, I want to buy the Amethyst Crystal (₹1,199). Please guide me.", image: "/images/products/product-8.jpg" },
  { id: 9, name: "Brass Frog", category: "Vastu Figurines", price: 699, description: "Brass frog for prosperity, abundance, and financial flow. Place in North or East.", benefits: ["Attracts prosperity", "Financial growth", "Removes obstacles"], whatsapp: "Hi, I want to buy the Brass Frog (₹699). Please guide me.", image: "/images/products/product-9.jpg" },
  { id: 10, name: "Gomati Chakra", category: "Sacred Items", price: 499, description: "Set of 7 Gomati Chakras – natural sea fossils for good luck, protection, and prosperity.", benefits: ["Good luck & fortune", "Protection", "Prosperity"], whatsapp: "Hi, I want to buy the Gomati Chakra set (₹499). Please guide me.", image: "/images/products/product-10.jpg" },
  { id: 11, name: "Black Tourmaline", category: "Crystals", price: 1499, description: "Raw black tourmaline for EMF protection, grounding, and negativity absorption.", benefits: ["EMF protection", "Negativity absorption", "Grounding"], whatsapp: "Hi, I want to buy the Black Tourmaline (₹1,499). Please guide me.", image: "/images/products/product-11.jpg" },
  { id: 12, name: "Laughing Buddha", category: "Vastu Figurines", price: 1299, description: "Golden Laughing Buddha with coins – symbol of happiness, wealth, and good fortune.", benefits: ["Happiness & joy", "Attracts wealth", "Positive energy"], whatsapp: "Hi, I want to buy the Laughing Buddha (₹1,299). Please guide me.", image: "/images/products/product-12.jpg" },
  { id: 13, name: "Navagraha Yantra", category: "Yantras", price: 2499, description: "Navagraha Yantra to balance all 9 planetary influences. Energised with Vedic mantras.", benefits: ["Planetary balance", "Removes doshas", "Harmony"], whatsapp: "Hi, I want to buy the Navagraha Yantra (₹2,499). Please guide me.", image: "/images/products/product-13.jpg" },
  { id: 14, name: "Citrine Crystal", category: "Crystals", price: 899, description: "Citrine point for business success, wealth attraction, and manifestation.", benefits: ["Business success", "Wealth attraction", "Manifestation"], whatsapp: "Hi, I want to buy the Citrine Crystal (₹899). Please guide me.", image: "/images/products/product-14.jpg" },
  { id: 15, name: "7 Horses Painting", category: "Vastu Art", price: 3499, description: "Running 7 horses canvas painting – symbolises success, speed, and career growth. Ready to hang.", benefits: ["Success & achievement", "Career growth", "Motivation"], whatsapp: "Hi, I want to buy the 7 Horses Painting (₹3,499). Please guide me.", image: "/images/products/product-15.jpg" },
  { id: 16, name: "Parad Shivling", category: "Sacred Items", price: 9999, description: "Siddh Parad Shivling (mercury) – most powerful Vastu remedy. Energised with Ashtasanskar.", benefits: ["Ultimate dosha removal", "Spiritual upliftment", "Divine blessings"], whatsapp: "Hi, I want to buy the Parad Shivling (₹9,999). Please guide me.", image: "/images/products/product-16.jpg" },
  { id: 17, name: "Pyramid Yantra Combo", category: "Combos", price: 3999, description: "Set of copper pyramid + Sri Yantra + Kuber Yantra – complete Vastu correction kit.", benefits: ["Complete Vastu solution", "Wealth + protection", "Energised"], whatsapp: "Hi, I want to buy the Pyramid Yantra Combo (₹3,999). Please guide me.", image: "/images/products/product-17.jpg" },
  { id: 18, name: "Rudraksha Mala (5 Mukhi)", category: "Sacred Items", price: 2499, description: "Authentic 5 Mukhi Rudraksha mala, energised, with silk thread and kailash silver bead.", benefits: ["Stress relief", "Concentration", "Protection"], whatsapp: "Hi, I want to buy the Rudraksha Mala (₹2,499). Please guide me.", image: "/images/products/product-18.jpg" },
  { id: 19, name: "Swastik Pyramid", category: "Pyramids", price: 1799, description: "Swastik-engraved copper pyramid for all‑round Vastu correction and positive energy.", benefits: ["Vastu dosha removal", "Positive energy", "Protection"], whatsapp: "Hi, I want to buy the Swastik Pyramid (₹1,799). Please guide me.", image: "/images/products/product-19.jpg" },
  { id: 20, name: "Vastu Salt Lamp", category: "Vastu Remedies", price: 1499, description: "Himalayan salt lamp – purifies air, creates positive energy, removes negativity.", benefits: ["Air purification", "Positivity", "Stress reduction"], whatsapp: "Hi, I want to buy the Vastu Salt Lamp (₹1,499). Please guide me.", image: "/images/products/product-20.jpg" }
];

export default function ProductCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);

  const handleBuyNow = (productName: string, price: number, whatsappMessage: string) => {
    window.open(`https://wa.me/916393570832?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-vastu-parchment to-white">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nidra-indigo mb-4">
            VedicUrja <span className="text-prakash-gold">Product Catalogue</span>
          </h1>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto">
            Authentic, energised Vastu products – each item personally blessed by Vastuvid K.K. Nagaich.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white shadow-md"
                  : "bg-white/50 border border-prakash-gold/30 text-nidra-indigo hover:bg-prakash-gold/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, rotateY: 3 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-prakash-gold/20"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-sm text-prakash-gold border border-prakash-gold/30 shadow-sm">{product.category}</span>
                </div>
                {product.id <= 3 && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white shadow-md">Best Seller</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-nidra-indigo/60 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.benefits.slice(0, 2).map((benefit, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-prakash-gold/10 text-prakash-gold">{benefit}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-prakash-gold">₹{product.price.toLocaleString()}</span>
                    {product.price > 2000 && <span className="ml-2 text-xs text-nidra-indigo/40 line-through">₹{(product.price * 1.2).toFixed(0)}</span>}
                  </div>
                  <button onClick={() => handleBuyNow(product.name, product.price, product.whatsapp)} className="px-5 py-2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all">Buy Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && <div className="text-center py-20"><p className="text-nidra-indigo/60">No products in this category.</p></div>}
      </div>
    </div>
  );
}
