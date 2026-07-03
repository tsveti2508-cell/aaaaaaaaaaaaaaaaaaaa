import React from "react";
import { artist } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-40 px-6 md:px-12"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6 md:gap-12 items-center">
        {/* Left column - image */}
        <div className="col-span-12 md:col-span-5 relative">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={artist.avatar}
              alt="Tsvetelina"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 border border-[#C8AA6E]/20" />
          </div>
          <p className="overline text-neutral-500 mt-4 text-right">
            [ 01 · The Artist ]
          </p>
        </div>

        {/* Right column - text */}
        <div className="col-span-12 md:col-span-7 md:pl-8">
          <p className="overline text-[#C8AA6E] mb-6">About</p>
          <h2
            data-testid="about-heading"
            className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-white mb-10"
          >
            Artists with <br />
            <span className="italic text-[#C8AA6E]">years of experience</span>
          </h2>
          <div className="space-y-6 max-w-xl">
            {artist.bio.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-neutral-300 leading-relaxed font-body"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8">
            <div>
              <p className="overline text-neutral-500 mb-1">Based in</p>
              <p className="font-display text-lg text-white">Sofia, BG</p>
            </div>
            <div>
              <p className="overline text-neutral-500 mb-1">Focus</p>
              <p className="font-display text-lg text-white">Concept & Skins</p>
            </div>
            <div>
              <p className="overline text-neutral-500 mb-1">Status</p>
              <p className="font-display text-lg text-[#C8AA6E]">Open</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
