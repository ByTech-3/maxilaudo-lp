import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaFinal } from "@/components/CtaFinal";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Remarcação de Chassi e Motor | Maxilaudo · Credenciada DETRAN-PR",
  description:
    "Chassi ilegível ou motor sem numeração? A Maxilaudo é credenciada pelo DETRAN-PR para Remarcação dentro da lei. Acompanhamento do início ao fim.",
};

const WPP = "https://wa.me/5541997426286";

export default function RemarcacaoPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white overflow-hidden"
        style={{ background: "#071a5e", paddingTop: 48, paddingBottom: 110 }}
      >
        {/* grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 70% 50%,#000 0%,transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 70% 50%,#000 0%,transparent 75%)",
          }}
        />
        {/* red glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: -160,
            top: -160,
            width: 560,
            height: 560,
            background: "radial-gradient(circle,rgba(250,12,19,0.18) 0%,transparent 60%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <Breadcrumb current="Remarcação de Chassi e Motor" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            {/* left */}
            <div>
              {/* credential badge */}
              <div className="relative inline-flex items-stretch gap-0 bg-white text-[#071a5e] rounded-[10px] overflow-hidden mb-7" style={{ boxShadow: "0 14px 30px rgba(0,0,0,0.35),0 0 0 1px rgba(250,12,19,0.4)" }}>
                <div
                  className="absolute pointer-events-none"
                  style={{ inset: -3, borderRadius: 13, background: "linear-gradient(135deg,#fa0c13,transparent 60%)", zIndex: -1, opacity: 0.5, filter: "blur(8px)" }}
                />
                <div className="flex items-center justify-center bg-vermelho text-white w-[54px] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="px-[18px] pl-[14px] py-[10px] flex flex-col justify-center">
                  <span className="font-[Barlow_Condensed,sans-serif] font-black text-[16px] tracking-[0.1em] leading-none uppercase text-[#071a5e]">Credenciada DETRAN-PR</span>
                  <span className="text-[11px] font-semibold text-[#5b6478] mt-[3px] tracking-[0.02em]">Empresa oficial para Remarcação de Chassi e Motor</span>
                </div>
              </div>

              <h1 className="h-font text-[clamp(36px,5.6vw,68px)] text-white mb-[22px] text-balance">
                Chassi <span className="text-vermelho">ilegível</span> ou motor sem numeração? Regularize com quem é credenciado.
              </h1>
              <p className="text-[#bcc8f0] text-[clamp(16px,1.6vw,19px)] max-w-[580px] leading-[1.55] mb-9">
                Sem a numeração legível, seu veículo não passa em vistoria, não muda de dono e não circula em paz. A Maxilaudo é credenciada pelo DETRAN-PR para fazer a Remarcação dentro da lei — e te conduz no processo do início ao fim.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href={`${WPP}?text=Quero%20regularizar%20meu%20ve%C3%ADculo%20%E2%80%94%20Remarca%C3%A7%C3%A3o`}
                  className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-vermelho-hover hover:-translate-y-0.5"
                  style={{ boxShadow: "0 8px 22px rgba(250,12,19,0.35)" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] flex-shrink-0" aria-hidden="true">
                    <path d="M20.5 3.5A11 11 0 0 0 4.6 19l-1.5 5.5 5.7-1.5A11 11 0 1 0 20.5 3.5Zm-8.5 17.4a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.4.9.9-3.3-.2-.3a9.3 9.3 0 1 1 7.7 4.2Zm5.1-6.9c-.3-.2-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-.9 1.1-.3.2-.5.1a7.6 7.6 0 0 1-2.2-1.4 8.4 8.4 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.3-.5a.5.5 0 0 0 0-.5l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6 6.1 6.1 0 0 0 1.3 3.2 13.9 13.9 0 0 0 5.3 4.7c.8.3 1.4.5 1.8.7a4.4 4.4 0 0 0 2 .1 3.3 3.3 0 0 0 2.1-1.5 2.6 2.6 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.4Z" />
                  </svg>
                  Quero regularizar meu veículo →
                </a>
                <a
                  href="#como"
                  className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.4)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-white"
                >
                  Como funciona o processo ↓
                </a>
              </div>

              <div className="flex flex-wrap gap-[18px_28px] mt-[34px] border-t border-[rgba(255,255,255,0.1)] pt-6">
                {["Credenciada oficial DETRAN-PR", "Acompanhamento do início ao fim", "Sem dor de cabeça com burocracia"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-[#cfd9f7] text-[13.5px] font-medium">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* right — plate stack visual */}
            <div aria-hidden="true" className="max-w-[440px] ml-auto w-full">
              {/* bad plate */}
              <div
                className="relative rounded-[10px] p-[24px_26px] mb-[18px]"
                style={{
                  background: "linear-gradient(180deg,#3a4250 0%,#1d232f 100%)",
                  border: "2px solid #525a6b",
                  boxShadow: "0 14px 36px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.1),inset 0 -2px 0 rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.15em] uppercase text-[#94a3b8] mb-[10px]">
                  <span>Chassi · antes</span>
                  <span className="w-[6px] h-[6px] rounded-full bg-[#0f1218]" style={{ boxShadow: "inset 0 1px 1px rgba(0,0,0,0.6),0 1px 0 rgba(255,255,255,0.08)" }} />
                </div>
                <span
                  className="font-mono font-semibold text-[clamp(22px,3vw,30px)] tracking-[0.12em] text-[#94a3b8] block"
                  style={{ textDecoration: "line-through", textDecorationColor: "#fa0c13", textDecorationThickness: 3, filter: "blur(0.5px)" }}
                >
                  9BWZZZ377
                </span>
                <span
                  className="absolute top-1/2 right-6 font-[Barlow_Condensed,sans-serif] font-black text-[14px] tracking-[0.18em] text-vermelho px-[10px] py-1 rounded-[4px]"
                  style={{ transform: "translateY(-50%) rotate(-8deg)", border: "1.5px solid #fa0c13", background: "rgba(250,12,19,0.12)" }}
                >
                  ILEGÍVEL
                </span>
              </div>

              {/* arrow */}
              <div className="flex items-center justify-center my-[-2px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fa0c13" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ filter: "drop-shadow(0 4px 8px rgba(250,12,19,0.4))" }}>
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>

              {/* good plate */}
              <div
                className="relative rounded-[10px] p-[24px_26px] mt-[18px]"
                style={{
                  background: "linear-gradient(180deg,#3a4250 0%,#1d232f 100%)",
                  border: "2px solid #16a34a",
                  boxShadow: "0 14px 36px rgba(22,163,74,0.25),inset 0 1px 0 rgba(255,255,255,0.1),inset 0 -2px 0 rgba(0,0,0,0.3),0 0 0 3px rgba(22,163,74,0.15)",
                }}
              >
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.15em] uppercase text-[#94a3b8] mb-[10px]">
                  <span>Chassi · depois</span>
                  <span className="w-[6px] h-[6px] rounded-full bg-[#0f1218]" style={{ boxShadow: "inset 0 1px 1px rgba(0,0,0,0.6),0 1px 0 rgba(255,255,255,0.08)" }} />
                </div>
                <span className="font-mono font-semibold text-[clamp(22px,3vw,30px)] tracking-[0.12em] text-[#e1e8ff] block" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.6)" }}>
                  9BWZZZ377VT004251
                </span>
                <span
                  className="absolute top-1/2 right-6 font-[Barlow_Condensed,sans-serif] font-black text-[14px] tracking-[0.18em] text-[#16a34a] px-[10px] py-1 rounded-[4px]"
                  style={{ transform: "translateY(-50%) rotate(-8deg)", border: "1.5px solid #16a34a", background: "rgba(22,163,74,0.12)" }}
                >
                  REMARCADO
                </span>
              </div>

              {/* stamp */}
              <div
                className="flex items-center gap-2.5 mt-[18px] p-[12px_16px] rounded-[8px] text-[#bcf5cd] text-[12.5px] leading-[1.4]"
                style={{ background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.3)" }}
              >
                <div className="w-6 h-6 rounded-full bg-[#16a34a] text-white flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <strong className="text-white font-semibold">Procedimento conforme DETRAN-PR.</strong>
                  <br />Veículo regularizado, pronto para vistoria, transferência e circulação.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO É NECESSÁRIO */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Quando é necessário</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">Quando você precisa remarcar</h2>
            <p className="text-cinza-claro text-[17px] max-w-[680px]">O DETRAN exige numeração legível para qualquer movimento no documento. Se você se encaixa em algum destes casos, a remarcação é obrigatória.</p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                    <path d="M2 12h2M22 12h-2M12 2v2M12 22v-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /><circle cx="12" cy="12" r="4" />
                  </svg>
                ),
                title: "Chassi ilegível",
                desc: "Numeração desgastada, raspada por reparo ou que perdeu a leitura natural com o tempo. Vistoria não passa.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                    <path d="M20 17a5 5 0 0 0-5-5h-1.7L9 8H3v5l3.8 3.8a3 3 0 0 0 4.2 0L13 15" /><circle cx="6" cy="20" r="2" /><circle cx="18" cy="20" r="2" />
                  </svg>
                ),
                title: "Corrosão / ferrugem",
                desc: "Carros mais antigos ou que pegaram maresia perdem a numeração por oxidação. A regularização recupera a identificação.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                    <path d="M14 14a4 4 0 0 1-8 0V5l4-2 4 2v9ZM18 8h4l-2 6h-4" /><circle cx="10" cy="14" r="1" />
                  </svg>
                ),
                title: "Troca de motor",
                desc: "Motor novo precisa ser identificado com a numeração correta para constar no CRLV. Sem isso, o documento fica em desacordo.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                    <path d="m21 8-8-6-8 6v10l8 4 8-4V8Z" /><path d="m3 8 9 6 9-6M12 14v10" /><line x1="5" y1="3" x2="19" y2="21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ),
                title: "Pós-acidente",
                desc: "Batida que comprometeu a peça onde o chassi é gravado. A remarcação reidentifica o veículo dentro da norma do DETRAN.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M9 13h6M9 17h6M9 9h2" />
                  </svg>
                ),
                title: "Exigência documental",
                desc: "DETRAN reprovou a vistoria, cartório pediu, comprador exige conferência. O laudo de remarcação resolve.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                    <rect x="3" y="6" width="18" height="13" rx="2" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
                  </svg>
                ),
                title: "Transferência travada",
                desc: "Você quer vender ou comprar e a transferência não anda por causa de numeração que o sistema não aceita. A gente destrava.",
              },
            ].map((card) => (
              <RevealSection key={card.title}>
                <article className="bg-white border-[1.5px] border-[#e3e8f3] rounded-[14px] p-[28px_24px] flex flex-col gap-3.5 transition-all hover:-translate-y-[3px] hover:border-vermelho hover:shadow-[0_14px_30px_rgba(10,43,143,0.06)] h-full group">
                  <div className="w-[52px] h-[52px] rounded-[12px] bg-azul-claro text-azul flex items-center justify-center transition-all group-hover:bg-vermelho group-hover:text-white">
                    {card.icon}
                  </div>
                  <h3 className="h-font text-[22px] text-cinza-texto">{card.title}</h3>
                  <p className="text-cinza-claro text-[14px] leading-[1.55]">{card.desc}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-azul-claro py-[88px]" id="como">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Como funciona</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">O processo, em 4 etapas</h2>
            <p className="text-cinza-claro text-[17px] max-w-[680px]">Você não precisa entender de procedimento DETRAN — a gente conduz. Aqui está o caminho do contato até o veículo regularizado.</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
            {/* dashed connector line (desktop) */}
            <div
              className="hidden md:block absolute z-0"
              style={{ top: 50, left: "8%", right: "8%", height: 2, borderTop: "2px dashed #b8c8ea" }}
            />
            {[
              { num: "1", tag: "Contato", title: "Você fala com a gente", desc: "Pelo WhatsApp, conta qual o caso — chassi ilegível, troca de motor, batida, exigência de vistoria. Avaliamos o que precisa." },
              { num: "2", tag: "Autorização", title: "Pedido de autorização ao DETRAN", desc: "O DETRAN precisa autorizar formalmente a remarcação antes do procedimento. Calma — nós te ajudamos em todo o processo." },
              { num: "3", tag: "Procedimento", title: "Remarcação física do veículo", desc: "Com a autorização emitida, executamos a regravação do chassi e/ou motor seguindo o padrão técnico do DETRAN-PR." },
              { num: "4", tag: "Entrega", title: "Veículo regularizado", desc: "Laudo emitido, registro atualizado no sistema. Veículo pronto para vistoria, transferência e circulação sem pendência." },
            ].map((step) => (
              <RevealSection key={step.num}>
                <article
                  className="bg-white border border-[#d9e1f5] rounded-[14px] p-[32px_24px_28px] relative z-[1] flex flex-col gap-3.5 h-full"
                  style={{ paddingTop: 32 }}
                >
                  <div
                    className="w-[60px] h-[60px] rounded-full bg-vermelho text-white flex items-center justify-center font-[Barlow_Condensed,sans-serif] font-black text-[28px] flex-shrink-0 self-start"
                    style={{ marginTop: -58, border: "6px solid #f0f4ff", boxShadow: "0 8px 22px rgba(250,12,19,0.3)" }}
                  >
                    {step.num}
                  </div>
                  <span className="font-mono text-[10.5px] tracking-[0.1em] text-azul uppercase font-semibold">{step.tag}</span>
                  <h4 className="h-font text-[22px] text-cinza-texto">{step.title}</h4>
                  <p className="text-cinza-claro text-[14px] leading-[1.55]">{step.desc}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE PRECISA */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection>
            <div
              className="rounded-[18px] p-[48px_40px] grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-10 items-center text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg,#0a2b8f 0%,#071a5e 100%)",
                boxShadow: "0 30px 70px rgba(10,43,143,0.25)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                  backgroundSize: "48px 48px",
                  maskImage: "radial-gradient(ellipse at top right,#000,transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse at top right,#000,transparent 75%)",
                }}
              />
              <div className="relative w-[88px] h-[88px] rounded-[22px] bg-vermelho text-white flex items-center justify-center flex-shrink-0" style={{ boxShadow: "0 14px 30px rgba(250,12,19,0.4)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[40px] h-[40px]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <path d="M14 2v6h6" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              </div>
              <div className="relative flex flex-col gap-2.5">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff8085]">Pergunta frequente</span>
                <h3 className="h-font text-[clamp(26px,3vw,36px)] text-white text-balance">O que é preciso para remarcar?</h3>
                <p className="text-[#bcc8f0] text-[16px] leading-[1.55] max-w-[560px]">
                  <strong className="text-white font-semibold">Autorização legal do DETRAN.</strong> Mas calma — nós te ajudamos em todo o processo. Da abertura do pedido à entrega do laudo final, você é conduzido por uma empresa credenciada que já fez isso centenas de vezes.
                </p>
              </div>
              <a
                href={`${WPP}?text=Quero%20saber%20o%20que%20preciso%20para%20remarcar`}
                className="relative inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-vermelho-hover hover:-translate-y-0.5 flex-shrink-0"
                style={{ boxShadow: "0 8px 22px rgba(250,12,19,0.35)" }}
              >
                Falar com especialista →
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* POR QUE CREDENCIADA */}
      <section className="bg-azul-escuro text-white py-[88px] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-[#ff6b71] mb-3.5">Por que credenciada importa</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-white mb-3.5 text-balance">A diferença que custa caro depois</h2>
            <p className="text-[#bcc8f0] text-[17px] max-w-[680px]">Remarcação feita fora do credenciamento é dor de cabeça garantida. Veja o que muda na prática.</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* bad column */}
            <RevealSection>
              <article className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-[14px] p-[32px_28px] flex flex-col gap-3.5">
                <div className="flex items-center gap-3.5 pb-[18px] border-b border-[rgba(255,255,255,0.1)]">
                  <div className="w-11 h-11 rounded-[10px] bg-[rgba(250,12,19,0.15)] text-vermelho flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="h-font text-[22px] text-white">Empresa não credenciada</h3>
                    <div className="text-[13px] text-[#9bafe6] mt-0.5">&quot;Faz mais barato, mas...&quot;</div>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Laudo sem validade oficial perante o DETRAN",
                    "Veículo pode ser apreendido em fiscalização",
                    "Risco de classificação como adulteração",
                    "Sem cobertura técnica em caso de questionamento",
                    "Problema na revenda — comprador descobre e desiste",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] text-[#e1e8ff] items-start leading-[1.5]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b71" strokeWidth="2.5" strokeLinecap="round" className="w-[18px] h-[18px] flex-shrink-0 mt-0.5">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>

            {/* good column */}
            <RevealSection>
              <article
                className="rounded-[14px] p-[32px_28px] flex flex-col gap-3.5"
                style={{ border: "1.5px solid #16a34a", background: "rgba(22,163,74,0.08)" }}
              >
                <div className="flex items-center gap-3.5 pb-[18px] border-b border-[rgba(255,255,255,0.1)]">
                  <div className="w-11 h-11 rounded-[10px] bg-[#16a34a] text-white flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="h-font text-[22px] text-white">Maxilaudo · Credenciada DETRAN-PR</h3>
                    <div className="text-[13px] text-[#9bafe6] mt-0.5">Procedimento dentro da lei</div>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Laudo aceito automaticamente no sistema do DETRAN-PR",
                    "Veículo regularizado e liberado para circular",
                    "Procedimento conforme normativa oficial",
                    "Responsabilidade técnica registrada",
                    "Transferência e venda sem trava",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] text-[#e1e8ff] items-start leading-[1.5]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaFinal
        eyebrow="Credenciada DETRAN-PR"
        title="Quero regularizar meu veículo."
        sub="Manda uma foto do chassi e a placa pelo WhatsApp — a gente analisa o caso e te orienta sobre o próximo passo. Sem custo de avaliação."
        wppHref={`${WPP}?text=Quero%20regularizar%20meu%20ve%C3%ADculo%20com%20a%20Remarca%C3%A7%C3%A3o`}
        wppLabel="Falar agora no WhatsApp"
      />
    </>
  );
}
