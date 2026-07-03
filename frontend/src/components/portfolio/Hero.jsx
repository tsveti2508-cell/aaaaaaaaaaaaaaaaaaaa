import React from "react";
import { artist } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

const heroImage =
  "https://customer-assets.emergentagent.com/job_creative-portfolio-1438/artifacts/o43boset_image.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Concept art backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#050505]" />
      </div>

      {/* Top-right meta */}
      <div className="absolute top-24 md:top-32 right-6 md:right-12 z-20 max-w-xs text-right">
        <p className="overline text-[#C8AA6E] mb-3">Portfolio · 2025 / 2026</p>
        <p className="text-sm text-neutral-300 leading-relaxed font-body">
          Sofia · Bulgaria — open to concept art internships & remote collaborations across games, film, and publishing.
        </p>
      </div>

      {/* Bottom content */}
      <div className="relative z-20 max-w-[1600px] mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
        <p
          data-testid="hero-overline"
          className="overline text-[#C8AA6E] mb-6 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-[#C8AA6E]" />
          Internship Portfolio · Digital Art Concepting
        </p>

        <h1
          data-testid="hero-title"
          className="font-display text-[18vw] md:text-[13vw] lg:text-[11vw] leading-[0.88] tracking-tighter text-white"
        >
          Tsvetelina<span className="text-[#C8AA6E]">.</span>
        </h1>

        <p
          data-testid="hero-subtitle"
          className="font-display text-2xl md:text-4xl text-[#C8AA6E] mt-4 tracking-wide"
        >
          2D Concept Artist
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl">
          <p className="text-lg md:text-xl text-neutral-200 leading-relaxed font-body">
            {artist.tagline}
          </p>
          <div className="flex flex-col justify-end gap-4">
            <a
              href="#work"
              data-testid="hero-view-work"
              className="group inline-flex items-center gap-3 text-white overline hover:text-[#C8AA6E] transition-colors"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/30 group-hover:border-[#C8AA6E] group-hover:bg-[#C8AA6E] group-hover:text-black transition-all">
                <ArrowDown size={16} />
              </span>
              View Selected Work
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="relative z-20 border-t border-white/10 h-16 bg-black/40 backdrop-blur" />
    </section>
  );
}
