import React from "react";
import { motion } from "motion/react";
import { ChevronRight, PlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdW5nJTIwZnUlMjB0cmFpbmluZyUyMHN1bnNldHxlbnwxfHx8fDE3NjgzOTM5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Martial Arts Meditation Sunset"
          className="w-full h-full object-cover"
        />
        {/* Gradients to make text readable but keep the 'golden' feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-yellow-500"></div>
            <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm md:text-base font-[Oswald]">
              Artes Marciais & Meditação Plena
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase leading-[0.9] font-[Oswald]">
            Cuidamos do seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
              Corpo e Mente
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed border-l-4 border-red-600 pl-6">
            Yoga Científica, Chi Kung Reflexo, Kung Fu e Tai Chi Chuan. 
            Uma abordagem integrada para saúde, equilíbrio e autodefesa em Mira, Portugal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#programs"
              className="group bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 font-[Oswald]"
            >
              Conhecer Modalidades
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group bg-transparent border border-white/30 hover:border-yellow-500 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all hover:bg-white/5 flex items-center justify-center gap-3 font-[Oswald]"
            >
              <PlayCircle size={20} className="text-yellow-500 group-hover:scale-110 transition-transform" />
              Ver Vídeo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest font-[Oswald]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};
