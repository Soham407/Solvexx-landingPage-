import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ClipboardCheck, FileText, ShieldCheck, Scale, Users, Settings, Briefcase } from 'lucide-react';
import SecurityGuardImg from '../assets/ServiceImages/Security_Guard.jpg';
import { CERTIFICATION } from '../site';
import { useUiMotion } from '../hooks/useUiMotion';

const WhyUs = () => {
  const shouldReduceMotion = useUiMotion();
  const differentiators = [
    {
      title: "Five-Director Leadership with Legal Backbone",
      desc: "The company is directed by five leaders whose combined strengths across legal, administration, execution, and operations drive disciplined delivery.",
      icon: Users
    },
    {
      title: "Strong Compliance & Contract Transparency",
      desc: "We ensure statutory compliance, document clarity, and transparent commercial understanding across engagements.",
      icon: Scale
    },
    {
      title: "Structured Administrative Control",
      desc: "Every service is executed with accountability, supervision, rigorous quality control, and action-oriented operating follow-through.",
      icon: Settings
    },
    {
      title: "Industrial Process Discipline",
      desc: "Our approach is structured and performance driven, bringing industrial-grade process management and production discipline to facility management.",
      icon: Briefcase
    },
    {
      title: "Trained & Verified Workforce",
      desc: "We deploy trained, verified, and disciplined personnel as per site requirements.",
      icon: ShieldCheck
    },
    {
      title: "End to End Facility Solutions Under One Roof",
      desc: "Complete facility, hygiene, maintenance, supply, and support solutions managed under one operating umbrella.",
      icon: CheckCircle2
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Why Choose Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What makes Solvesxx different from other facility management providers.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-accent">{CERTIFICATION}</p>
          </motion.div>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all overflow-hidden hover:text-white"
              >
                <div className="card-reveal-bg"></div>
                <div className="card-content">
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-primary mb-4 group-hover:text-white transition-colors duration-500">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-medium text-primary mb-8">Your facility deserves documented control, not vague promises.</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Solvesxx is positioned around operating discipline. We review requirement clarity, deployment fit, reporting flow, and commercial transparency before execution starts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Requirement Review',
                    desc: 'Scope, headcount, site type, and frequency are aligned before quoting.',
                    icon: ClipboardCheck,
                  },
                  {
                    title: 'Reporting Clarity',
                    desc: 'Escalation routes and operating contacts are defined before deployment.',
                    icon: FileText,
                  },
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-white rounded-2xl shadow-sm">
                    <item.icon className="text-accent mb-4" size={24} />
                    <div className="text-lg font-medium text-primary mb-2">{item.title}</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={SecurityGuardImg}
                alt="Managed security deployment" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
