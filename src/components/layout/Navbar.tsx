import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Rooms & Suites', path: '/rooms' },
  { name: 'Restaurant', path: '/restaurant' },
  { name: 'Spa & Wellness', path: '/spa' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-ink-900/90 backdrop-blur-md border-b border-ink-800 py-4 shadow-lg' 
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif text-gold-500 tracking-wider">
            La Colline Royale
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gold-500',
                  location.pathname === link.path ? 'text-gold-500' : 'text-beige-100'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-gold-500 text-ink-900 px-6 py-2 uppercase tracking-widest text-sm font-medium hover:bg-gold-400 transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-beige-100 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-900/95 backdrop-blur-md flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-beige-100 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center space-y-8">
              {LINKS.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-2xl font-serif tracking-wider transition-colors duration-300',
                      location.pathname === link.path ? 'text-gold-500' : 'text-beige-100'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="pt-8"
              >
                <Link
                  to="/booking"
                  className="bg-gold-500 text-ink-900 px-8 py-3 text-lg uppercase tracking-widest font-medium"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
