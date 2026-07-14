"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { WppIcon } from "./WppIcon";
import { useSmartHeader } from "@/lib/useSmartHeader";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/laudo-cautelar", label: "MAXILAUDO" },
  { href: "/laudo-tecnico", label: "Laudo Técnico" },
  { href: "/remarcacao", label: "Remarcação" },
  { href: "/historico-veicular", label: "Histórico Veicular" },
  { href: "/lojistas", label: "Lojistas" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { visible, scrolled } = useSmartHeader();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 w-full z-[60]"
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        background: scrolled ? "rgba(255,255,255,0.88)" : "#ffffff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(10,43,143,0.08)" : "none",
        boxShadow: scrolled
          ? "0 4px 24px rgba(10,43,143,0.10)"
          : "0 2px 16px rgba(10,43,143,0.10)",
      }}
    >
      <div className="relative flex items-center justify-between min-h-[68px] px-6">
        <Link href="/" aria-label="Maxilaudo — Início" className="flex items-center flex-shrink-0">
          <Image
            key="logo"
            src="/assets/maxilaudo-logo.png"
            alt="Maxilaudo"
            height={80}
            width={240}
            className="w-auto lg:hidden"
            style={{
              height: scrolled ? 40 : 56,
              transition: "height 0.3s ease",
            }}
            priority
          />
          <Image
            key="logo-desktop"
            src="/assets/maxilaudo-logo.png"
            alt="Maxilaudo"
            height={80}
            width={240}
            className="w-auto hidden lg:block"
            style={{
              height: scrolled ? 52 : 80,
              transition: "height 0.3s ease",
            }}
            priority
          />
        </Link>

        <nav className="hidden lg:flex gap-1.5 items-center absolute left-1/2 -translate-x-1/2" aria-label="Principal">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-azul no-underline font-semibold text-[14.5px] px-[18px] py-[9px] rounded-full border-2 transition-all duration-200 whitespace-nowrap ${
                pathname === l.href
                  ? "bg-azul text-white border-azul shadow-[0_4px_12px_rgba(10,43,143,0.25)]"
                  : "border-transparent hover:bg-azul-claro hover:border-[rgba(10,43,143,0.25)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2.5 items-center pr-8">
          <a
            href="https://wa.me/554191446917"
            className="inline-flex items-center gap-2 bg-verde-wpp text-white font-bold text-sm px-[22px] py-3 rounded-full no-underline border-none cursor-pointer transition-all duration-200 whitespace-nowrap shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:bg-verde-wpp-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)]"
          >
            <WppIcon />
            <span className="hidden sm:inline">(41) 9144-6917</span>
          </a>

          <button
            className="lg:hidden flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-azul-claro border-2 border-[rgba(10,43,143,0.15)] text-azul cursor-pointer transition-all duration-200 hover:bg-azul hover:text-white hover:border-azul"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="bg-azul-escuro border-t border-[rgba(255,255,255,0.06)] py-2 pb-3.5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-white no-underline px-6 py-3 font-medium border-l-[3px] transition-all ${
                pathname === l.href
                  ? "bg-[rgba(255,255,255,0.04)] border-l-vermelho"
                  : "border-l-transparent hover:bg-[rgba(255,255,255,0.04)] hover:border-l-vermelho"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
