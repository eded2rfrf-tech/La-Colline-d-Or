import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Restaurant() {
  return (
    <div className="pt-24 bg-ink-900 min-h-screen">
      <div className="relative h-[60vh] w-full flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            L'Étoile d'Or
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gold-500 uppercase tracking-widest text-sm"
          >
            Fine Dining & Culinary Excellence
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-white mb-6">A Taste of Morocco</h2>
            <p className="text-beige-200/70 leading-relaxed mb-6">
              Under the guidance of our award-winning Executive Chef, L'Étoile d'Or offers an exquisite journey through Moroccan and Mediterranean cuisines. We source the finest local ingredients to create dishes that are both innovative and deeply rooted in tradition.
            </p>
            <p className="text-beige-200/70 leading-relaxed">
              Dine in our elegant main room or on the panoramic terrace overlooking the gardens and mountains.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" alt="Culinary dish" className="w-full h-full object-cover aspect-square" />
            <img src="https://images.unsplash.com/photo-1574966739987-65e386c120f8?auto=format&fit=crop&q=80&w=800" alt="Wine pouring" className="w-full h-full object-cover aspect-square mt-8" />
          </motion.div>
        </div>

        <div className="bg-ink-800 p-12 border border-ink-700 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Opening Hours</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12 mb-8 text-beige-200/70">
            <div>
              <p className="text-gold-500 font-medium mb-1">Breakfast</p>
              <p>7:00 AM - 10:30 AM</p>
            </div>
            <div>
              <p className="text-gold-500 font-medium mb-1">Lunch</p>
              <p>12:30 PM - 3:00 PM</p>
            </div>
            <div>
              <p className="text-gold-500 font-medium mb-1">Dinner</p>
              <p>7:00 PM - 11:00 PM</p>
            </div>
          </div>
          <Link 
            to="/contact"
            className="inline-block border border-gold-500 text-gold-500 uppercase tracking-widest px-8 py-3 text-sm font-medium hover:bg-gold-500 hover:text-ink-900 transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </div>
  );
}
