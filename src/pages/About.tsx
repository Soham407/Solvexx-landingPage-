import React from 'react';
import { motion } from 'motion/react';
import { Scale, Users, Settings, ShieldCheck, Target, Eye } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      title: "Legal Professionals",
      desc: "Experienced lawyers managing all statutory compliance, contracts, regulatory frameworks, and client legal safeguards.",
      icon: Scale
    },
    {
      title: "Administrative Experts",
      desc: "Specialists in operational management, workforce supervision, deployment planning, and execution control.",
      icon: Users
    },
    {
      title: "Operations Specialist",
      desc: "Expert in process management, supply chain coordination, quality systems, and production discipline.",
      icon: Settings
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary bg-pattern pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Solvesxx</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A professionally managed facility services company built on trust, integrity, and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About The Company</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Solvesxx was founded on the principle that facilities are not just buildings—they are complex ecosystems. We bring a unique, legally-backed approach to facility management, ensuring that every operational detail is handled with precision, compliance, and unwavering discipline.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our approach is structured and performance-driven. Every service across security, housekeeping, technical maintenance, and material supply is executed with strict accountability and rigorous quality control.
              </p>
              <div className="bg-secondary p-8 rounded-xl border-l-4 border-accent mb-8">
                <p className="text-primary font-bold text-xl mb-2">
                  "We believe facilities are not just buildings."
                </p>
                <p className="italic text-primary">
                  They are ecosystems that require discipline, planning, and continuous care.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <Target className="text-accent mb-4" size={40} />
                <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To deliver legally compliant, professionally managed, and performance driven facility solutions that create safe, efficient, and well maintained environments for every client we serve.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <Eye className="text-accent mb-4" size={40} />
                <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To become a trusted leader in integrated facility management by setting benchmarks in compliance, workforce quality, service reliability, and ethical business practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Strength */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Leadership Strength</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              This organization is founded, managed, and operated by five dynamic women entrepreneurs who bring diverse expertise under one unified vision. This powerful combination ensures legal security, operational efficiency, and systematic execution across every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6">
                <Scale size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Two Legal Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced lawyers managing all statutory compliance, contracts, regulatory frameworks, and client legal safeguards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Two Administrative Experts</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialists in operational management, workforce supervision, deployment planning, and execution control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">One Manufacturing Operations Specialist</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert in process management, supply chain coordination, quality systems, and production discipline.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment</h2>
                <div className="space-y-6">
                  {[
                    "We commit to safety.",
                    "We commit to hygiene.",
                    "We commit to compliance.",
                    "We commit to reliability."
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <ShieldCheck className="text-accent" size={28} />
                      <span className="text-xl font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                  alt="Women Leadership Team" 
                  className="rounded-2xl opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
