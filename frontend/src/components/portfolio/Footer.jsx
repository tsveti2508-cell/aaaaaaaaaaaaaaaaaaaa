import React from "react";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative z-10 border-t border-white/10 py-10 px-6 md:px-12 bg-black"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="overline text-neutral-500">
          © {new Date().getFullYear()} · All artwork property of Tsvetelina Shopova
        </p>
        <p className="overline text-neutral-500">
          Crafted with care · Sofia, BG
        </p>
      </div>
    </footer>
  );
}
