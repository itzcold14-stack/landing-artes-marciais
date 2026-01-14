import React from "react";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase mb-2 text-sm font-[Oswald]">
            Investimento
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white uppercase font-[Oswald]">
            Planos <span className="text-red-600">Alma Guerreira</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { 
              name: "Harmonia", 
              price: "35€", 
              label: "/mês", 
              features: ["2x por semana", "Yoga ou Chi Kung", "Sem fidelização"] 
            },
            { 
              name: "Guerreiro", 
              price: "50€", 
              label: "/mês", 
              features: ["3x por semana", "Kung Fu ou Tai Chi", "Acesso a workshops", "Avaliação inicial"], 
              highlight: true 
            },
            { 
              name: "Mestre", 
              price: "70€", 
              label: "/mês", 
              features: ["Acesso Livre", "Todas as modalidades", "Meditação guiada", "Descontos em retiros"] 
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative bg-neutral-950 border ${
                plan.highlight ? "border-yellow-500 scale-105 z-10 shadow-2xl shadow-yellow-900/20" : "border-neutral-800"
              } p-8 rounded-sm flex flex-col transition-all hover:border-yellow-500/50`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                  Mais Popular
                </div>
              )}
              <h4 className="text-white font-bold uppercase text-xl mb-4 font-[Oswald]">{plan.name}</h4>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">{plan.label}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="bg-yellow-500/10 p-1 rounded-full">
                      <Check size={12} className="text-yellow-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 font-bold uppercase tracking-wider text-sm transition-all rounded-sm ${
                  plan.highlight
                    ? "bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-500 hover:to-yellow-500 text-white shadow-lg"
                    : "bg-neutral-800 hover:bg-neutral-700 text-white"
                }`}
              >
                Começar Jornada
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
