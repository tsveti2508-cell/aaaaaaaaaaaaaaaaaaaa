import React, { useState } from "react";
import { projects } from "@/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowUpRight, X } from "lucide-react";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="work"
      data-testid="projects-section"
      className="relative py-24 md:py-40 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24">
          <div>
            <p className="overline text-[#C8AA6E] mb-4">Selected Work · 04</p>
            <h2
              data-testid="projects-heading"
              className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tighter text-white"
            >
              The <span className="italic text-[#C8AA6E]">Portfolio</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md font-body text-base md:text-lg">
            A curated glimpse into current work — character concepts, skin design, illustration series, and traditional foundations.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[360px]">
          {projects.map((p, i) => (
            <button
              type="button"
              key={p.id}
              data-testid={`project-card-${p.id}`}
              onClick={() => setActive(p)}
              className={`project-card group text-left ${p.span}`}
            >
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="overlay">
                <div className="flex items-start justify-between gap-4 pointer-events-none">
                  <div>
                    <p className="overline text-[#C8AA6E] mb-2">{p.category}</p>
                    <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1 font-body">
                      {p.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Static index badge */}
              <span className="absolute top-4 left-4 overline text-white/70 z-10">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          data-testid="project-dialog"
          className="max-w-5xl w-[95vw] bg-[#0f0f11] border border-white/10 text-white p-0 overflow-hidden"
        >
          {active && (
            <div className="grid grid-cols-1 md:grid-cols-2 max-h-[85vh] overflow-y-auto">
              <div className="relative aspect-square md:aspect-auto md:h-full bg-black">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
                <div>
                  <p className="overline text-[#C8AA6E] mb-4">
                    {active.category} · {active.year}
                  </p>
                  <DialogTitle className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-white mb-3">
                    {active.title}
                  </DialogTitle>
                  <p className="text-sm text-neutral-400 font-body mb-8">
                    {active.subtitle}
                  </p>
                  <DialogDescription className="text-base text-neutral-300 leading-relaxed font-body">
                    {active.description}
                  </DialogDescription>
                </div>
                <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="project-external-link"
                    className="overline text-[#C8AA6E] hover:text-white transition-colors flex items-center gap-2 link-underline"
                  >
                    View on ArtStation <ArrowUpRight size={14} />
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    data-testid="project-dialog-close"
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-[#C8AA6E] hover:text-[#C8AA6E] flex items-center justify-center transition-colors"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
