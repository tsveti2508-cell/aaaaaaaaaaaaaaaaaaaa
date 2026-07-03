import React from "react";

const cards = [
  {
    title: "Artistic mindset",
    body:
      "My work focuses on how a design communicates: silhouette, palette, cultural cues, and small props that hint at a character's story. I aim for concepts that read clearly at a glance and reward a second, closer look.",
  },
  {
    title: "Growth & Goals",
    body:
      "My next goal is to expand my knowledge as well as experiment with more types of media. As an artist, it is very important to adapt to new tools and keep growing with the development of new technologies. I would also like to find a way to bring more projects inspired by my culture into the game world.",
  },
];

export default function InternshipDirection() {
  return (
    <section
      id="direction"
      data-testid="internship-direction-section"
      className="relative py-24 md:py-40 px-6 md:px-12 border-t border-white/5 bg-[#050505]"
    >
      <div className="max-w-[1600px] mx-auto">
        <p className="overline text-[#C8AA6E] mb-6">Internship Direction</p>
        <h2
          data-testid="direction-heading"
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white mb-10 md:mb-16"
        >
          Internship <span className="italic text-[#C8AA6E]">direction</span>
        </h2>

        <p
          data-testid="direction-intro"
          className="text-neutral-300 max-w-3xl font-body text-base md:text-lg leading-relaxed mb-16 md:mb-24"
        >
          This portfolio presents my profile as a young concept artist who
          combines classical fundamentals, digital rendering, and a strong
          sense of storytelling — with an understanding of how visual
          development supports a full production.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <div
              key={c.title}
              data-testid={`direction-card-${i}`}
              className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 min-h-[380px] hover:border-[#C8AA6E]/40 transition-colors duration-500"
            >
              <p className="overline text-neutral-500 mb-6">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-white leading-tight mb-6">
                {c.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-body">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
