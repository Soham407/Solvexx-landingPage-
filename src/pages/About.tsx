import React from 'react';
import { motion } from 'motion/react';
import { Scale, Users, Settings, ShieldCheck, Target, Eye } from 'lucide-react';
import { CERTIFICATION, SITE_MISSION, SITE_TAGLINE } from '../site';
import { TEAM_MEMBERS, getInitials } from '../team';
import { useUiMotion } from '../hooks/useUiMotion';

const About = () => {
  const shouldReduceMotion = useUiMotion();

  return (
    <div>
      {/* Header */}
      <section className="bg-primary bg-pattern pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-6">About Solvesxx</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A professionally managed facility services company built on trust, integrity, precision, and structured delivery.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-accent">{CERTIFICATION}</p>
          </motion.div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-medium text-primary mb-6">About The Company</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Solvesxx is a professionally managed facility services company delivering integrated solutions across security, maintenance, hygiene, pest management, and infrastructure support. We view facilities as ecosystems that require discipline, planning, and continuous care.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our operating model is structured, compliant, and performance-driven. Every service is executed with accountability, supervision, quality control, and tailored planning based on client requirements.
              </p>
              <div className="bg-secondary p-8 rounded-xl border-l-4 border-accent mb-8">
                <p className="text-primary font-medium text-xl mb-2">
                  "{SITE_TAGLINE}"
                </p>
                <p className="italic text-primary">
                  {SITE_MISSION}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-colors duration-500 hover:text-white">
                <div className="card-reveal-bg"></div>
                <div className="card-content">
                  <Target className="text-accent mb-4 group-hover:text-accent transition-colors duration-500" size={40} />
                  <h3 className="text-xl font-medium text-primary mb-3 group-hover:text-white transition-colors duration-500">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    To deliver legally compliant, professionally managed, and performance driven facility solutions that create safe, efficient, and well maintained environments for every client we serve.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-colors duration-500 hover:text-white">
                <div className="card-reveal-bg"></div>
                <div className="card-content">
                  <Eye className="text-accent mb-4 group-hover:text-accent transition-colors duration-500" size={40} />
                  <h3 className="text-xl font-medium text-primary mb-3 group-hover:text-white transition-colors duration-500">Our Vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    To become a trusted leader in integrated facility management by setting benchmarks in compliance, hygiene, workforce quality, service reliability, and ethical business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Strength */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">Our Leadership Strength</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              This organization is founded, managed, and operated by five dynamic women entrepreneurs who bring diverse expertise under one unified vision. This powerful combination ensures legal security, operational efficiency, and systematic execution across every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden hover:text-white"
            >
              <div className="card-reveal-bg"></div>
              <div className="card-content">
                <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <Scale size={32} />
                </div>
                <h3 className="text-xl font-medium text-primary mb-4 group-hover:text-white transition-colors duration-500">Two Legal Professionals</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  Experienced lawyers managing all statutory compliance, contracts, regulatory frameworks, and client legal safeguards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden hover:text-white"
            >
              <div className="card-reveal-bg"></div>
              <div className="card-content">
                <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-medium text-primary mb-4 group-hover:text-white transition-colors duration-500">Two Administrative Experts</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  Specialists in operational management, workforce supervision, deployment planning, and execution control.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden hover:text-white"
            >
              <div className="card-reveal-bg"></div>
              <div className="card-content">
                <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <Settings size={32} />
                </div>
                <h3 className="text-xl font-medium text-primary mb-4 group-hover:text-white transition-colors duration-500">One Manufacturing Operations Specialist</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  Expert in process management, supply chain coordination, quality systems, production discipline, and operational flow.
                </p>
              </div>
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
                <h2 className="text-3xl md:text-4xl font-medium mb-8">Our Commitment</h2>
                <div className="space-y-6">
                  {[
                    "We commit to safety.",
                    "We commit to hygiene.",
                    "We commit to compliance.",
                    "We commit to reliability.",
                    "We commit to healthier, cleaner environments.",
                    "Let's create a healthier space together."
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
                  src="/services/housekeeping.svg"
                  alt="Operational support planning" 
                  className="rounded-2xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent tracking-widest uppercase text-sm mb-4 block">Leadership Team</span>
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">Meet The Five Directors</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The company is directed by five leaders whose combined strengths across legal, administration, execution, governance, and strategic alliances shape how Solvesxx operates.
            </p>
          </div>

          <div className="space-y-16">
            {TEAM_MEMBERS.map((member, index) => {
              const isReversed = index % 2 === 1;

              return (
                <motion.section
                  key={member.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.06 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-[2rem] border border-gray-100 bg-white p-6 md:p-8 shadow-sm"
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="relative overflow-hidden rounded-[1.75rem] bg-primary">
                      <div className="absolute inset-0 bg-pattern opacity-20"></div>
                      <div className="aspect-[4/5] relative z-10 overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className={`h-full w-full object-cover ${member.imagePosition}`}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-primary text-8xl font-display font-medium text-white">
                            {getInitials(member.name)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
                      Director Profile
                    </span>
                    <h3 className="mt-5 text-3xl md:text-4xl font-medium text-primary leading-tight">
                      {member.name}
                    </h3>
                    <p className="mt-4 text-lg text-accent leading-relaxed">
                      {member.title}
                    </p>
                    <div className="my-6 h-px w-full bg-gray-200"></div>
                    <p className="text-gray-600 text-lg leading-8">
                      {member.bio}
                    </p>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
