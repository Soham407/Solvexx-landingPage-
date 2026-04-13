import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, UserCog, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, USPs } from '../constants';
import { TEAM_MEMBERS, getInitials } from '../team';
import { useUiMotion } from '../hooks/useUiMotion';
import {
  CERTIFICATION,
  CIN_NUMBER,
  CONTACT_RESPONSE_COMMITMENT,
  GST_NUMBER,
  LEGAL_NAME,
  SITE_MISSION,
  SITE_TAGLINE,
} from '../site';

import HousekeepingImg from '../assets/ServiceImages/Housekeeping.png';
import PestControlImg from '../assets/ServiceImages/Pest Control.png';
import SecurityGuardImg from '../assets/ServiceImages/Security_Guard.jpg';
import ACMaintImg from '../assets/ServiceImages/AC Maint.jpg';

const Home = () => {
  const shouldReduceMotion = useUiMotion();
  const [selectedMember, setSelectedMember] = useState<(typeof TEAM_MEMBERS)[number] | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedMember) {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
      return;
    }

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMember(null);
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) {
          return;
        }

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedMember]);

  return (
    <>
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-full relative">
            <img 
              src={SecurityGuardImg}
              alt="Security team deployed at client site"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          </div>
          <div className="hidden lg:block w-1/2 h-full relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rotate-45">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-4">
                <div className="overflow-hidden bg-white p-2 shadow-2xl rounded-3xl">
                  <img src={HousekeepingImg} alt="Housekeeping support" className="w-full h-full object-cover object-top -rotate-45 scale-[1.4]" />
                </div>
                <div className="overflow-hidden bg-white p-2 shadow-2xl rounded-3xl">
                  <img src={SecurityGuardImg} alt="Security deployment" className="w-full h-full object-cover object-top -rotate-45 scale-[1.4]" />
                </div>
                <div className="overflow-hidden bg-white p-2 shadow-2xl rounded-3xl">
                  <img src={ACMaintImg} alt="AC service" className="w-full h-full object-cover object-top -rotate-45 scale-[1.4]" />
                </div>
                <div className="overflow-hidden bg-white p-2 shadow-2xl rounded-3xl">
                  <img src={PestControlImg} alt="Pest control services" className="w-full h-full object-cover -rotate-45 scale-[1.4]" />
                </div>
              </div>
            </div>
          </div>
          {/* Gradient overlay for navbar readability */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/90 to-transparent z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -50 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8 }}
            className="w-full lg:w-1/2 lg:pr-12 py-12"
          >
            <span className="text-accent tracking-widest uppercase text-sm mb-4 block">{LEGAL_NAME}</span>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 leading-tight">
              Complete Facility & <br />
              <span className="text-accent">Infrastructure Solutions</span>
            </h1>
            <p className="text-xl text-gray-100 mb-6 leading-relaxed border-l-4 border-accent pl-6">
              Managed with Integrity. <br />
              Delivered with Precision.
            </p>
            <p className="text-sm text-gray-300 mb-10 italic">
              {SITE_TAGLINE} <br />
              Security. Maintenance. Hygiene. Infrastructure.
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
                Request Site Assessment
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-300">{CONTACT_RESPONSE_COMMITMENT}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 text-center md:text-left">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-1">Certification</div>
            <div className="text-primary font-medium">{CERTIFICATION}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-1">GST</div>
            <div className="text-primary font-medium">{GST_NUMBER}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-1">CIN</div>
            <div className="text-primary font-medium">{CIN_NUMBER}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-1">Base</div>
            <div className="text-primary font-medium">Pune-Based Operations</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-1">Sectors</div>
            <div className="text-primary font-medium">IT, Corporate, Residential, Institutional, Manufacturing</div>
          </div>
        </div>
      </section>

      {/* USPs Strip */}
      <section className="bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">Why Solvesxx</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">{SITE_MISSION}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USPs.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
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
              We provide professionally managed facility services across security, hygiene, maintenance, pest management, plantation, and supply support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.28em] text-accent mb-4">Security | Maintenance | Hygiene | Infrastructure</p>
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">Extended Service Scope</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond core facility operations, Solvesxx also supports consumables, beverages, disposables, gifting, legal process support, and technology-led site requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'AI-enabled surveillance and door monitoring',
              'Deep cleaning and hygiene support',
              'Waste management support',
              'Cleaning chemicals and fragrances',
              'Premium hot beverages and natural-flavour cold beverages',
              'Eco-friendly paper cups and disposables',
              'Corporate gifting designed to reflect your brand',
              'Import, export, and supply coordination',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-primary shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                  <span className="leading-relaxed">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent tracking-widest uppercase text-sm mb-4 block">Meet The Team</span>
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">The Leadership Behind Solvesxx</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Five leaders with complementary strengths across strategy, execution, administration, and legal governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-5">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.button
                key={member.name}
                type="button"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMember(member)}
                className="group relative text-left bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                <div className="card-reveal-bg !clip-path-[circle(0%_at_50%_100%)] group-hover:!clip-path-[circle(160%_at_50%_100%)]"></div>
                <div className="card-content">
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`h-full w-full object-cover ${member.imagePosition} transition-transform duration-500 group-hover:scale-105`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary text-5xl font-display font-medium text-white">
                        {getInitials(member.name)}
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg text-primary mb-2 leading-snug transition-colors duration-500">{member.name}</h3>
                    <p className="text-sm text-gray-600 min-h-[3.75rem] leading-relaxed transition-colors duration-500">
                      {member.title}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-accent group-hover:text-white transition-colors duration-500">
                      View Bio <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
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
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
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

      {/* Delivery Readiness */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-4">What We Put In Place Before Deployment</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The site does not rely on generic promises. Every engagement starts with documented scope, supervision clarity, and operating discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Defined Scope & Reporting',
                text: 'Before mobilisation, the service scope, escalation points, reporting flow, and visit rhythm are aligned with the client team.',
                icon: FileText,
              },
              {
                title: 'Supervisor-Led Execution',
                text: 'Deployment is not left unmanaged. Site delivery is supported by supervision, review, and operating accountability.',
                icon: UserCog,
              },
              {
                title: 'Compliance-Aware Onboarding',
                text: 'Legal review, manpower fit, and working requirements are examined early so execution starts with fewer surprises.',
                icon: ShieldCheck,
              },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <item.icon className="text-accent mb-5" size={28} />
                <h3 className="text-xl font-medium text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to review your facility requirement properly?</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Let us work for you. Share your scope, operating location, and service need, and we will review the requirement and propose a practical next step.
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
    <AnimatePresence>
      {selectedMember ? (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/75 backdrop-blur-md px-4 py-6 md:py-8"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.96 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-modal-title"
            aria-describedby="team-member-modal-description"
            tabIndex={-1}
            ref={dialogRef}
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/40 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(0,51,102,0.08),_transparent_35%)]"></div>
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              ref={closeButtonRef}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/90 text-primary shadow-md transition-all hover:scale-105 hover:bg-accent hover:text-white"
              aria-label="Close team member bio"
            >
              <X size={20} />
            </button>

            <div className="relative grid grid-cols-1 lg:grid-cols-[360px_1fr]">
              <div className="relative overflow-hidden bg-primary px-6 py-8 sm:px-8 lg:min-h-[620px]">
                <div className="absolute inset-0 bg-pattern opacity-20"></div>
                <div className="absolute inset-x-8 top-8 h-px bg-white/20"></div>
                <div className="absolute inset-x-8 bottom-8 h-px bg-white/10"></div>

                <div className="relative z-10 flex h-full flex-col">
                  <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/80">
                    Solvesxx Leadership
                  </span>

                  <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 shadow-2xl">
                    <div className="aspect-[4/5] overflow-hidden bg-primary/80">
                      {selectedMember.image ? (
                        <img
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className={`h-full w-full object-cover ${selectedMember.imagePosition}`}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-primary text-7xl font-display font-medium text-white">
                          {getInitials(selectedMember.name)}
                        </div>
                      )}
                    </div>
                    <div className="border-t border-white/10 bg-white/10 px-6 py-5">
                      <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">Team Profile</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">
                        Strategic leadership across operations, governance, delivery, and growth.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-white/70">
                    <div className="h-px flex-1 bg-white/15"></div>
                    <span className="text-xs uppercase tracking-[0.28em]">Profile</span>
                    <div className="h-px flex-1 bg-white/15"></div>
                  </div>
                </div>
              </div>

              <div className="relative max-h-[85vh] overflow-y-auto px-6 py-8 sm:px-8 md:px-10 lg:px-12">
                <div className="relative z-10">
                  <span className="mb-4 inline-flex rounded-full bg-secondary px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
                    Leadership Profile
                  </span>
                  <h3 id="team-member-modal-title" className="max-w-2xl text-3xl md:text-4xl font-medium text-primary leading-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-600">
                    {selectedMember.title}
                  </p>

                  <div className="my-8 flex items-center gap-4">
                    <div className="h-1 w-16 bg-accent"></div>
                    <div className="h-px flex-1 bg-gray-200"></div>
                  </div>

                  <div className="rounded-[1.75rem] border border-gray-100 bg-white/90 p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,51,102,0.08)]">
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-primary/50">About</p>
                    <p
                      id="team-member-modal-description"
                      className="text-base sm:text-lg leading-8 text-gray-600 whitespace-pre-line"
                    >
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
    </>
  );
};

export default Home;
