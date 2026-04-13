import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, Factory, GraduationCap } from 'lucide-react';
import { CORE_SERVICES, SUPPORT_SERVICES } from '../constants';
import { CERTIFICATION } from '../site';
import { useUiMotion } from '../hooks/useUiMotion';

const Services = () => {
  const shouldReduceMotion = useUiMotion();

  return (
    <div>
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive facility, hygiene, supply, and support solutions tailored to your operating requirements.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-accent">{CERTIFICATION}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.28em] text-accent mb-3">Core Services</p>
            <h2 className="text-3xl font-medium text-primary">Facility Operations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {CORE_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full p-6 rounded-2xl border border-transparent hover:border-gray-100 transition-all duration-500 overflow-hidden hover:text-white"
              >
                <div className="card-reveal-bg !clip-path-[circle(0%_at_48px_232px)] group-hover:!clip-path-[circle(150%_at_48px_232px)]"></div>
                <div className="card-content flex flex-col h-full">
                  <div className="relative h-64 mb-8 overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <service.icon size={40} className="text-accent mb-2" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-primary mb-4 group-hover:text-white transition-colors duration-500">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    {service.fullDesc}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.items.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-300 transition-colors duration-500">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {item}
                      </div>
                    ))}
                    {service.items.length > 4 && (
                      <div className="text-accent text-sm font-medium group-hover:text-accent">+ {service.items.length - 4} more services</div>
                    )}
                  </div>

                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors border-b-2 border-accent pb-1 w-fit group-hover:text-white group-hover:border-white"
                  >
                    View Service Details <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.28em] text-accent mb-3">Business Support Services</p>
            <h2 className="text-3xl font-medium text-primary mb-4">Additional Capability Areas</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These are support capabilities that extend the company’s operational scope beyond the primary facility-management service lines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUPPORT_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
              >
                <service.icon className="text-accent mb-5" size={28} />
                <h3 className="text-xl font-medium text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.shortDesc}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors"
                >
                  View Details <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-primary mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Corporate Offices", icon: Building2 },
              { name: "Residential Complexes", icon: Home },
              { name: "Industrial Premises", icon: Factory },
              { name: "Institutions", icon: GraduationCap }
            ].map((industry) => (
              <div key={industry.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <div className="text-accent mb-4 bg-secondary p-4 rounded-full">
                  <industry.icon size={32} />
                </div>
                <h4 className="font-medium text-primary">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
