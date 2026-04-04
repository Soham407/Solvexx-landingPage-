import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={Logo} alt="Solvesxx Logo" className="h-12 w-auto" />
              <div className="text-3xl font-display font-medium tracking-tighter">
                <span>SOLVES</span><span className="text-accent">XX</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete Facility & Infrastructure Solutions. Managed with Integrity. Delivered with Precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 border-b border-accent/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/why-us" className="text-gray-300 hover:text-accent transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6 border-b border-accent/30 pb-2 inline-block">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/security" className="text-gray-300 hover:text-accent transition-colors">Security Services</Link></li>
              <li><Link to="/services/housekeeping" className="text-gray-300 hover:text-accent transition-colors">Housekeeping</Link></li>
              <li><Link to="/services/ac-services" className="text-gray-300 hover:text-accent transition-colors">AC Services</Link></li>
              <li><Link to="/services/pest-control" className="text-gray-300 hover:text-accent transition-colors">Pest Control</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6 border-b border-accent/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <div>
                  <div className="text-accent text-xs uppercase mb-1">Corporate Office</div>
                  <span className="text-gray-300 text-sm">
                    Omkar Nandan Society, A2, 303, Near Navale Bridge, Vadgaon Bk., Pune - 410041.
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <div>
                  <div className="text-accent text-xs uppercase mb-1">Registered Office</div>
                  <span className="text-gray-300 text-sm">
                    Flat no. 2, Praneel Apartment, S.No. 899, Limaye Road, Deccan Gymkhana, Pune - 411004.
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-gray-300 text-sm">admin@solvesxx.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-gray-300 text-sm">www.solvesxx.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Solvesxx (Powerfull Solutions Pvt. Ltd.). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
