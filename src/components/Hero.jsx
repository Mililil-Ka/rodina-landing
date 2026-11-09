import { ArrowRight, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/content';
import craneImg from '../assets/crane.jpg'; // Наше фото крана

const Hero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-20 bg-slate-50 relative overflow-hidden">
      {/* Декоративные пятна на фоне */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-light blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Левая часть - Текст */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-dark font-semibold text-sm mb-6">
              <ShieldCheck size={18} />
              <span>Работаем с 2022 года</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              {siteData.hero.title}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              {siteData.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#crane" className="inline-flex justify-center items-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-dark transition-all shadow-xl shadow-brand/30 hover:-translate-y-1">
                {siteData.hero.ctaText}
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="inline-flex justify-center items-center gap-2 bg-white text-dark border-2 border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-brand hover:text-brand transition-all">
                {siteData.hero.ctaSecondaryText}
              </a>
            </div>
          </div>

          {/* Правая часть - Фото */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src={craneImg} 
              alt="Кран-манипулятор Kanglim" 
              className="rounded-2xl shadow-xl w-full object-cover h-[300px] md:h-[400px] transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;