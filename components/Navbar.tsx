"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/90 backdrop-blur-md border-b border-edge shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-content px-6 flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display font-semibold text-sm tracking-[0.04em] text-ink hover:text-accent transition-colors"
        >
          AAGAM JAIN
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resumePath}
            download
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Download Resume
            <ArrowDownToLine className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge text-ink"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-base/98 backdrop-blur-md border-b border-edge"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-ink border-b border-edge last:border-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-6">
              <a
                href={profile.resumePath}
                download
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-medium text-white"
              >
                Download Resume
                <ArrowDownToLine className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
