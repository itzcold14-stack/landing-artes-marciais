import React from "react";
import { Brain, Heart, Activity, Sun } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Brain className="w-10 h-10 text-yellow-500" />,
    title: "Yoga Científica",
    description: "Uma abordagem fundamentada na anatomia e fisiologia para alinhar corpo e mente com precisão e segurança.",
  },
  {
    icon: <Activity className="w-10 h-10 text-red-500" />,
    title: "Chi Kung Reflexo",
    description: "Exercícios de energia vital que harmonizam o fluxo energético e fortalecem o sistema imunológico.",
  },
  {
    icon: <Sun className="w-10 h-10 text-yellow-500" />,
    title: "Meditação Plena",
    description: "Técnicas de mindfulness para reduzir o estresse, aumentar o foco e promover a paz interior.",
  },
  {
    icon: <Heart className="w-10 h-10 text-red-500" />,
    title: "Saúde Integral",
    description: "Cuidado completo que une a disciplina marcial com o bem-estar holístico do praticante.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-neutral-950 relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-neutral-900 to-neutral-950 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 font-bold tracking-[0.2em] uppercase mb-2 text-sm font-[Oswald]">
            Nossa Filosofia
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white uppercase font-[Oswald]">
            Equilíbrio entre <span className="text-red-600">Força</span> e <span className="text-yellow-500">Serenidade</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-sm border-t-2 border-transparent hover:border-yellow-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-900/10"
            >
              <div className="mb-6 p-4 bg-neutral-950 rounded-full inline-block shadow-lg border border-neutral-800 group-hover:border-yellow-500/30 transition-colors">
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
