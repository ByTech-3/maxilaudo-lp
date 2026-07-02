import type { Metadata } from "next";
import { WppIcon } from "@/components/WppIcon";
import { RevealSection } from "@/components/RevealSection";
import { CtaFinal } from "@/components/CtaFinal";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Laudo Técnico Veicular Curitiba | Maxilaudo Perícias",
  description:
    "Defeito oculto, vício redibitório ou conflito com concessionária? Perito vai ao veículo em Curitiba. Laudo com valor de prova para processo judicial.",
};

const WPP = `https://wa.me/554191446917?text=${encodeURIComponent("Quero descrever meu caso para um laudo técnico.")}`;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] flex-shrink-0 mt-0.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function LaudoTecnicoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-azul-escuro text-white overflow-hidden" style={{ padding: "96px 0 110px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at 70% 50%,#000 0%,transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at 70% 50%,#000 0%,transparent 75%)" }} />
        <div className="absolute left-[-160px] top-[-160px] w-[560px] h-[560px] pointer-events-none" style={{ background: "radial-gradient(circle,rgba(250,12,19,0.18) 0%,transparent 60%)" }} />

        <div className="max-w-[1280px] mx-auto px-6">
          <Breadcrumb current="Laudo Técnico" />

          <div className="relative grid grid-cols-1 gap-12 items-center lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.18)] text-white px-[14px] py-[7px] rounded-[6px] font-heading font-extrabold tracking-[0.12em] text-[13px] uppercase mb-[22px]">
                <span className="w-2 h-2 rounded-full bg-vermelho shadow-[0_0_0_4px_rgba(250,12,19,0.25)]" />
                Perícia pós-compra
              </div>
              <h1 className="h-font text-[clamp(36px,5.6vw,68px)] text-white mb-[22px] text-balance">
                Tem um problema com seu veículo? A{" "}
                <span className="text-vermelho">verdade técnica</span> está aqui.
              </h1>
              <p className="text-[#bcc8f0] text-[clamp(16px,1.6vw,19px)] max-w-[580px] leading-[1.55] mb-9">
                Quando o carro já é seu e algo não fecha — defeito que não estava no anúncio, reparo mal feito na concessionária, processo judicial em andamento — o Laudo Técnico documenta o que aconteceu, com responsabilidade do perito.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <a href={WPP} className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline shadow-[0_8px_22px_rgba(250,12,19,0.35)] transition-all hover:bg-vermelho-hover hover:-translate-y-0.5">
                  <WppIcon /> Descrever meu caso para um especialista <span>→</span>
                </a>
                <a href="#quando" className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.4)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-white">
                  Quando devo pedir <span>↓</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-[18px_28px] mt-[34px] border-t border-[rgba(255,255,255,0.1)] pt-6">
                {["Laudo com valor de prova", "Perito vai até o veículo", "Atende processo judicial e extrajudicial"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-[#cfd9f7] text-[13.5px] font-medium">
                    <CheckIcon /> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Dossier visual */}
            <div aria-hidden="true">
              <div className="relative max-w-[440px] w-full ml-auto bg-[#0d2a6e] border border-[rgba(255,255,255,0.12)] rounded-[14px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
                <div className="flex justify-between items-center px-[22px] py-4 bg-[rgba(0,0,0,0.25)] border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-2.5 font-heading font-extrabold text-[16px] tracking-[0.08em] text-white before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-vermelho before:shadow-[0_0_0_3px_rgba(250,12,19,0.25)]">
                    LAUDO TÉCNICO
                  </div>
                  <div className="font-mono text-[11px] text-[#9bafe6] tracking-[0.05em]">CASE Nº 0231/25</div>
                </div>
                <div className="px-[22px] py-[22px]">
                  {[
                    { k: "Objeto", v: "Defeito oculto no câmbio automático após 14 dias da compra" },
                    { k: "Local", v: "Concessionária — Curitiba/PR" },
                    { k: "Tipo", v: "Perícia extrajudicial · Vício redibitório" },
                    { k: "Conclusão", v: "Defeito pré-existente comprovado por análise técnica" },
                  ].map((r) => (
                    <div key={r.k} className="flex justify-between items-start gap-3.5 py-3 border-b border-dashed border-[rgba(255,255,255,0.08)] last:border-none text-[13px] text-[#bcc8f0]">
                      <span className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-[#9bafe6] flex-shrink-0 w-[108px]">{r.k}</span>
                      <span className="font-medium text-white flex-1 leading-[1.4]">{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="px-[22px] py-4 bg-[rgba(250,12,19,0.1)] border-t border-[rgba(250,12,19,0.3)] flex items-center gap-2.5">
                  <div className="w-[26px] h-[26px] rounded-full bg-vermelho flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div className="text-[12.5px] text-white leading-[1.4]">
                    <strong className="font-heading font-extrabold tracking-[0.06em] uppercase text-[13px] block">Documento técnico</strong>
                    Com fotos, parecer e responsabilidade do perito
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO USAR */}
      <section className="bg-white py-[88px]" id="quando">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Quando usar</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">Situações em que o Laudo Técnico é a sua arma</h2>
            <p className="text-cinza-claro text-[17px] max-w-[680px]">
              Cada caso é um caso — mas alguns padrões se repetem. Se o seu se encaixa em algum destes, o laudo é o documento que sustenta a sua versão.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { tag: "Judicial", title: "Processo judicial", desc: "Laudo técnico assistencial para instrução de ação. Documento que o seu advogado pode juntar ao processo como prova técnica." },
              { tag: "Defeito oculto", title: "Vício redibitório / defeito oculto", desc: "Comprou um carro e dias depois apareceu um defeito que não foi declarado? A perícia comprova se o problema é anterior à compra." },
              { tag: "Concessionária", title: "Conflito com concessionária", desc: "Reparo mal-feito em garantia, serviço cobrado e não entregue, troca de peça por similar sem autorização. O laudo objetiva a disputa." },
              { tag: "Extrajudicial", title: "Perícia extrajudicial", desc: "Documento técnico para negociação direta — antes de processar, muitas vezes basta apresentar um laudo bem feito para resolver." },
              { tag: "Sinistro", title: "Avaliação de sinistro", desc: "Carro batido, danos contestados pela seguradora, valor de reposição questionado. O laudo mensura o que aconteceu e quanto custa." },
              { tag: "Pós-compra", title: "Arrependimento de compra", desc: "Suspeita de adulteração de hodômetro, de chassi, de motor, ou de procedência. O laudo dá base para devolução ou indenização." },
            ].map((w) => (
              <RevealSection key={w.title} className="group flex gap-[18px] items-start bg-white border-[1.5px] border-[#e3e8f3] rounded-[14px] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-vermelho hover:shadow-[0_14px_30px_rgba(10,43,143,0.06)]">
                <div className="w-[54px] h-[54px] rounded-[12px] bg-azul-claro text-azul flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-vermelho group-hover:text-white">
                  <WhenIcon tag={w.tag} />
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] tracking-[0.1em] text-vermelho uppercase font-semibold mb-1">{w.tag}</span>
                  <h3 className="font-heading font-bold text-[22px] leading-[1.1] text-cinza-texto mb-2">{w.title}</h3>
                  <p className="text-cinza-claro text-[14px] leading-[1.55]">{w.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ANALISAMOS */}
      <section className="bg-azul-claro py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">O que analisamos</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">A análise é dirigida ao seu caso</h2>
            <p className="text-cinza-claro text-[17px] max-w-[680px]">
              Diferente da perícia preventiva, o Laudo Técnico foca no problema específico que motivou o pedido. Estas são as frentes mais comuns.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Defeito mecânico", desc: "Identificação técnica do defeito, causa raiz e estimativa de quando começou. Confronto com o histórico de manutenção.", examples: "Motor · Câmbio · Suspensão · Elétrica" },
              { title: "Dano estrutural", desc: "Análise de longarinas, colunas, assoalho e caixa de roda em busca de batida não declarada, reparo perigoso ou perda de rigidez.", examples: "Batida · Solda · Geometria" },
              { title: "Falha de reparo", desc: "Quando a oficina ou concessionária não entregou o reparo conforme prometido. O laudo aponta o que ficou fora do padrão técnico.", examples: "Pintura · Funilaria · Mecânica" },
              { title: "Avaliação de danos", desc: "Mensuração técnica dos danos para fins de indenização, devolução ou redibição. Quantificação em laudo com fotos e orçamento.", examples: "Quantum debeatur · Reposição · Depreciação" },
            ].map((a) => (
              <RevealSection key={a.title} className="bg-white rounded-[14px] p-7 border border-[#d9e1f5] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,43,143,0.1)]">
                <div className="w-[48px] h-[48px] rounded-[10px] bg-azul text-white flex items-center justify-center">
                  <AIcon title={a.title} />
                </div>
                <h4 className="font-heading font-bold text-[22px] leading-[1.1] text-cinza-texto">{a.title}</h4>
                <p className="text-cinza-claro text-[14px] leading-[1.55]">{a.desc}</p>
                <div className="mt-auto pt-3.5 border-t border-dashed border-[#e3e8f3] font-mono text-[11px] text-[#9aa5bf] uppercase tracking-[0.06em] leading-[1.5]">{a.examples}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="bg-azul rounded-[18px] p-14 md:p-16 grid grid-cols-1 gap-8 items-center relative overflow-hidden shadow-[0_30px_70px_rgba(10,43,143,0.25)] md:grid-cols-[auto_1fr]">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at top right,#000,transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at top right,#000,transparent 70%)" }} />
            <div className="absolute right-[-100px] bottom-[-100px] w-[340px] h-[340px] pointer-events-none" style={{ background: "radial-gradient(circle,rgba(250,12,19,0.25) 0%,transparent 65%)" }} />
            <div className="relative w-[96px] h-[96px] rounded-[24px] bg-vermelho flex items-center justify-center font-serif font-bold text-[96px] leading-[0.4] text-white flex-shrink-0 shadow-[0_12px_30px_rgba(250,12,19,0.4)] pt-[38px] overflow-hidden">
              &ldquo;
            </div>
            <div className="relative">
              <p className="h-font text-[clamp(28px,3.4vw,42px)] leading-[1.05] text-white text-balance mb-[18px]">
                Cada laudo é personalizado.<br />
                <span className="text-[#ff8085]">Não existe modelo padrão.</span>
              </p>
              <p className="text-[#bcc8f0] text-[16px] leading-[1.6] max-w-[600px]">
                Cautelar é checklist, Técnico é investigação. A gente lê o seu caso, escuta o seu problema, vai até o veículo com hipóteses claras e produz um documento dirigido — não um relatório genérico que serve pra tudo e pra nada.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-azul-escuro text-white py-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-[#ff6b71] mb-3.5">Como funciona</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-white mb-3.5 text-balance">Do contato ao laudo na sua mão</h2>
            <p className="text-[#bcc8f0] text-[17px] max-w-[680px]">Quatro etapas. Você acompanha cada uma pelo WhatsApp.</p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
            {[
              { num: "01 — Contato", title: "Você descreve o caso", desc: "Pelo WhatsApp, em texto ou áudio. A gente pede só o que precisa — sem formulário interminável." },
              { num: "02 — Análise prévia", title: "Definimos o escopo", desc: "Perito avalia o caso, propõe a perícia adequada (mecânica, estrutural, etc.), prazo e valor." },
              { num: "03 — Vistoria", title: "Perito vai até o veículo", desc: "Inspeção em campo com equipamento próprio. Fotos, medições e coleta de evidências técnicas." },
              { num: "04 — Entrega", title: "Laudo final em PDF", desc: "Documento técnico com parecer dirigido, fotos, conclusão objetiva e ART do perito responsável." },
            ].map((p) => (
              <RevealSection key={p.num} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-[14px] p-6 flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-vermelho hover:bg-[rgba(255,255,255,0.06)]">
                <div className="font-mono text-[12px] text-vermelho font-semibold tracking-[0.1em]">{p.num}</div>
                <h4 className="font-heading font-bold text-[22px] leading-[1.1] text-white">{p.title}</h4>
                <p className="text-[13.5px] text-[#bcc8f0] leading-[1.55]">{p.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        eyebrow="Está com um caso?"
        title="Descrever meu caso para um especialista."
        sub="Manda o que aconteceu pelo WhatsApp — em texto, em áudio, como preferir. Em minutos um perito responde se o Laudo Técnico se aplica ao seu caso e qual o caminho mais rápido."
        wppHref={WPP}
        wppLabel="Descrever meu caso no WhatsApp"
      />
    </>
  );
}

function WhenIcon({ tag }: { tag: string }) {
  const map: Record<string, JSX.Element> = {
    "Judicial": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="m16 16 3-8 3 8c-.9.7-2 1-3 1s-2.1-.3-3-1Z" /><path d="m2 16 3-8 3 8c-.9.7-2 1-3 1s-2.1-.3-3-1Z" /><path d="M7 21h10M12 3v18" /></svg>,
    "Defeito oculto": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="M12 22a10 10 0 1 1 10-10c0 2-2 4-4 4s-3-1-3-3v-2a3 3 0 0 0-6 0c0 3 3 5 6 5" /><circle cx="7" cy="11" r="1" /><circle cx="12" cy="6" r="1" /><circle cx="17" cy="11" r="1" /></svg>,
    "Concessionária": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 9v3M15 9v3M9 15v3M15 15v3" /></svg>,
    "Extrajudicial": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><circle cx="12" cy="15" r="2" /></svg>,
    "Sinistro": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="M3 12h3l3-9 4 18 3-12 2 6h3" /></svg>,
    "Pós-compra": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" /></svg>,
  };
  return map[tag] ?? null;
}

function AIcon({ title }: { title: string }) {
  const map: Record<string, JSX.Element> = {
    "Defeito mecânico": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></svg>,
    "Dano estrutural": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]"><path d="m21 16-9-5-9 5M21 8l-9-5-9 5M3 8v8l9 5 9-5V8" /></svg>,
    "Falha de reparo": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]"><path d="M11 18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" /><rect x="9" y="2" width="12" height="14" rx="2" /><path d="m13 10 2 2 4-4" /></svg>,
    "Avaliação de danos": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]"><path d="M3 6h18M3 12h18M3 18h12" /><path d="M19 16v6M22 19h-6" /></svg>,
  };
  return map[title] ?? null;
}
