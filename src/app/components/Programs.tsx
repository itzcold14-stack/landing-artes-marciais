import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Muay Thai",
    image: "https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWF5JTIwdGhhaSUyMGtpY2tib3hpbmd8ZW58MXx8fHwxNzY4Mzg1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A arte das 8 armas. Utilize punhos, cotovelos, joelhos e canelas em um combate dinâmico e poderoso.",
    level: "Iniciante ao Avançado",
  },
  {
    title: "Boxe",
    image: "https://images.unsplash.com/photo-1748483879355-204bf8fb3397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nJTIwYWN0aW9uJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NjgzODc4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A nobre arte. Aperfeiçoe seus jabs, diretos e esquivas enquanto constrói um cardio de aço.",
    level: "Todos os níveis",
  },
  {
    title: "Jiu-Jitsu",
    image: "https://images.unsplash.com/photo-1541836567455-2d41eb6dd9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBraWQlMjBkb2pvfGVufDF8fHx8MTc2ODM4NzgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Using Karate image as placeholder for grappling/gi feel since JJ search failed
    description: "A arte suave. Domine técnicas de solo, alavancas e finalizações. Onde a técnica vence a força.",
    level: "Gi e No-Gi",
  },
];

export const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-bold font-[Oswald] text-white leading-none select-none">
          FIGHT
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-red-500 font-bold tracking-widest uppercase mb-2 text-sm font-[Oswald]">
              Nossas Modalidades
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white uppercase font-[Oswald]">
              Escolha seu <span className="text-red-600">Caminho</span>
            </h3>
          </div>
          <a href="#" className="text-white hover:text-red-500 flex items-center gap-2 transition-colors font-[Oswald] uppercase tracking-wide">
            Ver grade completa <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                  {program.level}
                </span>
                <h4 className="text-3xl font-bold text-white mb-2 uppercase font-[Oswald] italic">
                  {program.title}
                </h4>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  {program.description}
                </p>
                <div className="w-12 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
