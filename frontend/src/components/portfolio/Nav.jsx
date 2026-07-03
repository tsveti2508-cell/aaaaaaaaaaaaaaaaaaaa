import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-display text-2xl tracking-tight text-white flex items-center gap-2"
        >
          <span className="text-[#C8AA6E]">✦</span>
          <span>Tsvetelina</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="overline text-neutral-300 hover:text-[#C8AA6E] transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-cta"
            className="overline px-5 py-2.5 border border-[#C8AA6E] text-[#C8AA6E] hover:bg-[#C8AA6E] hover:text-black transition-all duration-300 rounded-full"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          data-testid="nav-menu-toggle"
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="overline text-neutral-300 hover:text-[#C8AA6E]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
