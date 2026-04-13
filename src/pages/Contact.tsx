import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { CORE_SERVICES, SERVICES, SUPPORT_SERVICES } from '../constants';
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
  SITE_NAME,
  WEBSITE_HOST,
  WHATSAPP_NUMBER,
} from '../site';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

const DEFAULT_SERVICE = SERVICES[0]?.title ?? 'Security Services';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: DEFAULT_SERVICE,
    location: '',
    message: '',
    website: '',
  });
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [deliveryConfigured, setDeliveryConfigured] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/contact-status')
      .then((response) => response.json())
      .then((result: { configured?: boolean }) => {
        if (!cancelled) {
          setDeliveryConfigured(Boolean(result.configured));
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDeliveryConfigured(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState.website.trim()) {
      setSubmissionState('success');
      setFeedbackMessage('Thanks. Your request has been received.');
      return;
    }

    setSubmissionState('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          phone: formState.phone.trim(),
          company: formState.company.trim(),
          service: formState.service,
          location: formState.location.trim(),
          message: formState.message.trim(),
          source: 'website-contact-form',
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your request right now.');
      }

      setSubmissionState('success');
      setFeedbackMessage(result.message || 'Your enquiry has been submitted.');
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: DEFAULT_SERVICE,
        location: '',
        message: '',
        website: '',
      });
    } catch (error) {
      setSubmissionState('error');
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : 'We could not submit your request right now. Please email us directly.',
      );
    }
  };

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(
        `Hello ${SITE_NAME}, I would like to discuss a facility service requirement.`,
      )}`
    : '';

  return (
    <div>
      <section className="bg-primary pt-32 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Share your requirement and our team will review the scope, operating context, and service fit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1.5fr] gap-10">
            <div className="space-y-8">
              <div className="rounded-3xl bg-primary text-white p-8 shadow-xl">
                <h2 className="text-3xl font-medium mb-4">Talk to the team</h2>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Use the enquiry form for quotations, site assessment requests, or deployment discussions.
                </p>
                <p className="text-sm uppercase tracking-[0.24em] text-accent mb-2">Response standard</p>
                <p className="text-lg text-white">{CONTACT_RESPONSE_COMMITMENT}</p>
                {deliveryConfigured === false ? (
                  <p className="mt-6 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-gray-100">
                    Form delivery is not fully configured in production yet. Set `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL` to enable direct submission handling.
                  </p>
                ) : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-2xl border border-gray-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <Mail className="text-accent mb-4" size={24} />
                  <h3 className="text-lg font-medium text-primary mb-2">Email</h3>
                  <p className="text-gray-600 text-sm break-all">{CONTACT_EMAIL}</p>
                </a>

                {CONTACT_PHONE ? (
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="rounded-2xl border border-gray-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Phone className="text-accent mb-4" size={24} />
                    <h3 className="text-lg font-medium text-primary mb-2">Call</h3>
                    <p className="text-gray-600 text-sm">{CONTACT_PHONE_DISPLAY}</p>
                  </a>
                ) : (
                  <div className="rounded-2xl border border-gray-200 p-6">
                    <Phone className="text-accent mb-4" size={24} />
                    <h3 className="text-lg font-medium text-primary mb-2">Phone</h3>
                    <div className="space-y-2 text-gray-600 text-sm">
                      {CONTACT_PHONES.map((phone) => (
                        <a key={phone} href={`tel:${phone}`} className="block hover:text-accent transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {WHATSAPP_NUMBER ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-gray-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MessageSquare className="text-accent mb-4" size={24} />
                    <h3 className="text-lg font-medium text-primary mb-2">WhatsApp</h3>
                    <p className="text-gray-600 text-sm">Start a direct conversation with the operations team.</p>
                  </a>
                ) : null}

                <a
                  href={`https://${WEBSITE_HOST}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-gray-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <Globe className="text-accent mb-4" size={24} />
                  <h3 className="text-lg font-medium text-primary mb-2">Website</h3>
                  <p className="text-gray-600 text-sm">{WEBSITE_HOST}</p>
                </a>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent mb-2">Certification</p>
                    <p className="text-sm text-primary font-medium">{CERTIFICATION}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent mb-2">GST</p>
                    <p className="text-sm text-primary font-medium">{GST_NUMBER}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent mb-2">CIN</p>
                    <p className="text-sm text-primary font-medium">{CIN_NUMBER}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-accent shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary mb-1">Corporate Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{CONTACT_ADDRESSES.corporate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary mb-1">Registered Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{CONTACT_ADDRESSES.registered}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <Send className="text-accent" />
                <h2 className="text-2xl font-medium text-primary">Submit a Service Enquiry</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="website"
                  value={formState.website}
                  onChange={(event) => setFormState({ ...formState, website: event.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submissionState === 'success' ? (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                    {feedbackMessage}
                  </div>
                ) : null}

                {submissionState === 'error' ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
                    {feedbackMessage}
                  </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm text-primary uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Enter your full name"
                      value={formState.name}
                      onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm text-primary uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Enter your email address"
                      value={formState.email}
                      onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm text-primary uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onChange={(event) => setFormState({ ...formState, phone: event.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="text-sm text-primary uppercase tracking-wider">
                      Company / Society
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Enter company or property name"
                      value={formState.company}
                      onChange={(event) => setFormState({ ...formState, company: event.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="text-sm text-primary uppercase tracking-wider">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white"
                      value={formState.service}
                      onChange={(event) => setFormState({ ...formState, service: event.target.value })}
                    >
                      <optgroup label="Core Services">
                        {CORE_SERVICES.map((service) => (
                          <option key={service.id}>{service.title}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Business Support Services">
                        {SUPPORT_SERVICES.map((service) => (
                          <option key={service.id}>{service.title}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-location" className="text-sm text-primary uppercase tracking-wider">
                      Site Location
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Area / city of the facility"
                      value={formState.location}
                      onChange={(event) => setFormState({ ...formState, location: event.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm text-primary uppercase tracking-wider">
                    Requirement Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Describe the facility type, manpower requirement, service frequency, and preferred start timeline."
                    value={formState.message}
                    onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submissionState === 'submitting'}
                  className="w-full bg-primary text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all gold-gradient disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submissionState === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <iframe
          title="Solvesxx location in Pune"
          src="https://www.google.com/maps?q=Vadgaon%20Bk.%20Pune&z=13&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
