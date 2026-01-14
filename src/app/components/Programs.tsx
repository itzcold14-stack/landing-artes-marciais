import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Kung Fu",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdW5nJTIwZnUlMjB0cmFpbmluZyUyMHN1bnNldHxlbnwxfHx8fDE3NjgzOTM5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Desenvolva disciplina, força e agilidade com a arte marcial chinesa tradicional.",
    category: "Arte Marcial",
    color: "bg-red-600"
  },
  {
    title: "Tai Chi Chuan",
    image: "https://images.unsplash.com/photo-1616246672038-82ce1e3a9f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWklMjBjaGklMjBjaHVhbiUyMHBhcmt8ZW58MXx8fHwxNzY4MzkzOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Meditação em movimento. Melhore o fluxo de energia, equilíbrio e concentração.",
    category: "Interna",
    color: "bg-yellow-600"
  },
  {
    title: "Yoga Científica",
    image: "https://images.unsplash.com/photo-1663412070733-e7d0031c53f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcG9zZSUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzY4MzkzOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Prática física e mental baseada em evidências para otimizar sua saúde e bem-estar.",
    category: "Bem-estar",
    color: "bg-teal-600"
  },
  {
    title: "Chi Kung Reflexo",
    image: "https://images.unsplash.com/photo-1747746204645-56e1cac27160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGklMjBrdW5nJTIwcWlnb25nfGVufDF8fHx8MTc2ODM5MzkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Cultivo da energia vital através de respiração e movimentos suaves e conscientes.",
    category: "Energia",
    color: "bg-orange-600"
  }
];

export const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute right-0 top-10 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] text-right">
        <span className="text-[15vw] font-bold font-[Oswald] text-white leading-none select-none">
          SOUL
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-neutral-800 pb-8">
          <div className="max-w-xl">
            <h2 className="text-yellow-500 font-bold tracking-widest uppercase mb-2 text-sm font-[Oswald]">
              Práticas & Modalidades
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white uppercase font-[Oswald]">
              Caminhos para o <span className="text-red-600">Autoconhecimento</span>
            </h3>
          </div>
          <a href="#contact" className="text-white hover:text-yellow-500 flex items-center gap-2 transition-colors font-[Oswald] uppercase tracking-wide">
            Agendar aula experimental <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer shadow-xl"
            >
              <div className="absolute inset-0">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[50%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 transition-opacity"></div>
              </div>

              <div className="absolute top-4 right-4">
                 <span className={`inline-block px-3 py-1 ${program.color} text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-md`}>
                  {program.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold text-white mb-2 uppercase font-[Oswald] group-hover:text-yellow-400 transition-colors">
                  {program.title}
                </h4>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed opacity-90">
                  {program.description}
                </p>
                <div className={`w-8 h-1 ${program.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
