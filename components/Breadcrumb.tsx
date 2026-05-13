import Link from "next/link";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="relative flex gap-2 text-[#9bafe6] text-[13px] mb-7 font-medium" aria-label="Breadcrumb">
      <Link href="/" className="text-[#9bafe6] no-underline hover:text-white transition-colors">Início</Link>
      <span className="text-[rgba(255,255,255,0.35)]">/</span>
      <Link href="/#servicos" className="text-[#9bafe6] no-underline hover:text-white transition-colors">Serviços</Link>
      <span className="text-[rgba(255,255,255,0.35)]">/</span>
      <span className="text-white">{current}</span>
    </nav>
  );
}
