import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { FadeInUp } from './Motion';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1746960836110-18b23375651c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGZpZ2h0ZXIlMjBkYXJrJTIwYmFja2dyb3VuZCUyMGludGVuc2V8ZW58MXx8fHwxNzY4Mzg3NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Martial Arts Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative mt-16">
        <div className="max-w-3xl">
          <FadeInUp delay={0.1}>
            <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 border border-red-600/50 text-red-500 font-bold text-sm tracking-widest uppercase mb-6">
              #1 Centro de Treinamento
            </span>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6 italic">
              DOMINE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                SEU INSTINTO
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-300 mb-8 max-w-xl font-light">
              Jiu-Jitsu, Muay Thai, Boxe e Karate. Transforme seu corpo e mente com a metodologia dos campeões.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4} className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] transition-transform hover:-translate-y-1"
            >
              <span className="skew-x-[10deg]">COMEÇAR AGORA</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 h-14 rounded-none skew-x-[-10deg] backdrop-blur-sm"
            >
              <div className="skew-x-[10deg] flex items-center gap-2">
                <PlayCircle size={20} />
                VER VÍDEO
              </div>
            </Button>
          </FadeInUp>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-red-600 to-transparent"></div>
      </div>
    </section>
  );
};
