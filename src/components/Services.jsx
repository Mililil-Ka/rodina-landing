import { Home, Building2, Construction, Truck } from 'lucide-react';
import { siteData } from '../data/content';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Construction: Construction,
  Truck: Truck,
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Что мы делаем
          </h2>
          <p className="text-lg text-slate-600">
            Полный спектр строительных и кровельных услуг в Кемерово и области.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-brand" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;