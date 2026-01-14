import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/4a46952d658cdebcbea5e15655300af6cc6acbfe.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Modalidades", href: "#programs" },
    { name: "Filosofia", href: "#features" },
    { name: "Planos", href: "#pricing" },
    { name: "Localização", href: "#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-950/95 backdrop-blur-md py-2 shadow-lg border-b border-yellow-500/10" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src={logo} alt="Alma Guerreira Logo" className="h-12 w-auto md:h-16 transition-transform group-hover:scale-105" />
          <span className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-white font-[Oswald] hidden sm:block">
            ALMA <span className="text-yellow-500">GUERREIRA</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-yellow-500 font-medium transition-colors uppercase tracking-wider text-sm font-[Oswald]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-6 py-2 rounded-sm font-bold uppercase tracking-wide transition-all text-sm font-[Oswald] shadow-md hover:shadow-red-900/20"
          >
            Agendar Visita
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950 border-t border-neutral-800 absolute w-full"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-yellow-500 text-lg font-[Oswald] uppercase tracking-wide border-b border-neutral-800 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-red-600 text-white text-center py-3 rounded-sm font-bold uppercase tracking-wide mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Visita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
