import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, USPs } from '../constants';

import SecurityGuardImg from '../assets/ServiceImages/Security_Guard.png';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern Office" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          </div>
          <div className="hidden lg:block w-1/2 h-full relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rotate-45">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-4">
                <div className="overflow-hidden bg-white p-2 shadow-2xl rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800" alt="Cleaning" className="w-full h-full object-cover -rotate-45 scale-[1.4]" referrerPolicy="no-referrer" />
                </div>
                <div className="overflow-hidden bg-white p-2 shadow-2xl rounded-3xl">
                  <img src={SecurityGuardImg} alt="Security" className="w-full h-full object-cover -rotate-45 scale-[1.4]" referrerPolicy="no-referrer" />
                </div>
                <div className="overflow-hidden bg-white p-2 shadow-2xl rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800" alt="AC Service" className="w-full h-full object-cover -rotate-45 scale-[1.4]" referrerPolicy="no-referrer" />
                </div>
                <div className="overflow-hidden bg-white p-2 shadow-2xl rounded-3xl">
                  <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800" alt="Landscaping" className="w-full h-full object-cover -rotate-45 scale-[1.4]" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
          {/* Gradient overlay for navbar readability */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/90 to-transparent z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 lg:pr-12 py-12"
          >
            <span className="text-accent tracking-widest uppercase text-sm mb-4 block">Powerfull Solutions Pvt. Ltd.</span>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 leading-tight">
              Complete Facility & <br />
              <span className="text-accent">Infrastructure Solutions</span>
            </h1>
            <p className="text-xl text-gray-100 mb-6 leading-relaxed border-l-4 border-accent pl-6">
              Managed with Integrity. <br />
              Delivered with Precision.
            </p>
            <p className="text-sm text-gray-300 mb-10 italic">
              Security. Maintenance. Hygiene. Infrastructure. <br />
              One trusted partner for total facility excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-accent text-white px-8 py-4 rounded-md font-medium text-lg flex items-center justify-center gap-2 gold-gradient hover:scale-105 transition-transform shadow-xl"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-medium text-lg flex items-center justify-center hover:bg-white/20 transition-all"
              >
                Request Site Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USPs Strip */}
      <section className="bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">Why Solvexx</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USPs.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex items-start gap-4 p-6 rounded-xl transition-all overflow-hidden hover:text-white"
              >
                <div className="card-reveal-bg !bg-primary"></div>
                <div className="card-content flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500 shrink-0">
                    <usp.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary mb-1 group-hover:text-white transition-colors duration-500">{usp.title}</h3>
                    <p className="text-sm text-gray-600 leading-snug group-hover:text-gray-200 transition-colors duration-500">{usp.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">Our Core Services</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professionally managed facility services delivering integrated solutions across multiple domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg text-accent">
                    <service.icon size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{service.shortDesc}</p>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="text-accent font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
                  alt="Women Leadership" 
                  className="rounded-2xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-accent rounded-2xl z-0"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-accent tracking-widest uppercase text-sm mb-4 block">About Solvesxx</span>
              <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">Women-Led Leadership with a Legal Backbone</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are a professionally managed facility services company delivering integrated solutions. Founded, managed, and operated by five dynamic women entrepreneurs who bring diverse expertise under one unified vision.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" />
                  <span className="font-medium text-primary">Statutory Compliance & Contract Transparency</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" />
                  <span className="font-medium text-primary">Structured Administrative Control</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" />
                  <span className="font-medium text-primary">Industrial Process Discipline</span>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">How We Work</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures every service is executed with accountability and quality control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "Site Audit", desc: "Comprehensive assessment of your facility requirements." },
              { step: "02", title: "Custom Plan", desc: "Tailored solution design with legal and operational safeguards." },
              { step: "03", title: "Deployment", desc: "Trained and verified workforce deployment with supervision." },
              { step: "04", title: "Quality Control", desc: "Continuous monitoring and performance-driven management." }
            ].map((item, index) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center overflow-hidden hover:text-white transition-all duration-500"
              >
                <div className="card-reveal-bg !clip-path-[circle(0%_at_50%_50%)] group-hover:!clip-path-[circle(150%_at_50%_50%)]"></div>
                <div className="card-content">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-white font-medium text-xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium text-primary mb-3 group-hover:text-white transition-colors duration-500">{item.title}</h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-200 transition-colors duration-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Corporate Client", role: "Facility Manager", text: "Solvesxx has transformed our office maintenance. Their attention to hygiene and discipline is unmatched." },
              { name: "Industrial Partner", role: "Operations Head", text: "The legal compliance and structured control they bring to security services give us complete peace of mind." },
              { name: "Residential Society", role: "Secretary", text: "Professional, reliable, and always on time. Their landscaping and housekeeping teams are top-notch." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex text-accent mb-4">
                  {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <div>
                  <div className="font-medium text-primary">{t.name}</div>
                  <div className="text-sm text-accent">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to elevate your facility management?</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Your facility deserves management that is disciplined, ethical, and efficient. Contact us for a custom solution.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-accent text-white px-10 py-4 rounded-md font-medium text-lg gold-gradient hover:scale-105 transition-transform"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
