import { WppIcon } from "./WppIcon";

export function CtaFinal({
  eyebrow,
  title,
  sub,
  wppHref,
  wppLabel,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  wppHref: string;
  wppLabel: string;
}) {
  return (
    <section className="bg-vermelho text-white py-[88px] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(180deg,transparent,#000,transparent)",
          WebkitMaskImage: "linear-gradient(180deg,transparent,#000,transparent)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6 text-center">
        <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-white opacity-85 mb-3.5">
          {eyebrow}
        </span>
        <h2 className="h-font text-[clamp(36px,5.5vw,64px)] text-white mb-3.5 text-balance">{title}</h2>
        <p className="text-[18px] text-[rgba(255,255,255,0.92)] mb-9 max-w-[640px] mx-auto">{sub}</p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <a
            href={wppHref}
            className="inline-flex items-center gap-2.5 bg-white text-vermelho px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-azul hover:text-white hover:-translate-y-0.5"
          >
            <WppIcon />
            {wppLabel}
          </a>
          <a
            href="tel:+554130239104"
            className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.5)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-white hover:text-vermelho"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px]"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
            </svg>
            Ligar: (41) 3023-9104
          </a>
        </div>
      </div>
    </section>
  );
}
