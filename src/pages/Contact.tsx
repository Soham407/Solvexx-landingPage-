import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Security Services',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({
      name: '',
      email: '',
      phone: '',
      service: 'Security Services',
      message: ''
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our experts for a customized facility management solution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-3xl font-medium text-primary mb-8">Get in Touch</h2>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  Whether you have a question about our services or need a comprehensive site audit, our team is ready to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-4 rounded-xl text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Email Us</h4>
                    <p className="text-gray-600">admin@solvesxx.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-4 rounded-xl text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Visit Website</h4>
                    <p className="text-gray-600">www.solvesxx.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-4 rounded-xl text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Corporate Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Omkar Nandan Society, A2, 303, Near Navale Bridge, Vadgaon Bk., Pune - 410041.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary p-4 rounded-xl text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Registered Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Flat no. 2, Praneel Apartment, S.No. 899, Limaye Road, Deccan Gymkhana, Pune - 411004.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="text-accent" />
                  <h3 className="text-2xl font-medium text-primary">Send us a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {isSubmitted && (
                    <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200 font-medium">
                      Thank you for your inquiry. Our team will get back to you shortly.
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-primary uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="Enter your full name"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-primary uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="Enter your email address"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-primary uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-primary uppercase tracking-wider">Service Required</label>
                      <select 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white"
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                      >
                        <option>Security Services</option>
                        <option>Housekeeping & Support</option>
                        <option>AC Services</option>
                        <option>Plantation & Landscaping</option>
                        <option>Pest Control</option>
                        <option>Material Supply</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-primary uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Tell us about your requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all gold-gradient"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
          [ Interactive Google Map Placeholder - Pune, India ]
        </div>
      </section>
    </div>
  );
};

export default Contact;
