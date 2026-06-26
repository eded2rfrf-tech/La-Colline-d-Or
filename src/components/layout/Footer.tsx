import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-ink-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <h3 className="text-2xl font-serif text-gold-500 mb-6">La Colline Royale</h3>
            <p className="text-beige-200/70 text-sm leading-relaxed mb-6">
              Experience the pinnacle of Moroccan hospitality and luxury in the heart of Béni Mellal, surrounded by the majestic Atlas Mountains.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-beige-200/70 hover:text-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-beige-200/70 hover:text-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-beige-200/70 hover:text-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/rooms" className="text-beige-200/70 hover:text-gold-500 transition-colors text-sm">Rooms & Suites</Link></li>
              <li><Link to="/restaurant" className="text-beige-200/70 hover:text-gold-500 transition-colors text-sm">Dining Experience</Link></li>
              <li><Link to="/spa" className="text-beige-200/70 hover:text-gold-500 transition-colors text-sm">Spa & Wellness</Link></li>
              <li><Link to="/gallery" className="text-beige-200/70 hover:text-gold-500 transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/about" className="text-beige-200/70 hover:text-gold-500 transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-beige-200/70">
              <li>Avenue Hassan II</li>
              <li>Béni Mellal 23000, Morocco</li>
              <li className="pt-2">
                <a href="tel:+212523456789" className="hover:text-gold-500 transition-colors">+212 523 456 789</a>
              </li>
              <li>
                <a href="mailto:info@lacollineroyale.com" className="hover:text-gold-500 transition-colors">info@lacollineroyale.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-beige-200/70 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-ink-800 border border-ink-800 focus:border-gold-500 px-4 py-3 outline-none text-sm transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-gold-500 text-ink-900 uppercase tracking-widest text-xs font-medium py-3 hover:bg-gold-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-ink-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-beige-200/50">
          <p>&copy; {new Date().getFullYear()} La Colline Royale. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
