import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaFinal } from "@/components/CtaFinal";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Histórico Veicular | Maxilaudo Perícias",
  description:
    "Consulte o histórico documental do veículo antes de comprar. Leilão, sinistro, roubo, gravame, restrições e débitos. Resposta em até 15 minutos pelo WhatsApp.",
};

const WPP = "https://wa.me/554191446917";

export default function HistoricoVeicularPage() {
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
          <Breadcrumb current="Histórico Veicular" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            {/* left */}
            <div>
              <div className="inline-flex items-center gap-2.5 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.18)] text-white px-[14px] py-[7px] rounded-[6px] font-[Barlow_Condensed,sans-serif] font-black tracking-[0.12em] text-[13px] uppercase mb-[22px]">
                <span className="w-2 h-2 rounded-full bg-[#34d399]" style={{ boxShadow: "0 0 0 4px rgba(52,211,153,0.25)" }} />
                Resposta em até 15 minutos
              </div>

              <h1 className="h-font text-[clamp(36px,5.6vw,68px)] text-white mb-[22px] text-balance">
                Antes de qualquer negócio: consulte o histórico. <span className="text-vermelho">Custa pouco, evita muito.</span>
              </h1>
              <p className="text-[#bcc8f0] text-[clamp(16px,1.6vw,19px)] max-w-[580px] leading-[1.55] mb-9">
                Em poucos minutos você descobre o passado documental do veículo — leilão, sinistro de grande monta, roubo, gravame, restrição e débitos. É a primeira camada de proteção antes de qualquer compra.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href={`${WPP}?text=Quero%20consultar%20o%20hist%C3%B3rico%20de%20um%20ve%C3%ADculo`}
                  className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-vermelho-hover hover:-translate-y-0.5"
                  style={{ boxShadow: "0 8px 22px rgba(250,12,19,0.35)" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] flex-shrink-0" aria-hidden="true">
                    <path d="M20.5 3.5A11 11 0 0 0 4.6 19l-1.5 5.5 5.7-1.5A11 11 0 1 0 20.5 3.5Zm-8.5 17.4a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.4.9.9-3.3-.2-.3a9.3 9.3 0 1 1 7.7 4.2Zm5.1-6.9c-.3-.2-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-.9 1.1-.3.2-.5.1a7.6 7.6 0 0 1-2.2-1.4 8.4 8.4 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.3-.5a.5.5 0 0 0 0-.5l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6 6.1 6.1 0 0 0 1.3 3.2 13.9 13.9 0 0 0 5.3 4.7c.8.3 1.4.5 1.8.7a4.4 4.4 0 0 0 2 .1 3.3 3.3 0 0 0 2.1-1.5 2.6 2.6 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.4Z" />
                  </svg>
                  Consultar histórico agora →
                </a>
                <a
                  href="#comparativo"
                  className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.4)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-white"
                >
                  Histórico × MAXILAUDO ↓
                </a>
              </div>

              <div className="flex flex-wrap gap-[18px_28px] mt-[34px] border-t border-[rgba(255,255,255,0.1)] pt-6">
                {["Bases oficiais", "Resposta em 15 minutos", "Tudo pelo WhatsApp"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-[#cfd9f7] text-[13.5px] font-medium">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* right — printout visual */}
            <div aria-hidden="true" className="max-w-[460px] w-full ml-auto">
              <div
                className="relative bg-white text-cinza-texto"
                style={{ borderRadius: "14px 14px 6px 6px", boxShadow: "0 30px 70px rgba(0,0,0,0.4)" }}
              >
                {/* torn paper bottom edge */}
                <div
                  className="absolute left-0 right-0 pointer-events-none"
                  style={{
                    bottom: -12,
                    height: 14,
                    background: "repeating-linear-gradient(135deg,#fff 0,#fff 12px,transparent 12px,transparent 14px), linear-gradient(180deg,#fff 50%,transparent 50%)",
                    WebkitMask: "linear-gradient(180deg,#000 50%,transparent 50%)",
                    mask: "linear-gradient(180deg,#000 50%,transparent 50%)",
                    filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.2))",
                  }}
                />

                {/* header */}
                <div className="flex justify-between items-center px-[22px] pt-[18px] pb-[14px] border-b-2 border-dashed border-[#e3e8f3]">
                  <div className="flex items-center gap-2 font-[Barlow_Condensed,sans-serif] font-black text-[18px] tracking-[0.06em] text-[#071a5e]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fa0c13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                    HISTÓRICO VEICULAR
                  </div>
                  <div className="font-mono text-[11px] text-[#9aa5bf] tracking-[0.05em]">PLACA · BRA-2E19</div>
                </div>

                {/* rows */}
                <div className="px-[22px] py-[18px]">
                  {[
                    { icon: <path d="M3 21h18M5 21V8l7-5 7 5v13" />, label: "Leilão", status: "Sem registro", color: "ok" },
                    { icon: <path d="m4 18 6-6-6-6M10 18l6-6-6-6M16 18l6-6-6-6" />, label: "Sinistro de grande monta", status: "Não consta", color: "ok" },
                    { icon: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>, label: "Roubo / furto", status: "Sem ocorrência", color: "ok" },
                    { icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></>, label: "Restrições", status: "1 gravame", color: "warn" },
                    { icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>, label: "Débitos", status: "IPVA pendente", color: "warn" },
                    { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>, label: "Proprietários", status: "2 anteriores", color: "ok" },
                  ].map((row, i, arr) => (
                    <div key={row.label} className={`flex justify-between items-center py-[11px] text-[13px] ${i < arr.length - 1 ? "border-b border-[#f0f3fa]" : ""}`}>
                      <span className="flex items-center gap-2.5 text-cinza-claro font-medium">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
                          {row.icon}
                        </svg>
                        {row.label}
                      </span>
                      <span className={`flex items-center gap-1.5 font-semibold ${row.color === "ok" ? "text-[#16a34a]" : "text-[#f59e0b]"}`}>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: row.color === "ok" ? "#16a34a" : "#f59e0b" }}
                        />
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* footer */}
                <div
                  className="mx-[22px] mb-[22px] p-[14px_16px] rounded-[8px] flex items-center gap-3 text-[12.5px] leading-[1.4]"
                  style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", color: "#92611a" }}
                >
                  <div className="w-[26px] h-[26px] rounded-full bg-[#f59e0b] text-white flex items-center justify-center flex-shrink-0 font-bold text-[14px]">!</div>
                  <div>
                    <strong className="text-[#071a5e] font-bold block">Atenção: 2 apontamentos amarelos.</strong>
                    Negociar a quitação antes de fechar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE REVELAMOS */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">O que revelamos</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">Tudo que o histórico documental mostra</h2>
            <p className="text-cinza-claro text-[17px] max-w-[680px]">A consulta cruza dados de bases oficiais e da indústria. Em uma única tela você vê o passado registrado do veículo — sem precisar pedir documento por documento.</p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {[
              {
                icon: <><path d="M3 21h18M5 21V8l7-5 7 5v13M9 9v3M15 9v3M9 15v3M15 15v3" /></>,
                tag: "Bandeira vermelha",
                title: "Leilão",
                desc: "Identifica se o veículo já passou por leilão de seguradora, financeira ou DETRAN — incluindo classificação do leilão e motivo.",
              },
              {
                icon: <><path d="M3 12h2l3-9 4 18 3-12 2 6h4" /></>,
                tag: "Acidentes",
                title: "Sinistro / Perda total",
                desc: "Apontamentos de sinistro grave, perda total e categoria de classificação registrada por seguradoras.",
              },
              {
                icon: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
                tag: "Segurança",
                title: "Roubo / Furto",
                desc: "Verificação cruzada em bases policiais e DENATRAN — ocorrência ativa ou histórica de furto, roubo ou recuperação.",
              },
              {
                icon: <><circle cx="12" cy="12" r="10" /><line x1="4.9" y1="4.9" x2="19.1" y2="19.1" /></>,
                tag: "Documental",
                title: "Restrições",
                desc: "Gravame ativo (financeira ou banco), alienação, busca e apreensão, restrição judicial e travas administrativas.",
              },
              {
                icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
                tag: "Financeiro",
                title: "Débitos",
                desc: "IPVA, licenciamento, multas, taxas DETRAN, DPVAT — o que está em aberto, em qual exercício e o valor estimado.",
              },
              {
                icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6M9 9h2" /></>,
                tag: "Indústria",
                title: "Histórico de seguradora",
                desc: "Passagens por sinistro registradas pelas seguradoras, recall em aberto, KM declarada e histórico de proprietários.",
              },
            ].map((card) => (
              <RevealSection key={card.title}>
                <article className="bg-white border-[1.5px] border-[#e3e8f3] rounded-[14px] p-[28px_26px] flex flex-col gap-3.5 transition-all hover:-translate-y-[3px] hover:border-vermelho hover:shadow-[0_14px_30px_rgba(10,43,143,0.06)] h-full group">
                  <div className="w-[52px] h-[52px] rounded-[12px] bg-azul-claro text-azul flex items-center justify-center transition-all group-hover:bg-vermelho group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                      {card.icon}
                    </svg>
                  </div>
                  <span className="font-mono text-[10.5px] tracking-[0.1em] text-vermelho uppercase font-semibold -mt-1">{card.tag}</span>
                  <h3 className="h-font text-[22px] text-cinza-texto">{card.title}</h3>
                  <p className="text-cinza-claro text-[14px] leading-[1.55]">{card.desc}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="bg-azul-claro py-[88px]" id="comparativo">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Comparativo</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">Histórico × MAXILAUDO — qual é qual</h2>
            <p className="text-cinza-claro text-[17px] max-w-[680px]">Dois serviços, dois objetivos. Um olha o papel, o outro olha o carro. Veja em que cada um é forte — e por que muitos clientes pedem os dois juntos.</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Histórico col */}
            <RevealSection>
              <article className="bg-white rounded-[18px] p-[36px_32px] border-[1.5px] border-[#d9e1f5] flex flex-col gap-5 h-full">
                <div className="flex items-start justify-between gap-3.5 pb-[18px] border-b border-[#e3e8f3]">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10.5px] tracking-[0.12em] text-azul font-semibold uppercase">Fase 1 · Documental</span>
                    <h3 className="h-font text-[26px] text-cinza-texto">Histórico Veicular</h3>
                    <div className="text-[13px] text-cinza-claro mt-0.5">A primeira camada de proteção</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-azul-claro text-azul flex-shrink-0 whitespace-nowrap">
                    15 min
                  </span>
                </div>
                <ul className="flex flex-col gap-3.5 flex-1">
                  {[
                    { ok: true, title: "Consulta documental", sub: "Leilão, sinistro, roubo, gravame, débitos" },
                    { ok: true, title: "Resposta em até 15 minutos", sub: "Você só precisa da placa ou chassi" },
                    { ok: true, title: "100% remoto", sub: "Consulta pelo WhatsApp, sem deslocamento" },
                    { ok: false, title: "Não verifica condição física", sub: "Não detecta batida, repintura ou desgaste oculto" },
                    { ok: false, title: "Não confere chassi/motor", sub: "Adulteração só aparece em perícia presencial" },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3 text-[14px] text-cinza-texto items-start leading-[1.5]">
                      <span
                        className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${item.ok ? "bg-[#16a34a]" : "bg-[#e3e8f3]"}`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke={item.ok ? "#fff" : "#9aa5bf"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          {item.ok ? <polyline points="20 6 9 17 4 12" /> : <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>}
                        </svg>
                      </span>
                      <span>
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-cinza-claro text-[13px] block mt-0.5">{item.sub}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-[18px] border-t border-[#e3e8f3] flex flex-col gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[12px] text-cinza-claro uppercase tracking-[0.08em] font-semibold">Ideal para</span>
                    <span className="font-[Barlow_Condensed,sans-serif] font-black text-[22px] text-cinza-texto">triagem inicial</span>
                  </div>
                  <a
                    href={`${WPP}?text=Quero%20consultar%20o%20hist%C3%B3rico`}
                    className="inline-flex items-center gap-2 bg-azul text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-azul-escuro hover:-translate-y-0.5"
                  >
                    Consultar histórico →
                  </a>
                </div>
              </article>
            </RevealSection>

            {/* MAXILAUDO col */}
            <RevealSection>
              <article
                className="bg-white rounded-[18px] p-[36px_32px] flex flex-col gap-5 h-full relative"
                style={{ border: "1.5px solid #fa0c13", boxShadow: "0 22px 50px rgba(250,12,19,0.12)" }}
              >
                <div
                  className="absolute font-[Barlow_Condensed,sans-serif] font-black text-[11px] tracking-[0.12em] bg-vermelho text-white px-3 py-1 rounded-[6px]"
                  style={{ top: -12, left: 32 }}
                >
                  ★ COMBINADO COM HISTÓRICO
                </div>
                <div className="flex items-start justify-between gap-3.5 pb-[18px] border-b border-[#e3e8f3]">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10.5px] tracking-[0.12em] text-azul font-semibold uppercase">Fase 2 · Físico + documental</span>
                    <h3 className="h-font text-[26px] text-cinza-texto">MAXILAUDO Cautelar</h3>
                    <div className="text-[13px] text-cinza-claro mt-0.5">Perícia completa em campo</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase flex-shrink-0 whitespace-nowrap" style={{ background: "rgba(250,12,19,0.1)", color: "#fa0c13" }}>
                    Completo
                  </span>
                </div>
                <ul className="flex flex-col gap-3.5 flex-1">
                  {[
                    { title: "Inclui o Histórico Veicular", sub: "Toda a camada documental, mais..." },
                    { title: "Análise estrutural presencial", sub: "Longarinas, colunas, assoalho, reparos" },
                    { title: "Medição de pintura", sub: "Detecta repintura, massa, troca de peça" },
                    { title: "Verificação de chassi e motor", sub: "Confronto com documento, detecta adulteração" },
                    { title: "Laudo Aprovado / Reprovado", sub: "Conclusão objetiva com fotos e parecer" },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3 text-[14px] text-cinza-texto items-start leading-[1.5]">
                      <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 bg-[#16a34a]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-cinza-claro text-[13px] block mt-0.5">{item.sub}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-[18px] border-t border-[#e3e8f3] flex flex-col gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[12px] text-cinza-claro uppercase tracking-[0.08em] font-semibold">Ideal para</span>
                    <span className="font-[Barlow_Condensed,sans-serif] font-black text-[22px] text-cinza-texto">decisão final de compra</span>
                  </div>
                  <Link
                    href="/laudo-cautelar"
                    className="inline-flex items-center gap-2 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-vermelho-hover hover:-translate-y-0.5"
                    style={{ boxShadow: "0 8px 22px rgba(250,12,19,0.35)" }}
                  >
                    Conhecer o MAXILAUDO →
                  </Link>
                </div>
              </article>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* RECOMENDAÇÃO */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection>
            <div
              className="text-white rounded-[18px] p-[48px_40px] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center relative overflow-hidden"
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
                  maskImage: "radial-gradient(ellipse at top right,#000,transparent 70%)",
                  WebkitMaskImage: "radial-gradient(ellipse at top right,#000,transparent 70%)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{ right: -100, bottom: -100, width: 340, height: 340, background: "radial-gradient(circle,rgba(250,12,19,0.25) 0%,transparent 65%)" }}
              />

              <div className="relative flex flex-col">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff8085] mb-3">Recomendação Maxilaudo</span>
                <h3 className="h-font text-[clamp(28px,3.4vw,40px)] text-white mb-3.5 text-balance">
                  Para proteção máxima: combine <span className="text-[#ff8085]">Histórico + MAXILAUDO</span>.
                </h3>
                <p className="text-[#bcc8f0] text-[16px] leading-[1.6] mb-6 max-w-[520px]">
                  O histórico filtra rapidinho os carros que nem valem a pena visitar. O MAXILAUDO confirma na lata se o carro que sobrou é o que parece. Juntos, custam pouco perto de um financiamento errado.
                </p>
                <div className="flex flex-wrap gap-3.5">
                  <a
                    href={`${WPP}?text=Quero%20o%20combo%20Hist%C3%B3rico%20%2B%20MAXILAUDO`}
                    className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-vermelho-hover hover:-translate-y-0.5"
                    style={{ boxShadow: "0 8px 22px rgba(250,12,19,0.35)" }}
                  >
                    Quero o combo no WhatsApp →
                  </a>
                  <Link
                    href="/laudo-cautelar"
                    className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.4)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-[rgba(255,255,255,0.08)]"
                  >
                    Conhecer o MAXILAUDO
                  </Link>
                </div>
              </div>

              {/* formula visual */}
              <div className="relative flex flex-col gap-3.5 items-start" aria-hidden="true">
                {[
                  {
                    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>,
                    label: "HISTÓRICO VEICULAR",
                    sub: "Triagem documental · 15 min",
                    type: "normal",
                  },
                  { type: "plus", sign: "+" },
                  {
                    icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
                    label: "MAXILAUDO CAUTELAR",
                    sub: "Perícia presencial completa",
                    type: "normal",
                  },
                  { type: "plus", sign: "=" },
                  {
                    icon: <><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
                    label: "PROTEÇÃO MÁXIMA",
                    sub: "Documental + físico",
                    type: "eq",
                  },
                ].map((item, i) => {
                  if (item.type === "plus") {
                    return (
                      <div key={i} className="self-center">
                        <div
                          className="w-11 h-11 rounded-full text-white flex items-center justify-center font-[Barlow_Condensed,sans-serif] font-black text-[28px] leading-none"
                          style={{ background: item.sign === "+" ? "#fa0c13" : "#16a34a", boxShadow: item.sign === "+" ? "0 8px 22px rgba(250,12,19,0.4)" : "0 8px 22px rgba(22,163,74,0.4)" }}
                        >
                          {item.sign}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-4 rounded-[14px] p-[18px_22px] w-full ${item.type === "eq" ? "" : "bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)]"}`}
                      style={item.type === "eq" ? { border: "1px solid #16a34a", background: "rgba(22,163,74,0.1)" } : {}}
                    >
                      <div
                        className={`w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0 ${item.type === "eq" ? "bg-[#16a34a]" : "bg-[rgba(255,255,255,0.1)]"} text-white`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                          {item.icon}
                        </svg>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-[Barlow_Condensed,sans-serif] font-bold text-[18px] text-white leading-[1.1] tracking-[0.04em]">{item.label}</span>
                        <span className="text-[12px] text-[#9bafe6]">{item.sub}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaFinal
        eyebrow="Comece agora"
        title="Consultar histórico agora."
        sub="Manda a placa ou o chassi pelo WhatsApp — em até 15 minutos você recebe o relatório completo com tudo que o veículo carrega no documento."
        wppHref={`${WPP}?text=Quero%20consultar%20o%20hist%C3%B3rico%20de%20um%20ve%C3%ADculo`}
        wppLabel="Consultar no WhatsApp"
      />
    </>
  );
}
