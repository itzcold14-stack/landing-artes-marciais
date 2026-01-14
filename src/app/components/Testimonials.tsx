import React from "react";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Aluno de Muay Thai",
    content: "O Iron Dojo mudou minha vida. Perdi 15kg e ganhei uma confiança que nunca tive. Os instrutores são sensacionais.",
    stars: 5,
  },
  {
    name: "Mariana Souza",
    role: "Aluna de Jiu-Jitsu",
    content: "Ambiente extremamente acolhedor para mulheres. Me sinto segura e respeitada, além de aprender defesa pessoal de verdade.",
    stars: 5,
  },
  {
    name: "Ricardo Mendes",
    role: "Boxe Competitivo",
    content: "Estrutura de ponta para quem quer competir. O mestre Ricardo tem uma visão técnica que não se encontra em qualquer lugar.",
    stars: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-bold tracking-widest uppercase mb-2 text-sm font-[Oswald]">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase font-[Oswald]">
            O que nossos <span className="text-red-600">Alunos</span> Dizem
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
              className="bg-neutral-900 p-8 rounded-sm relative border border-neutral-800"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold font-[Oswald]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase text-sm font-[Oswald]">{testimonial.name}</h5>
                  <span className="text-red-500 text-xs uppercase tracking-wide">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
