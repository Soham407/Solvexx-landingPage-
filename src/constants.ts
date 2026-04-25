import { 
  Shield, 
  Users, 
  Wind, 
  Leaf, 
  Bug, 
  CheckCircle2,
  Scale,
  Settings,
  ShieldCheck,
  Briefcase,
  Camera,
  SprayCan,
  Trash2,
  Coffee,
  Package,
  Gift,
  ShipWheel,
  FileText
} from 'lucide-react';

import SecurityGuardImg from './assets/ServiceImages/Security_Guard.jpg';
import ACMaintImg from './assets/ServiceImages/AC Maint.jpg';
import HousekeepingImg from './assets/ServiceImages/Housekeeping.png';
import LandscapingImg from './assets/ServiceImages/Pest Control Materials.png';
import PestControlImg from './assets/ServiceImages/Pest Control.png';
import CleaningEssentialsImg from './assets/ServiceImages/Cleaning Essientials.png';
import CorporateGiftingImg from './assets/ServiceImages/Corporate Gifting.png';
import EcoFriendlyDisposablesImg from './assets/ServiceImages/EcoFriendly disposables.png';
import PantryBeveragesImg from './assets/ServiceImages/Pantry_&_Beverages.png';
import StationaryImg from './assets/ServiceImages/Stationary.png';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  items: string[];
  image: string;
  brochureNote?: string;
  category: 'core' | 'support';
  ctaLabel: string;
}

export const CORE_SERVICES: Service[] = [
  {
    id: 'security',
    title: 'Security Services',
    shortDesc: 'Trained, verified, and disciplined security personnel.',
    fullDesc: 'We deploy professionally trained and supervised security personnel to maintain vigilance and safety standards across your premises.',
    icon: Shield,
    items: [
      'Grade A Security Guard', 
      'Grade B Security Guard', 
      'Grade C Security Guard', 
      'Grade D Security Guard', 
      'Gunman', 
      'Door Keeper'
    ],
    image: SecurityGuardImg,
    brochureNote: 'Each guard is professionally trained, uniformed, and supervised to maintain vigilance and safety standards.',
    category: 'core',
    ctaLabel: 'Request Security Assessment',
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping & Support',
    shortDesc: 'Seamless daily operations and hygiene maintenance.',
    fullDesc: 'Our teams maintain hygiene, discipline, and seamless daily operations across offices, residential complexes, institutions, and industrial premises.',
    icon: Users,
    items: [
      'Housekeeping Staff', 
      'Pantry Staff', 
      'Office Boy', 
      'Office Girl'
    ],
    image: HousekeepingImg,
    brochureNote: 'Our teams maintain hygiene, discipline, and seamless daily operations across offices, residential complexes, institutions, and industrial premises.',
    category: 'core',
    ctaLabel: 'Request Housekeeping Assessment',
  },
  {
    id: 'ac-services',
    title: 'Air Conditioner Services',
    shortDesc: 'Complete AC maintenance and repair solutions.',
    fullDesc: 'Professional installation, servicing, and repair for all major AC systems to ensure energy efficiency and long equipment life.',
    icon: Wind,
    items: [
      'Split AC Service', 
      'Window AC Service', 
      'Centralized AC Plant Service', 
      'Gas Charging', 
      'AC Repair', 
      'Filter Cleaning',
      'Capacitor Replacement',
      'General AC Maintenance'
    ],
    image: ACMaintImg,
    brochureNote: 'Our technicians ensure energy efficiency, reduced downtime, and long equipment life.',
    category: 'core',
    ctaLabel: 'Request AC Service Review',
  },
  {
    id: 'landscaping',
    title: 'Plantation Service',
    shortDesc: 'Complete plantation and landscape maintenance.',
    fullDesc: 'We provide professional plantation services and maintain landscapes to enhance the visual appeal and environmental health of your premises.',
    icon: Leaf,
    items: [
      'Lawn Mowing',
      'Garden Maintenance',
      'Chemical Spraying',
      'Landscape Maintenance',
      'Seasonal Plantation'
    ],
    image: LandscapingImg,
    brochureNote: 'We combine aesthetics with systematic plant care practices.',
    category: 'core',
    ctaLabel: 'Request Plantation Assessment',  },
  {
    id: 'pest-control',
    title: 'Pest Control Services',
    shortDesc: 'Complete pest protection for all spaces.',
    fullDesc: 'Safe, approved, and effective pest management services focused on long-term prevention and result-oriented treatments.',
    icon: Bug,
    items: [
      'General Pest Control (GPC)', 
      'Bed Bug Treatment', 
      'Cockroach Treatment', 
      'Rodent Control', 
      'Anti-Termite Treatment', 
      'Fogging',
      'Spraying',
      'Gel Application'
    ],
    image: PestControlImg,
    brochureNote: 'Our treatments are result oriented and focused on long term prevention.',
    category: 'core',
    ctaLabel: 'Request Pest Control Assessment',
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning Services',
    shortDesc: 'Structured deep-cleaning support for hygiene-sensitive environments.',
    fullDesc: 'We provide deep-cleaning support for offices, institutions, residential sites, and commercial facilities where hygiene reset, sanitation discipline, and detailed cleaning matter.',
    icon: SprayCan,
    items: [
      'Floor Deep Cleaning',
      'Washroom Hygiene Reset',
      'Common Area Cleaning',
      'Surface Sanitization',
      'Post-Occupancy Cleanup',
    ],
    image: HousekeepingImg,
    brochureNote: 'The brochure positions deep cleaning as part of Solvesxx’s hygiene-first operating capability.',
    category: 'core',
    ctaLabel: 'Request Deep Cleaning Assessment',
  }
];

