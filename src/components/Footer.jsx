import { Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { siteData } from '../data/content';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Колонка 1: Слоган */}
          <div>
            <p className="text-slate-400 mb-6">
              Строительство, кровельные работы и услуги крана-манипулятора в Кемерово и области.
            </p>
            <div className="text-sm text-slate-500">
              <p>ИНН: {siteData.inn}</p>
              <p>ОГРН: {siteData.ogrn}</p>
            </div>
          </div>

          {/* Колонка 2: Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand shrink-0 mt-1" size={20} />
                <span className="text-slate-300">{siteData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand shrink-0" size={20} />
                <a href={siteData.phoneLink} className="text-slate-300 hover:text-white transition-colors text-lg font-medium">
                  {siteData.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Связь и кнопки */}
          <div>
            <h3 className="text-xl font-bold mb-6">Связаться с нами</h3>
            <p className="text-slate-400 mb-6 text-sm">
              Оставьте заявку в мессенджере или позвоните нам, чтобы обсудить задачу и узнать стоимость.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href={siteData.whatsappLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={20} />
                Написать в WhatsApp
              </a>
              <a 
                href={siteData.telegramLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#2AABEE] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2299d6] transition-colors"
              >
                <Send size={20} />
                Написать в Telegram
              </a>
            </div>
          </div>

        </div>

        {/* Нижняя часть (Копирайт) */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {siteData.companyName}. Все права защищены.</p>
          <p>Сделано с любовью к своему делу.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;