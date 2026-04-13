import type { Service } from './constants';
import {
  CERTIFICATION,
  CIN_NUMBER,
  CONTACT_ADDRESSES,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  GST_NUMBER,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from './site';

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
}

export const DEFAULT_SOCIAL_DESCRIPTION =
  'Integrated facility management, hygiene, pest management, maintenance, security, and material support in Pune.';

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: `${SITE_NAME} | Facility & Infrastructure Solutions in Pune`,
    description: SITE_DESCRIPTION,
    path: '/',
  },
  '/about': {
    title: `About ${SITE_NAME} | Leadership, Governance & Operations`,
    description:
      'Meet the leadership team behind Solvesxx and learn how legal, operational, and administrative discipline shape delivery.',
    path: '/about',
  },
  '/services': {
    title: `${SITE_NAME} Services | Security, Housekeeping, AC, Pest Control & Supply`,
    description:
      'Explore Solvesxx services across security, housekeeping, AC maintenance, pest control, plantation, supply, beverages, gifting, and support services.',
    path: '/services',
  },
  '/why-us': {
    title: `Why Choose ${SITE_NAME} | Compliance, Deployment & Site Control`,
    description:
      'See how Solvesxx approaches compliance, workforce deployment, supervision, and site-level accountability for managed facilities.',
    path: '/why-us',
  },
  '/contact': {
    title: `Contact ${SITE_NAME} | Request a Site Assessment`,
    description:
      'Submit your facility requirement to Solvesxx for a site review, deployment discussion, or service quotation in Pune.',
    path: '/contact',
  },
};

export const getServiceMeta = (service: Service): RouteMeta => ({
  title: `${service.title} in Pune | ${SITE_NAME}`,
  description: service.fullDesc,
  path: `/services/${service.id}`,
});

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_DISPLAY,
  description: SITE_DESCRIPTION,
  award: CERTIFICATION,
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_ADDRESSES.corporate,
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_ADDRESSES.registered,
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Pune',
  },
  identifier: [
    {
      '@type': 'PropertyValue',
      name: 'GST',
      value: GST_NUMBER,
    },
    {
      '@type': 'PropertyValue',
      name: 'CIN',
      value: CIN_NUMBER,
    },
  ],
  sameAs: [SITE_URL],
});