export const SUPPORT_SERVICES: Service[] = [
  {
    id: 'ai-surveillance',
    title: 'Door Security Camera',
    shortDesc: 'Enhanced site monitoring and entrance security solutions.',
    fullDesc: 'We provide door security camera installations and monitoring services to ensure unauthorized entry visibility and enhanced safety for your premises.',
    icon: Camera,
    items: [
      'Door Security Cameras',
      'Entry Monitoring',
      'Unauthorized Access Alerts',
      'After-Hours Security Support',
    ],
    image: SecurityGuardImg,
    brochureNote: 'The security setup is positioned as more than passive recording. It supports action-oriented monitoring and instant alert logic.',
    category: 'support',
    ctaLabel: 'Request Security Review',
  },
  {
    id: 'waste-management',
    title: 'Waste Management',
    shortDesc: 'Cleaner site operations through disciplined waste-handling support.',
    fullDesc: 'Solvesxx supports cleaner and safer environments through waste-management-oriented operational assistance aligned with hygiene and site discipline.',
    icon: Trash2,
    items: [
      'Collection Coordination',
      'Segregation Support',
      'Site Cleanliness Planning',
      'Disposal Workflow Support',
    ],
    image: HousekeepingImg,
    brochureNote: 'Waste management is positioned as part of the company’s broader clean and healthy environment approach.',
    category: 'support',
    ctaLabel: 'Request Waste Management Review',
  },
  {
    id: 'cleaning-chemicals',
    title: 'Commercial Cleaning Chemicals',
    shortDesc: 'Cleaning chemicals and hygiene consumables for daily operations.',
    fullDesc: 'We support facilities with high-quality commercial cleaning chemicals, hygiene consumables, and related materials aligned with maintenance and sanitation needs.',
    icon: Package,
    items: [
      'Commercial Cleaning Chemicals',
      'Hygiene Consumables',
      'Surface Disinfectants',
      'Routine Cleaning Supplies',
    ],
    image: CleaningEssentialsImg,
    brochureNote: 'The brochure highlights eco-conscious cleaning support and consumable supply as part of day-to-day facility readiness.',
    category: 'support',
    ctaLabel: 'Request Chemical Supply Review',
  },
  {
    id: 'beverage-services',
    title: 'Beverage Services',
    shortDesc: 'Hot and cold beverage material support for offices and managed sites.',
    fullDesc: 'Solvesxx supports office and facility beverage needs with premium hot beverage materials, cold beverage options, and related pantry consumables.',
    icon: Coffee,
    items: [
      'Premium Coffee Blends',
      'Tea Materials',
      'Cold Beverage Inputs',
      'Natural-Flavor Drink Support',
      'Pantry Consumables',
    ],
    image: PantryBeveragesImg,
    brochureNote: 'The brochure notes premium ingredients for hot beverages and natural flavors for cold beverages.',
    category: 'support',
    ctaLabel: 'Request Beverage Service Review',
  },
  {
    id: 'eco-disposables',
    title: 'Eco-Friendly Disposables',
    shortDesc: 'Paper cups and disposable supply support for day-to-day facility use.',
    fullDesc: 'We provide eco-friendly disposable material support including paper cups and related consumables for offices, cafes, and managed events.',
    icon: Package,
    items: [
      'Paper Cups',
      'Office Pantry Disposables',
      'Event Consumption Materials',
      'Eco-Friendly Supply Options',
    ],
    image: EcoFriendlyDisposablesImg,
    brochureNote: 'Eco-friendly supply support is presented as a practical extension of Solvesxx’s facility consumable capability.',
    category: 'support',
    ctaLabel: 'Request Disposable Supply Review',
  },
  {
    id: 'corporate-gifting',
    title: 'Corporate Gifting',
    shortDesc: 'Customized gifting support designed to reflect your brand.',
    fullDesc: 'Solvesxx supports customized corporate gifting requirements for clients, partners, and employees with an emphasis on brand-reflective presentation.',
    icon: Gift,
    items: [
      'Customized Gift Planning',
      'Brand-Reflective Gifting',
      'Employee Gifting Support',
      'Client Engagement Materials',
    ],
    image: CorporateGiftingImg,
    brochureNote: 'The brochure explicitly positions these gifting services as designed to reflect the client’s brand.',
    category: 'support',
    ctaLabel: 'Request Corporate Gifting Review',
  },
  {
    id: 'import-export',
    title: 'Import & Export Coordination',
    shortDesc: 'Logistics and supply chain support for sourcing and movement.',
    fullDesc: 'The business also supports import and export coordination through logistics, material movement planning, and supply chain alignment.',
    icon: ShipWheel,
    items: [
      'Logistics Coordination',
      'Supply Chain Support',
      'Material Movement Planning',
      'Operational Sourcing Assistance',
    ],
    image: StationaryImg,
    brochureNote: 'This capability is aligned with the leadership team’s operational and supply-chain-oriented experience.',
    category: 'support',
    ctaLabel: 'Request Supply Chain Review',
  },
  {
    id: 'contract-management',
    title: 'Contract Management Support',
    shortDesc: 'Cloud-based contract management with deadline and renewal visibility.',
    fullDesc: 'Solvesxx positions legal service support around a cloud-based contract management system with automated deadline alerts and renewal tracking.',
    icon: FileText,
    items: [
      'Cloud-Based Contract Management',
      'Renewal Deadline Alerts',
      'Contract Visibility Support',
      'Documentation Tracking',
    ],
    image: StationaryImg,
    brochureNote: 'The brochure specifically mentions cloud-based contract management with automated deadline alerts for renewals.',
    category: 'support',
    ctaLabel: 'Request Contract Management Review',
  }
];

export const SERVICES = [...CORE_SERVICES, ...SUPPORT_SERVICES];

export const USPs = [
  {
    title: 'Women Led Leadership',
    desc: 'Founded, managed, and operated by five dynamic women entrepreneurs with diverse expertise.',
    icon: Users
  },
  {
    title: 'Legal Backbone',
    desc: 'Managed by legal professionals ensuring statutory compliance, contracts, and client legal safeguards.',
    icon: Scale
  },
  {
    title: 'Industrial Discipline',
    desc: 'Structured administrative control and industrial process discipline across every project.',
    icon: Settings
  },
  {
    title: 'Verified Workforce',
    desc: 'Trained, verified, and disciplined workforce for total facility excellence.',
    icon: CheckCircle2
  },
  {
    title: 'Strong Compliance',
    desc: 'Strong compliance and contract transparency to build long-term trust.',
    icon: ShieldCheck
  },
  {
    title: 'End-to-End Solutions',
    desc: 'Integrated facility management solutions under one roof.',
    icon: Briefcase
  }
];
