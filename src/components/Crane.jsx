import { useState } from 'react';
import { CheckCircle2, ShieldAlert, Settings, X, Maximize2 } from 'lucide-react';
import { siteData } from '../data/content';
import craneImg from '../assets/crane.jpg';

const Crane = () => {
  const { crane } = siteData;
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия окна

  return (
    <section id="crane" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            {crane.title}
          </h2>
          <p className="text-lg text-brand font-medium">
            {crane.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Левая часть - Фото */}
          <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img 
              src={craneImg} 
              alt="Кран-манипулятор Kanglim" 
              className="rounded-2xl shadow-xl w-full object-cover h-[300px] md:h-[400px] transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 bg-white/90 backdrop-blur-sm px-2 rounded-full shadow-lg flex items-center gap-2 z-10 pointer-events-none">
            <Maximize2 className="text-brand" size={16} />
            <span className="text-sm font-semibold text-dark whitespace-nowrap">Характеристики</span>
            </div>
            
            {/* Оверлей при наведении */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col items-center justify-center">
              <Maximize2 className="text-white mb-2" size={32} />
              <span className="text-white font-medium">Нажмите, чтобы открыть</span>
            </div>
          </div>

          {/* Правая часть - Описание и возможности */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Что мы делаем с помощью техники?
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {crane.description}
            </p>

            <ul className="space-y-4">
              {crane.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-light p-1 rounded-full">
                    <CheckCircle2 className="text-brand" size={20} />
                  </div>
                  <span className="text-dark font-medium text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-4">
              <ShieldAlert className="text-brand flex-shrink-0 mt-1" size={24} />
              <p className="text-sm text-slate-600">
                <strong className="text-dark block mb-1">Работаем в любую погоду!</strong>
                Техника 2024 года, проходит регулярное ТО. Работаем в мороз до -25°C. 
                Есть все разрешающие документы (Ростехнадзор, ЧТО, ПТО).
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО С ХАРАКТЕРИСТИКАМИ */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsModalOpen(false)} // Закрытие по клику на фон
        >
          {/* Само окно (клик по нему не закрывает) */}
          <div 
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Кнопка закрытия */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-dark hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="bg-brand-light p-3 rounded-xl">
                <Settings className="text-brand" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-dark">Kanglim KS2056SM</h4>
                <p className="text-sm text-slate-500">Характеристики спецтехники</p>
              </div>
            </div>

            <ul className="space-y-4">
              {crane.specs.map((spec, index) => (
                <li key={index} className="flex justify-between items-center text-base border-b border-slate-50 pb-2 last:border-0">
                  <span className="text-slate-500">{spec.label}</span>
                  <span className="font-bold text-dark bg-slate-50 px-3 py-1 rounded-lg">{spec.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a 
                href="tel:+70000000000" 
                className="w-full flex justify-center items-center bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/30"
              >
                Заказать кран
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Crane;