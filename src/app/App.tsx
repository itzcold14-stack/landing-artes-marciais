import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Programs } from "./components/Programs";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import "../styles/fonts.css";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-bold tracking-widest uppercase mb-2 text-sm font-[Oswald]">
            Investimento
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white uppercase font-[Oswald]">
            Nossos <span className="text-red-600">Planos</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Mensal", price: "R$ 150", label: "/mês", features: ["Acesso a 1 modalidade", "Horário livre", "Sem taxa de matrícula"] },
            { name: "Trimestral", price: "R$ 130", label: "/mês", features: ["Acesso a 2 modalidades", "Horário livre", "1 Camiseta Grátis", "Avaliação Física"], highlight: true },
            { name: "Anual", price: "R$ 100", label: "/mês", features: ["Acesso total ilimitado", "Todas as modalidades", "Kit Iron Dojo Grátis", "Nutricionista incluso"] },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative bg-neutral-950 border ${
                plan.highlight ? "border-red-600 scale-105 z-10 shadow-2xl shadow-red-900/20" : "border-neutral-800"
              } p-8 rounded-sm flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
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
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 font-bold uppercase tracking-wider text-sm transition-colors rounded-sm ${
                  plan.highlight
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-neutral-800 hover:bg-neutral-700 text-white"
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
