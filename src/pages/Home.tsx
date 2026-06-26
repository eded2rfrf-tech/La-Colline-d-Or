import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ROOMS, TESTIMONIALS } from '@/data/mockData';
import { Star, MapPin } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a42088ea28?auto=format&fit=crop&q=80&w=2000" 
            alt="La Colline Royale Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-gold-500 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6">Welcome to</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
              La Colline Royale
            </h1>
            <p className="text-lg md:text-xl text-beige-100/90 font-light max-w-2xl mx-auto mb-12">
              Where Moroccan heritage meets contemporary luxury in the heart of the Atlas Mountains.
            </p>
            <Link 
              to="/booking"
              className="inline-block bg-gold-500 text-ink-900 uppercase tracking-widest px-10 py-4 text-sm font-medium hover:bg-white hover:text-ink-900 transition-colors duration-500"
            >
              Discover Your Stay
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features / Intro */}
      <section className="py-24 px-4 bg-ink-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">An Oasis of Tranquility</h2>
            <p className="text-beige-200/70 leading-relaxed mb-6">
              Nestled at the foothills of the majestic Atlas Mountains in Béni Mellal, La Colline Royale is a sanctuary of elegance. We invite you to experience a seamless blend of traditional Moroccan architecture and modern luxury.
            </p>
            <p className="text-beige-200/70 leading-relaxed mb-10">
              From our world-class dining to our rejuvenating spa treatments, every detail is meticulously crafted to ensure an unforgettable escape.
            </p>
            <Link 
              to="/about"
              className="uppercase tracking-widest text-sm text-gold-500 hover:text-white transition-colors border-b border-gold-500 pb-1"
            >
              Explore Our Story
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000" 
              alt="Hotel Interior" 
              className="w-full h-auto aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-ink-800 p-8 border border-ink-700 hidden md:block">
              <Star className="w-8 h-8 text-gold-500 mb-4" />
              <p className="font-serif text-xl">5-Star Luxury</p>
              <p className="text-sm text-beige-200/50 mt-2">Award Winning Hotel</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 px-4 bg-ink-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif mb-6 text-white"
            >
              Exceptional Accommodations
            </motion.h2>
            <p className="text-beige-200/70 max-w-2xl mx-auto">Experience unparalleled comfort in our meticulously designed rooms and suites.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room, index) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-900/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">{room.name}</h3>
                <p className="text-gold-500 mb-4">From ${room.price} / night</p>
                <Link to={`/rooms`} className="text-sm uppercase tracking-widest text-beige-200/70 group-hover:text-gold-500 transition-colors">
                  Discover More &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a42088ea28?auto=format&fit=crop&q=80&w=2000" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Star className="w-12 h-12 text-gold-500 mx-auto mb-8" />
          <h2 className="text-4xl font-serif text-white mb-16">Guest Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-ink-800 p-8 border border-ink-700/50"
              >
                <p className="text-beige-200/80 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-serif text-white">{testimonial.name}</p>
                  <p className="text-xs text-gold-500 uppercase tracking-wider mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location / CTA */}
      <section className="py-24 px-4 bg-ink-800">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-10 h-10 text-gold-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Discover Béni Mellal</h2>
          <p className="text-beige-200/70 mb-10 max-w-2xl mx-auto">
            Located between the plains and the Atlas Mountains, our hotel is the perfect starting point to explore the natural beauty and rich culture of the region.
          </p>
          <Link 
            to="/contact"
            className="inline-block border border-gold-500 text-gold-500 uppercase tracking-widest px-8 py-3 text-sm font-medium hover:bg-gold-500 hover:text-ink-900 transition-colors duration-300"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
}
