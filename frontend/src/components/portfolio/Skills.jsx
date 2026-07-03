import React from "react";

export default function Skills() {
  const groups = [
    {
      title: "Software & Programmes",
      items: [
        "Photoshop",
        "Procreate",
        "Clip Studio",
        "After Effects",
        "Illustrator",
        "Traditional Media",
        "Blender (learning)",
      ],
    },
    {
      title: "Creative Focus",
      items: [
        "Character Design",
        "Skin Concept",
        "Visual Development",
        "Color Theory",
        "Anatomy",
        "Storytelling",
        "VFX",
        "3D Modelling",
      ],
    },
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
          <p className="overline text-[#C8AA6E] mb-4">Skills</p>
          <h2
            data-testid="skills-heading"
            className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tighter text-white"
          >
            Skills
          </h2>
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {groups.map((g, gi) => (
            <div
              key={g.title}
              data-testid={`skill-panel-${gi}`}
              className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
            >
              <p className="overline text-[#C8AA6E] mb-8">{g.title}</p>
              <div className="flex flex-wrap gap-3">
                {g.items.map((item, i) => (
                  <span
                    key={item}
                    data-testid={`skill-chip-${gi}-${i}`}
                    className="inline-flex items-center px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 text-neutral-200 font-body text-sm md:text-base hover:border-[#C8AA6E]/60 hover:text-[#C8AA6E] hover:bg-[#C8AA6E]/5 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
