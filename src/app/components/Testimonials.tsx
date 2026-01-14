import React from "react";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ana Martins",
    role: "Praticante de Yoga",
    content: "Encontrei no Alma Guerreira o equilíbrio que buscava. A Yoga Científica me ajudou a entender meu corpo de uma forma totalmente nova.",
    stars: 5,
  },
  {
    name: "João Ferreira",
    role: "Aluno de Kung Fu",
    content: "A disciplina e o respeito ensinados aqui são incríveis. Não é apenas lutar, é sobre evoluir como ser humano.",
    stars: 5,
  },
  {
    name: "Sofia Costa",
    role: "Praticante de Tai Chi",
    content: "As aulas de Tai Chi trouxeram uma paz interior que eu não sentia há anos. O ambiente em Mira é perfeito para esta prática.",
    stars: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase mb-2 text-sm font-[Oswald]">
            Comunidade
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase font-[Oswald]">
            Relatos da Nossa <span className="text-red-600">Família</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-8 rounded-sm relative border border-neutral-800 hover:border-yellow-500/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold font-[Oswald] text-lg shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase text-sm font-[Oswald] tracking-wide">{testimonial.name}</h5>
                  <span className="text-yellow-500 text-xs uppercase tracking-wide font-medium">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
