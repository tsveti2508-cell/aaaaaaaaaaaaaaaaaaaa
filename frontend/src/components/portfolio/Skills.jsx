import React from "react";
import Marquee from "react-fast-marquee";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-40 border-t border-white/5 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-6">
            <p className="overline text-[#C8AA6E] mb-4">Toolkit · 02</p>
            <h2
              data-testid="skills-heading"
              className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tighter text-white"
            >
              The <span className="italic text-[#C8AA6E]">Craft</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-neutral-400 font-body text-base md:text-lg">
              Traditional foundations, digital execution. Below — the disciplines and tools I lean on to move ideas from thumbnail to final key art.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee ribbons */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover
        data-testid="skills-marquee-1"
      >
        {skills.map((s, i) => (
          <span
            key={`s1-${i}`}
            className="font-display text-[8vw] md:text-[7vw] leading-none tracking-tighter px-8 stroke-text italic"
          >
            {s}
          </span>
        ))}
      </Marquee>

      <Marquee
        gradient={false}
        speed={30}
        direction="right"
        pauseOnHover
        className="mt-4 md:mt-8"
        data-testid="skills-marquee-2"
      >
        {skills.map((s, i) => (
          <span
            key={`s2-${i}`}
            className="font-display text-[8vw] md:text-[7vw] leading-none tracking-tighter px-8 text-[#C8AA6E]"
          >
            {s} <span className="text-white/30 mx-4">✦</span>
          </span>
        ))}
      </Marquee>

      {/* Tools list */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Photoshop", detail: "Digital painting" },
          { label: "Procreate", detail: "Sketch to final" },
          { label: "Clip Studio", detail: "Line art & comics" },
          { label: "Traditional", detail: "Graphite, ink, watercolor" },
        ].map((t, i) => (
          <div
            key={i}
            data-testid={`tool-${i}`}
            className="border-t border-white/10 pt-6"
          >
            <p className="overline text-neutral-500 mb-2">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="font-display text-2xl md:text-3xl text-white mb-1">
              {t.label}
            </p>
            <p className="text-sm text-neutral-400 font-body">{t.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
