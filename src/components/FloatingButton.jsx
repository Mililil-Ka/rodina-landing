import { Phone } from 'lucide-react';
import { siteData } from '../data/content';

const FloatingButton = () => {
  return (
    <a 
      href={siteData.phoneLink}
      className="fixed bottom-6 right-6 md:hidden bg-brand text-white p-4 rounded-full shadow-2xl shadow-brand/40 z-50 animate-bounce"
      aria-label="Позвонить"
    >
      <Phone size={28} />
    </a>
  );
};

export default FloatingButton;