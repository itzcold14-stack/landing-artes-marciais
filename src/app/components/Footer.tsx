import React from "react";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "figma:asset/4a46952d658cdebcbea5e15655300af6cc6acbfe.png";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-950 pt-20 pb-10 border-t border-neutral-900 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Alma Guerreira" className="h-12 w-auto" />
              <a href="#" className="text-2xl font-bold uppercase tracking-tighter text-white font-[Oswald]">
                ALMA <span className="text-yellow-500">GUERREIRA</span>
              </a>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Saúde e Bem-Estar Físico. Cuidamos do seu corpo e mente através do Kung Fu, Tai Chi, Yoga e Chi Kung.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm hover:bg-yellow-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-[Oswald] border-l-2 border-red-600 pl-3">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-yellow-500 transition-colors">Início</a></li>
              <li><a href="#programs" className="hover:text-yellow-500 transition-colors">Modalidades</a></li>
              <li><a href="#pricing" className="hover:text-yellow-500 transition-colors">Planos</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Agendar Aula</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-[Oswald] border-l-2 border-yellow-500 pl-3">Modalidades</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Kung Fu</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Tai Chi Chuan</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Yoga Científica</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Chi Kung Reflexo</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Meditação</a></li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-[Oswald] border-l-2 border-red-600 pl-3">Localização</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-500 shrink-0 mt-1" size={18} />
                <span>C7M5+C5 Mira, Portugal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-500 shrink-0" size={18} />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-500 shrink-0" size={18} />
                <span>contato@almaguerreira.pt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Alma Guerreira. Saúde e Bem-Estar Físico.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
