import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Spa() {
  return (
    <div className="pt-24 bg-ink-900 min-h-screen">
      <div className="relative h-[60vh] w-full flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000" 
            alt="Spa Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Spa & Wellness
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gold-500 uppercase tracking-widest text-sm"
          >
            Rejuvenate Your Mind & Body
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-white mb-6">Traditional Hammam & Spa</h2>
            <p className="text-beige-200/70 leading-relaxed mb-6">
              Step into a realm of pure tranquility. Our spa combines age-old Moroccan wellness traditions with contemporary therapies to offer a deeply restorative experience. 
            </p>
            <p className="text-beige-200/70 leading-relaxed mb-8">
              Indulge in our signature Hammam ritual using natural black soap and argan oil, followed by a customized massage designed to melt away stress.
            </p>
            <ul className="space-y-4 text-beige-200/80">
              <li className="flex items-center"><span className="w-2 h-2 bg-gold-500 mr-4"></span> Traditional Moroccan Hammam</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-gold-500 mr-4"></span> Aromatherapy Massages</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-gold-500 mr-4"></span> Facial Treatments</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-gold-500 mr-4"></span> Indoor Heated Pool & Sauna</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3]"
          >
            <img 
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1200" 
              alt="Spa Treatment" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact"
            className="inline-block bg-gold-500 text-ink-900 uppercase tracking-widest px-10 py-4 text-sm font-medium hover:bg-white hover:text-ink-900 transition-colors"
          >
            Book a Treatment
          </Link>
        </div>
      </div>
    </div>
  );
}
