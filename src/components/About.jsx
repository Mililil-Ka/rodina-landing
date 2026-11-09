import { Quote, CheckCircle } from 'lucide-react';
import { siteData } from '../data/content';

const About = () => {
  const { about } = siteData;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Текстовая часть */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              {about.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {about.text}
            </p>

            {/* Блок с архитектором */}
            <div className="relative bg-brand-light p-8 rounded-2xl mb-10">
              <Quote className="absolute top-4 left-4 text-brand/20" size={48} />
              <p className="relative z-10 text-brand-dark font-medium text-lg italic">
                «{about.highlight}»
              </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-4">
              {about.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-brand mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая часть - Доверие */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
              <CheckCircle className="text-brand" />
              Почему нам доверяют
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="block text-dark mb-1">Работа с юрлицами и ИП</strong>
                  <span className="text-slate-500 text-sm">Работаем по наличному и безналичному расчету (с НДС и без НДС). Полный пакет документов.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="block text-dark mb-1">Опыт в капремонте</strong>
                  <span className="text-slate-500 text-sm">Выполняем работы по договорам с Фондом капитального ремонта Кузбасса.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="block text-dark mb-1">Собственная техника</strong>
                  <span className="text-slate-500 text-sm">Не зависим от подрядчиков. Кран-манипулятор всегда в отличном состоянии.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="block text-dark mb-1">Опытный оператор</strong>
                  <span className="text-slate-500 text-sm">Аккуратная погрузка/разгрузка и точный подъем грузов на любую высоту.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;