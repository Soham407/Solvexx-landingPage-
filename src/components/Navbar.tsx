import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../assets/Logo-optimized.png';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../site';
import { SERVICES } from '../constants';
import { useUiMotion } from '../hooks/useUiMotion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useUiMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const activeService = location.pathname.startsWith('/services/')
    ? SERVICES.find(({ id }) => location.pathname === `/services/${id}`)
    : undefined;
  const primaryCtaLabel = activeService?.ctaLabel || 'Request a Quote';
  const navbarPhoneDisplay = '9766669024 / 25';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-2' 
        : isHome ? 'bg-transparent py-4' : 'bg-primary py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Solvesxx Logo" className="h-10 w-auto" />
            <div className="text-2xl font-display font-medium tracking-tighter">
              <span className={scrolled ? 'text-primary' : 'text-white'}>SOLVES</span>
              <span className="text-accent">XX</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path 
                    ? 'text-accent' 
                    : scrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-accent hover:bg-opacity-90 text-white px-6 py-2 rounded-md font-medium transition-all gold-gradient"
            >
              {primaryCtaLabel}
            </Link>
            {CONTACT_PHONE ? (
              <a
                href={`tel:${CONTACT_PHONE}`}
                className={`px-6 py-2 rounded-md font-medium transition-all border-2 ${
                  scrolled
                    ? 'border-primary text-primary hover:bg-primary hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-primary'
                }`}
              >
                Call Now
              </a>
            ) : CONTACT_PHONE_DISPLAY ? (
              <span
                className={`px-6 py-2 rounded-md font-medium transition-all border-2 ${
                  scrolled ? 'border-primary text-primary' : 'border-white text-white'
                }`}
              >
                {navbarPhoneDisplay}
              </span>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={scrolled ? 'text-primary' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-primary hover:bg-gray-50 hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-accent text-white px-6 py-3 rounded-md font-medium gold-gradient"
              >
                {primaryCtaLabel}
              </Link>
              {CONTACT_PHONE ? (
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center border-2 border-primary text-primary px-6 py-3 rounded-md font-medium mt-3"
                >
                  Call Now
                </a>
              ) : CONTACT_PHONE_DISPLAY ? (
                <div className="block w-full text-center border-2 border-primary text-primary px-6 py-3 rounded-md font-medium mt-3">
                  {navbarPhoneDisplay}
                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
