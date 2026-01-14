import React from "react";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 pt-20 pb-10 border-t border-neutral-900 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-bold uppercase tracking-tighter text-white font-[Oswald] mb-6 block">
              <span className="text-red-600">IRON</span> DOJO
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Academia dedicada ao ensino da arte marcial com honra, disciplina e técnica. Formando campeões dentro e fora do tatame.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm hover:bg-red-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm hover:bg-red-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm hover:bg-red-600 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-[Oswald]">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-red-500 transition-colors">Início</a></li>
              <li><a href="#programs" className="hover:text-red-500 transition-colors">Modalidades</a></li>
              <li><a href="#schedule" className="hover:text-red-500 transition-colors">Horários</a></li>
              <li><a href="#pricing" className="hover:text-red-500 transition-colors">Planos</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-[Oswald]">Modalidades</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Muay Thai</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Boxe</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Jiu-Jitsu</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">MMA</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Defesa Pessoal</a></li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-[Oswald]">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-500 shrink-0 mt-1" size={18} />
                <span>Rua dos Campeões, 123<br />Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-500 shrink-0" size={18} />
                <span>(11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-500 shrink-0" size={18} />
                <span>contato@irondojo.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 Iron Dojo. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
