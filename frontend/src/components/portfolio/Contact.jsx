import React, { useState } from "react";
import { artist } from "@/data/portfolio";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(artist.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy — try again");
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-40 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        <p className="overline text-[#C8AA6E] mb-6">Contact · 03</p>
        <h2
          data-testid="contact-heading"
          className="font-display text-[16vw] md:text-[11vw] leading-[0.85] tracking-tighter text-white mb-12"
        >
          Let&apos;s <span className="italic text-[#C8AA6E]">talk</span>.
        </h2>

        <div className="grid grid-cols-12 gap-6 md:gap-12 mt-12 md:mt-20">
          <div className="col-span-12 md:col-span-6">
            <p className="text-lg md:text-2xl text-neutral-300 font-body leading-relaxed max-w-xl">
              Have a project, an internship opening, or just want to chat about
              concept work? I&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <button
                onClick={copyEmail}
                data-testid="copy-email-btn"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-[#C8AA6E] text-black rounded-full hover:bg-[#E2C281] transition-all"
              >
                <span className="font-body font-medium">{artist.email}</span>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>

              <a
                href={`mailto:${artist.email}`}
                data-testid="mailto-btn"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-full border border-white/20 hover:border-[#C8AA6E] hover:text-[#C8AA6E] transition-all"
              >
                <span className="overline">Send Email</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="overline text-neutral-500 mb-6">Elsewhere</p>
            <ul className="divide-y divide-white/10 border-t border-b border-white/10">
              {artist.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`social-${s.label.toLowerCase()}`}
                    className="group flex items-center justify-between py-5 hover:text-[#C8AA6E] transition-colors"
                  >
                    <span className="font-display text-2xl md:text-3xl">
                      {s.label}
                    </span>
                    <span className="flex items-center gap-3 text-sm text-neutral-400 group-hover:text-[#C8AA6E] font-body">
                      {s.handle}
                      <ArrowUpRight
                        size={16}
                        className="transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
