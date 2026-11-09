import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { siteData } from '../data/content';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    // Общий контейнер для всей шапки
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center relative z-50">
        
        {/* Логотип (всегда сверху) */}
        <div className="flex items-center z-50">
          <img src={logo} alt="ООО Родина" className="h-14 md:h-16 w-auto object-contain" />
        </div>

        {/* Меню для ПК */}
        <nav className="hidden md:flex gap-8 text-dark font-medium">
          <a href="#services" className="hover:text-brand transition-colors">Услуги</a>
          <a href="#crane" className="hover:text-brand transition-colors">Кран-манипулятор</a>
          <a href="#about" className="hover:text-brand transition-colors">О компании</a>
          <a href="#contacts" className="hover:text-brand transition-colors">Контакты</a>
        </nav>

        {/* Кнопка звонка для ПК */}
        <a href={siteData.phoneLink} className="hidden md:flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors shadow-lg shadow-brand/30">
          <Phone size={18} />
          <span>{siteData.phone}</span>
        </a>

        {/* Кнопка бургер-меню/крестик для мобильных */}
        <button 
          className="md:hidden z-50 p-2 text-dark hover:text-brand transition-colors"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {/* Оно перекрывает весь экран, но находится ПОД верхней панелью с логотипом и крестиком */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 text-xl font-medium text-dark mb-10">
          <a href="#services" onClick={toggleMenu} className="border-b border-slate-100 pb-4">Услуги</a>
          <a href="#crane" onClick={toggleMenu} className="border-b border-slate-100 pb-4">Кран-манипулятор</a>
          <a href="#about" onClick={toggleMenu} className="border-b border-slate-100 pb-4">О компании</a>
          <a href="#contacts" onClick={toggleMenu} className="border-b border-slate-100 pb-4">Контакты</a>
        </nav>
        
        {/* Кнопка звонка внизу меню */}
        <a 
          href={siteData.phoneLink} 
          className="flex items-center justify-center gap-2 bg-brand text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-brand/30 mt-auto mb-10"
        >
          <Phone size={20} />
          Позвонить нам
        </a>
      </div>
    </header>
  );
};

export default Header;