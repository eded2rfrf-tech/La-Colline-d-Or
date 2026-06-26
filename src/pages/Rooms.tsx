import { motion } from 'motion/react';
import { ROOMS } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export function Rooms() {
  return (
    <div className="pt-24 bg-ink-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-white mb-6"
          >
            Rooms & Suites
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-beige-200/70 max-w-2xl mx-auto text-lg"
          >
            A sanctuary of calm and luxury. Discover our meticulously appointed spaces designed for your utmost comfort.
          </motion.p>
        </div>

        <div className="space-y-24">
          {ROOMS.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-serif text-white mb-4">{room.name}</h2>
                <p className="text-gold-500 text-xl mb-6">From ${room.price} <span className="text-sm text-beige-200/50 uppercase tracking-widest">/ night</span></p>
                <p className="text-beige-200/80 mb-8 leading-relaxed">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-sm text-beige-200/60 uppercase tracking-wider">
                    <span className="block text-white font-medium mb-1">Size</span>
                    {room.size}
                  </div>
                  <div className="text-sm text-beige-200/60 uppercase tracking-wider">
                    <span className="block text-white font-medium mb-1">Capacity</span>
                    {room.capacity}
                  </div>
                  <div className="text-sm text-beige-200/60 uppercase tracking-wider col-span-2">
                    <span className="block text-white font-medium mb-1">Bed</span>
                    {room.bed}
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">Amenities</h4>
                  <ul className="grid grid-cols-2 gap-y-3">
                    {room.amenities.map(amenity => (
                      <li key={amenity} className="flex items-center text-sm text-beige-200/70">
                        <Check className="w-4 h-4 text-gold-500 mr-2" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/booking"
                  className="inline-block bg-gold-500 text-ink-900 uppercase tracking-widest px-8 py-3 text-sm font-medium hover:bg-white hover:text-ink-900 transition-colors"
                >
                  Book This Room
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
