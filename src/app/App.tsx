import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Programs } from "./components/Programs";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import "../styles/fonts.css";

export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
