export const SITE_NAME = 'Solvesxx';
export const LEGAL_NAME = 'Powerfull Solutions Pvt. Ltd.';
export const SITE_URL = 'https://www.solvesxx.com';
export const SITE_DESCRIPTION =
  'Solvesxx delivers integrated facility, hygiene, pest management, maintenance, security, and material support services in Pune for corporate, residential, institutional, and industrial sites.';
export const SITE_TAGLINE = 'One Trusted Partner For Total Facility Excellence.';
export const SITE_MISSION =
  'Protecting your world, one space at a time through expert pest control, hygiene, and facility management solutions.';
export const CONTACT_EMAIL = 'admin@solvesxx.com';
export const WEBSITE_HOST = 'www.solvesxx.com';
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE?.trim() || '';
export const CONTACT_PHONE_DISPLAY = '9766669024, 9766669025';
export const CONTACT_PHONES = ['9766669024', '9766669025'] as const;
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || '';
export const CONTACT_RESPONSE_COMMITMENT = 'We respond to qualified enquiries within one business day.';
export const CERTIFICATION = 'ISO 9001:2015 Certified Company';
export const GST_NUMBER = '27ABSCS5790H1ZJ';
export const CIN_NUMBER = 'U81100PN2026PTC251309';
export const CONTACT_ADDRESSES = {
  corporate: 'Omkar Nandan Society, A2, 303, Near Navale Bridge, Vadgaon Bk., Pune - 410041.',
  registered: 'Flat no. 2, Praneel Apartment, S.No. 899, Limaye Road, Deccan Gymkhana, Pune - 411004.',
} as const;

export const LICENSES = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System Certified',
    logo: 'https://www.nicepng.com/ourpic/u2e6e6o0t4q8u2o0_iso-certified-company-logo-iso-logo-9001-2015/l.png'
  },
  {
    name: 'GST Registration',
    description: 'Goods & Services Tax Registered',
    logo: 'https://indiadesignsystem.bombaydc.com/api/v1/design/Goods-and-Service-Tax-Network/bg-transparent'
  },
  {
    name: 'EPFO',
    description: 'Employees Provident Fund Organization',
    logo: 'https://indiadesignsystem.bombaydc.com/api/v1/design/EPFO/bg-transparent'
  },
  {
    name: 'ESIC',
    description: 'Employees State Insurance Corporation',
    logo: 'https://indiadesignsystem.bombaydc.com/api/v1/design/ESIC/bg-transparent'
  },
  {
    name: 'Ministry of Labour',
    description: 'Government of India Compliant',
    logo: 'https://www.epfindia.gov.in/global/images/EPFO_Logo.png'
  },
  {
    name: 'Statutory Compliant',
    description: 'All Legal Requirements Met',
    logo: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/svgs/solid/certificate.svg'
  }
] as const;
