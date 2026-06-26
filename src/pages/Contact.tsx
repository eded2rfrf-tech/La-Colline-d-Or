import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-ink-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-beige-200/70 max-w-2xl mx-auto text-lg"
          >
            We look forward to welcoming you. Please reach out with any inquiries or special requests.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-serif text-white mb-8">Send a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-ink-800 border border-gold-500/50 p-8 text-center">
                <p className="text-gold-500 font-serif text-xl mb-2">Thank you for your message.</p>
                <p className="text-beige-200/70">Our concierge team will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-ink-800 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-ink-800 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-ink-800 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-beige-200/70 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full bg-ink-800 border border-ink-700 px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="bg-gold-500 text-ink-900 uppercase tracking-widest px-8 py-4 text-sm font-medium hover:bg-white transition-colors w-full disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-serif text-white mb-8">Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Address</h3>
                    <p className="text-beige-200/70">Avenue Hassan II<br />Béni Mellal 23000, Morocco</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-beige-200/70"><a href="tel:+212523456789" className="hover:text-gold-500 transition-colors">+212 523 456 789</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-beige-200/70"><a href="mailto:info@lacollineroyale.com" className="hover:text-gold-500 transition-colors">info@lacollineroyale.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-video w-full bg-ink-800 border border-ink-700 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106622.38318182967!2d-6.438491375990529!3d32.33408035176182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38647c2b647f1%3A0xc3f2f814b7f94bb8!2sBeni%20Mellal!5e0!3m2!1sen!2sma!4v1707000000000!5m2!1sen!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 filter grayscale invert contrast-80 opacity-80"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
