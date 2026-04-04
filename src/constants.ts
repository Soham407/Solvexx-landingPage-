import { 
  Shield, 
  Users, 
  Wind, 
  Leaf, 
  Bug, 
  Printer, 
  CheckCircle2,
  Scale,
  Settings,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

import SecurityGuardImg from './assets/ServiceImages/Security_Guard.png';
import ACMaintImg from './assets/ServiceImages/AC Maint.png';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  items: string[];
  image: string;
  brochureNote?: string;
}

export const SERVICES: Service[] = [
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
    brochureNote: 'Each guard is professionally trained, uniformed, and supervised to maintain vigilance and safety standards.'
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
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800',
    brochureNote: 'Our teams maintain hygiene, discipline, and seamless daily operations across offices, residential complexes, institutions, and industrial premises.'
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
    brochureNote: 'Our technicians ensure energy efficiency, reduced downtime, and long equipment life.'
  },
  {
    id: 'landscaping',
    title: 'Plantation & Landscaping',
    shortDesc: 'Creating and maintaining healthy green spaces.',
    fullDesc: 'We design, maintain, and preserve landscapes that enhance the visual appeal and environmental health of your premises.',
    icon: Leaf,
    items: [
      'Lawn Mowing', 
      'Garden Maintenance', 
      'Chemical Spraying', 
      'Landscape Maintenance', 
      'Seasonal Plantation'
    ],
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800',
    brochureNote: 'We combine aesthetics with systematic plant care practices.'
  },
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
    image: 'https://images.unsplash.com/photo-1624927637280-f033784c1279?auto=format&fit=crop&q=80&w=800',
    brochureNote: 'Our treatments are result oriented and focused on long term prevention.'
  },
  {
    id: 'printing-supply',
    title: 'Printing, Advertising & Material Supply',
    shortDesc: 'Professional communication and essential supplies.',
    fullDesc: 'Reliable sourcing and timely supply of essential materials alongside professional printing and advertising services.',
    icon: Printer,
    items: [
      'Visitor Cards Printing', 
      'Staff ID Card Printing', 
      'Society Notice Printing', 
      'Meeting Minutes Printing',
      'Lift Poster Advertising',
      'Notice Board Advertising',
      'Entry Gate Banner Advertising',
      'Security Panel Materials', 
      'Door Controller Materials',
      'Hot & Cold Beverage Materials',
      'Eco Friendly Disposable Solutions',
      'Cleaning Essential Materials', 
      'Air Fresheners',
      'Insecticides & Rodenticides',
      'Anti Termite Chemicals',
      'Stationery Materials',
      'Corporate Gifting Materials'
    ],
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=800',
    brochureNote: 'We ensure clarity, visibility, and professional presentation. Quality assured materials. On time delivery.'
  }
];

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
