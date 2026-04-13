import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../assets/Logo-optimized.png';
import {
  CERTIFICATION,
  CIN_NUMBER,
  CONTACT_ADDRESSES,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONES,
  CONTACT_PHONE_DISPLAY,
  CONTACT_RESPONSE_COMMITMENT,
  GST_NUMBER,
  LEGAL_NAME,
  SITE_TAGLINE,
  WEBSITE_HOST,
} from '../site';

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
              {SITE_TAGLINE} Managed with Integrity. Delivered with Precision.
            </p>
            <p className="text-sm text-gray-400 mb-6">
              {CONTACT_RESPONSE_COMMITMENT}
            </p>
            <p className="text-sm text-gray-400 mb-2">{CERTIFICATION}</p>
            <p className="text-xs text-gray-500">GST: {GST_NUMBER}</p>
            <p className="text-xs text-gray-500 mb-6">CIN: {CIN_NUMBER}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200 transition-colors hover:border-accent hover:text-white"
              >
                <Mail size={16} />
                Email Us
              </a>
              <a
                href={`https://${WEBSITE_HOST}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200 transition-colors hover:border-accent hover:text-white"
              >
                <Globe size={16} />
                Visit Website
              </a>
              {CONTACT_PHONE ? (
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200 transition-colors hover:border-accent hover:text-white"
                >
                  <Phone size={16} />
                  Call Us
              </a>
            ) : null}
            {!CONTACT_PHONE
              ? CONTACT_PHONES.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200 transition-colors hover:border-accent hover:text-white"
                  >
                    <Phone size={16} />
                    {phone}
                  </a>
                ))
              : null}
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
                    {CONTACT_ADDRESSES.corporate}
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <div>
                  <div className="text-accent text-xs uppercase mb-1">Registered Office</div>
                  <span className="text-gray-300 text-sm">
                    {CONTACT_ADDRESSES.registered}
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-accent shrink-0" size={20} />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-300 text-sm hover:text-accent transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent shrink-0" size={20} />
                {CONTACT_PHONE ? (
                  <a href={`tel:${CONTACT_PHONE}`} className="text-gray-300 text-sm hover:text-accent transition-colors">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                ) : (
                  <span className="text-gray-300 text-sm">{CONTACT_PHONE_DISPLAY}</span>
                )}
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="text-accent shrink-0" size={20} />
                <a
                  href={`https://${WEBSITE_HOST}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 text-sm hover:text-accent transition-colors"
                >
                  {WEBSITE_HOST}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Solvesxx ({LEGAL_NAME}). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
