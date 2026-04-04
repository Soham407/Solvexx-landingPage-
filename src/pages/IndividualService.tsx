import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft, PhoneCall } from 'lucide-react';
import { SERVICES } from '../constants';

const IndividualService = () => {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <Link to="/services" className="inline-flex items-center gap-2 text-accent font-bold mb-6 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={20} /> Back to Services
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-primary mb-8">Service Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.fullDesc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.id === 'printing-supply' ? (
                  <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Printing & Advertising Services</h4>
                      <div className="flex flex-col gap-4">
                        {service.items.slice(0, 7).map((item) => (
                          <div key={item} className="flex items-center gap-4 p-4 bg-secondary rounded-xl border border-gray-100">
                            <CheckCircle2 className="text-accent shrink-0" />
                            <span className="font-bold text-primary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Material Supply Services</h4>
                      <div className="flex flex-col gap-4">
                        {service.items.slice(7).map((item) => (
                          <div key={item} className="flex items-center gap-4 p-4 bg-secondary rounded-xl border border-gray-100">
                            <CheckCircle2 className="text-accent shrink-0" />
                            <span className="font-bold text-primary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  service.items.map((item) => (
                    <div key={item} className="flex items-center gap-4 p-6 bg-secondary rounded-xl border border-gray-100">
                      <CheckCircle2 className="text-accent shrink-0" />
                      <span className="font-bold text-primary">{item}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary mb-12">
                <h3 className="text-xl font-bold text-primary mb-4">Why Solvesxx for {service.title}?</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.brochureNote || "Our teams maintain hygiene, discipline, and seamless daily operations. We ensure clarity, visibility, and professional presentation in every task we undertake."}
                </p>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-8">Service Process</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Initial Consultation", desc: "Understanding your specific facility needs and site constraints." },
                  { step: 2, title: "Site Assessment", desc: "Detailed audit of the premises to identify key focus areas." },
                  { step: 3, title: "Execution Plan", desc: "Designing a structured, compliant, and performance-driven service plan." },
                  { step: 4, title: "Deployment & Monitoring", desc: "Deployment of trained staff with continuous supervision and quality control." }
                ].map((p) => (
                  <div key={p.step} className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{p.title}</h4>
                      <p className="text-gray-600 text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="bg-primary text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Need this service?</h3>
                  <p className="text-gray-300 mb-8">
                    Contact us today for a personalized quote and site audit.
                  </p>
                  <Link 
                    to="/contact" 
                    className="block w-full bg-accent text-white text-center py-4 rounded-lg font-bold gold-gradient hover:scale-105 transition-transform"
                  >
                    Request a Quote
                  </Link>
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <PhoneCall className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email us at</div>
                      <div className="font-bold">admin@solvesxx.com</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-primary mb-4">Other Services</h4>
                  <div className="space-y-4">
                    {SERVICES.filter(s => s.id !== id).slice(0, 3).map(s => (
                      <Link 
                        key={s.id} 
                        to={`/services/${s.id}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-gray-600 group-hover:text-accent font-medium transition-colors">{s.title}</span>
                        <ArrowLeft className="rotate-180 text-gray-400 group-hover:text-accent transition-colors" size={16} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualService;
