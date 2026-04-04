import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Scale, Users, Settings, Briefcase } from 'lucide-react';

const WhyUs = () => {
  const differentiators = [
    {
      title: "Women Led Leadership with Legal Backbone",
      desc: "Founded, managed, and operated by five dynamic women entrepreneurs who bring diverse expertise under one unified vision.",
      icon: Users
    },
    {
      title: "Strong Compliance & Contract Transparency",
      desc: "We ensure all statutory compliance and maintain complete transparency in our contracts.",
      icon: Scale
    },
    {
      title: "Structured Administrative Control",
      desc: "Every service is executed with accountability, supervision, and rigorous quality control.",
      icon: Settings
    },
    {
      title: "Industrial Process Discipline",
      desc: "Our approach is structured and performance driven, bringing industrial-grade discipline to facility management.",
      icon: Briefcase
    },
    {
      title: "Trained & Verified Workforce",
      desc: "We deploy trained, verified, and disciplined personnel as per site requirements.",
      icon: ShieldCheck
    },
    {
      title: "End to End Facility Solutions Under One Roof",
      desc: "Complete facility and infrastructure solutions managed with integrity and delivered with precision.",
      icon: CheckCircle2
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What makes Solvesxx different from other facility management providers.
            </p>
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all overflow-hidden hover:text-white"
              >
                <div className="card-reveal-bg"></div>
                <div className="card-content">
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Your facility deserves management that is disciplined, ethical, and efficient.</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                We don't just provide services; we manage ecosystems. Our commitment to compliance and quality control ensures that your infrastructure is in safe hands.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm font-bold text-primary uppercase tracking-wider">Compliance</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm font-bold text-primary uppercase tracking-wider">Support</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                alt="Industrial Facility Management" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
