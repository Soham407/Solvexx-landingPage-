import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONES, WHATSAPP_NUMBER } from '../site';

const MobileContactBar = () => {
  const primaryPhone = CONTACT_PHONE || CONTACT_PHONES[0];
  const whatsappNumber = (WHATSAPP_NUMBER || primaryPhone || '').replace(/\D/g, '');

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/10 bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 px-3 py-3">
        <a
          href={primaryPhone ? `tel:${primaryPhone}` : undefined}
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-secondary px-3 py-3 text-sm font-medium text-primary"
        >
          <Phone size={16} />
          Call
        </a>
        <a
          href={whatsappNumber ? `https://wa.me/${whatsappNumber}` : undefined}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-secondary px-3 py-3 text-sm font-medium text-primary"
        >
          <MessageSquare size={16} />
          WhatsApp
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-3 py-3 text-sm font-medium text-white"
        >
          <Mail size={16} />
          Enquiry
        </Link>
      </div>
    </div>
  );
};

export default MobileContactBar;
