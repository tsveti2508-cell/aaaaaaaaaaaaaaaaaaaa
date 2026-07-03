import React from "react";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import InternshipDirection from "@/components/portfolio/InternshipDirection";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  return (
    <div data-testid="portfolio-root" className="relative grain overflow-x-hidden">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <InternshipDirection />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
