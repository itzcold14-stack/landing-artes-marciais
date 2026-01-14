import React from "react";
import { Shield, Target, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Shield className="w-10 h-10 text-red-500" />,
    title: "Defesa Pessoal",
    description: "Aprenda técnicas eficazes para se proteger em qualquer situação, aumentando sua confiança e segurança.",
  },
  {
    icon: <Target className="w-10 h-10 text-red-500" />,
    title: "Disciplina Mental",
    description: "Desenvolva foco, resiliência e autocontrole através da filosofia tradicional das artes marciais.",
  },
  {
    icon: <Zap className="w-10 h-10 text-red-500" />,
    title: "Condicionamento",
    description: "Queime calorias, ganhe força e melhore sua flexibilidade com treinos intensos e dinâmicos.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Comunidade",
    description: "Treine em um ambiente de apoio mútuo, onde cada aluno ajuda o outro a evoluir e crescer.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-bold tracking-widest uppercase mb-2 text-sm font-[Oswald]">
            Por que treinar conosco?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white uppercase font-[Oswald]">
            Muito mais que <span className="text-red-600">Luta</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 p-8 rounded-sm border border-neutral-800 hover:border-red-900/50 transition-colors group"
            >
              <div className="mb-6 p-4 bg-neutral-950 rounded-full inline-block group-hover:scale-110 transition-transform duration-300 border border-neutral-800 group-hover:border-red-900">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 uppercase font-[Oswald]">
                {feature.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
