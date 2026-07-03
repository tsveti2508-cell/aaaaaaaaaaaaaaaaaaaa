import React from "react";

export default function Skills() {
  const tools = [
    { label: "Photoshop", detail: "Digital painting" },
    { label: "Procreate", detail: "Sketch to final" },
    { label: "Clip Studio", detail: "Line art & comics" },
    { label: "Traditional", detail: "Graphite, ink, watercolor" },
  ];

  const disciplines = [
    "Character Design",
    "Skin Concept",
    "Illustration",
    "Visual Development",
    "Color Theory",
    "Anatomy",
    "Storytelling",
  ];

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-40 border-t border-white/5 bg-[#050505]"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="mb-16 md:mb-24">
          <p className="overline text-[#C8AA6E] mb-4">Toolkit · 02</p>
          <h2
            data-testid="skills-heading"
            className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tighter text-white"
          >
            Skills
          </h2>
        </div>

        {/* Disciplines list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mb-20 md:mb-32 border-t border-white/10 pt-8">
          {disciplines.map((d, i) => (
            <div
              key={i}
              data-testid={`discipline-${i}`}
              className="flex items-start gap-3"
            >
              <span className="overline text-[#C8AA6E] mt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-body text-base md:text-lg text-neutral-200 leading-snug">
                {d}
              </p>
            </div>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((t, i) => (
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
      </div>
    </section>
  );
}
