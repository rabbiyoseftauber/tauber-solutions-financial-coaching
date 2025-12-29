import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const navigation = [
  { name: 'Home', page: 'Home' },
  { name: 'Services', page: 'Services' },
  { name: 'Our Coaches', page: 'Coaches' },
  { name: 'Schedule', page: 'Schedule' },
  { name: 'Testimonials', page: 'Testimonials' },
  { name: 'Free Tools', page: 'Tools' },
  { name: 'Affiliates', page: 'Affiliates' },
  { name: 'Community', page: 'Community' },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPageName]);

  const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692d97eec5d324b9b483d4d8/6ec108081_WhatsAppImage2025-12-29at100900AM.jpg";

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        :root {
          --color-primary: #1F2A44;
          --color-accent: #C2983B;
        }
      `}</style>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
              <img 
                src={logoUrl} 
                alt="Tauber Solutions" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.page)}
                  className={`text-sm tracking-wide transition-colors duration-300 ${
                    currentPageName === item.page
                      ? 'text-[#C2983B] font-medium'
                      : isScrolled 
                        ? 'text-[#1F2A44] hover:text-[#C2983B]' 
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-[#1F2A44]' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="container mx-auto px-6 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    className={`block text-lg ${
                      currentPageName === item.page
                        ? 'text-[#C2983B] font-medium'
                        : 'text-[#1F2A44]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#1F2A44] text-white">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <img 
                src={logoUrl} 
                alt="Tauber Solutions" 
                className="h-16 w-auto mb-6"
              />
              <p className="text-gray-400 font-light leading-relaxed">
                Your Money, Your Goals, Our Mission
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#C2983B] text-sm tracking-[0.2em] uppercase mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={createPageUrl(item.page)}
                      className="text-gray-400 hover:text-white transition-colors font-light"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[#C2983B] text-sm tracking-[0.2em] uppercase mb-6">Resources</h4>
              <ul className="space-y-3">
                {navigation.slice(4).map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={createPageUrl(item.page)}
                      className="text-gray-400 hover:text-white transition-colors font-light"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#C2983B] text-sm tracking-[0.2em] uppercase mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>
                  <a href="mailto:chaim@taubersolutions.com" className="hover:text-white transition-colors">
                    chaim@taubersolutions.com
                  </a>
                </li>
                <li>
                  <a href="tel:+13479638998" className="hover:text-white transition-colors">
                    +1 (347) 963-8998
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Tauber Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
              <span>Powered by Base44</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}