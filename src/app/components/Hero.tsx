import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570456717698-41ac2f7157bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3NjgzMTE5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Martial Arts Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base font-[Oswald]">
            Bem-vindo ao Iron Dojo
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase leading-tight font-[Oswald]">
            Domine Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Mente</span><br />
            Conquiste Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Corpo</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Treinamento de elite em Jiu-Jitsu, Muay Thai e Boxe. Junte-se à nossa comunidade e descubra sua verdadeira força.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="#programs"
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all transform hover:scale-105 flex items-center gap-2 font-[Oswald]"
            >
              Começar Agora
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all hover:bg-white/10 font-[Oswald]"
            >
              Conhecer a Academia
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
