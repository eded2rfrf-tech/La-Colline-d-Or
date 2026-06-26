import { motion } from 'motion/react';

export function About() {
  return (
    <div className="pt-32 pb-24 bg-ink-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gold-500 uppercase tracking-widest text-sm"
          >
            A Legacy of Excellence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1542314831-c6a42088ea28?auto=format&fit=crop&q=80&w=1200" 
                alt="Hotel exterior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-gold-500/30 z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-white mb-6">Born from a Vision</h2>
            <p className="text-beige-200/70 leading-relaxed mb-6">
              La Colline Royale was conceived with a singular vision: to create a sanctuary where the timeless elegance of Moroccan architecture meets uncompromising modern luxury. Located in Béni Mellal, at the foot of the Atlas Mountains, the hotel serves as a gateway to both natural wonder and refined relaxation.
            </p>
            <p className="text-beige-200/70 leading-relaxed mb-6">
              Every archway, mosaic, and furnishing has been carefully selected to reflect the rich cultural heritage of the region, while ensuring that our guests enjoy the highest standards of international hospitality.
            </p>
            <p className="text-beige-200/70 leading-relaxed">
              We are committed to sustainability, supporting local artisans, and providing personalized service that anticipates every need. Welcome to your home in the mountains.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
