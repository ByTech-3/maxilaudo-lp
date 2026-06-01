import type { Metadata } from "next";
import { WppIcon } from "@/components/WppIcon";
import { RevealSection } from "@/components/RevealSection";
import { CtaFinal } from "@/components/CtaFinal";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "MAXILAUDO — Laudo Cautelar | Maxilaudo Perícias",
  description:
    "Perícia completa antes de comprar. Análise estrutural, pintura, identificação, histórico e entrega do laudo em até 1h30. Atendemos em Curitiba e região.",
};

const WPP = `https://wa.me/554191446917?text=${encodeURIComponent("Quero agendar o MAXILAUDO.")}`;

export default function MaxilaudoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-azul-escuro text-white overflow-hidden" style={{ padding: "96px 0 110px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at 70% 50%,#000 0%,transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at 70% 50%,#000 0%,transparent 75%)" }} />
        <div className="absolute left-[-160px] top-[-160px] w-[560px] h-[560px] pointer-events-none" style={{ background: "radial-gradient(circle,rgba(250,12,19,0.18) 0%,transparent 60%)" }} />

        <div className="max-w-[1280px] mx-auto px-6">
          <Breadcrumb current="MAXILAUDO — Laudo Cautelar" />

          <div className="relative grid grid-cols-1 gap-12 items-center lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[14px] py-[7px] rounded-[6px] font-heading font-extrabold tracking-[0.12em] text-[13px] uppercase mb-[22px]">
                ★ Produto Principal
              </div>
              <h1 className="h-font text-[clamp(36px,5.6vw,68px)] text-white mb-[22px] text-balance">
                MAXILAUDO: a perícia que{" "}
                <span className="text-vermelho">nenhum vendedor</span> quer que você faça.
              </h1>
              <p className="text-[#bcc8f0] text-[clamp(16px,1.6vw,19px)] max-w-[580px] leading-[1.55] mb-9">
                Antes de assinar qualquer coisa, a gente vai até o veículo e confere tudo que pode te custar caro depois — estrutura, pintura, identificação, histórico. Você decide com fato na mão, não com papo de vendedor.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <a href={WPP} className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline shadow-[0_8px_22px_rgba(250,12,19,0.35)] transition-all hover:bg-vermelho-hover hover:-translate-y-0.5">
                  <WppIcon /> Agendar MAXILAUDO no WhatsApp <span>→</span>
                </a>
                <a href="#analisamos" className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.4)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-white">
                  Ver o que analisamos <span>↓</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-[18px_28px] mt-[34px] border-t border-[rgba(255,255,255,0.1)] pt-6">
                {["Perito vai até o veículo", "Entrega em até 1h30", "Laudo com fotos e conclusão objetiva"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-[#cfd9f7] text-[13.5px] font-medium">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><polyline points="20 6 9 17 4 12" /></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Laudo card visual */}
            <div aria-hidden="true">
              <div className="relative bg-white text-cinza-texto rounded-[14px] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.4)] max-w-[420px] ml-auto w-full" style={{ transform: "rotate(-1.5deg)" }}>
                <div className="absolute inset-0 rounded-[14px] bg-azul" style={{ transform: "translate(14px,14px) rotate(3deg)", zIndex: -1, opacity: 0.4 }} />
                <div className="flex justify-between items-start pb-3.5 border-b border-[#e3e8f3] mb-4">
                  <div>
                    <div className="font-heading font-extrabold text-[18px] leading-none tracking-[0.08em]">LAUDO CAUTELAR</div>
                    <div className="text-[11px] text-cinza-claro mt-1 tracking-[0.04em]">MAXILAUDO Perícias · Curitiba/PR</div>
                  </div>
                  <div className="font-heading font-bold text-[14px] text-azul bg-azul-claro px-[10px] py-1.5 rounded-[6px]">Nº 0427</div>
                </div>
                {[
                  { k: "Estrutura", v: "Íntegra", ok: true },
                  { k: "Pintura", v: "2 pontos", ok: false },
                  { k: "Chassi", v: "Original", ok: true },
                  { k: "Motor", v: "Compatível", ok: true },
                  { k: "Histórico", v: "Sem apontamentos", ok: true },
                ].map((r) => (
                  <div key={r.k} className="flex justify-between items-center py-[9px] border-b border-dashed border-[#e8ecf6] last:border-none text-[13px]">
                    <span className="text-cinza-claro">{r.k}</span>
                    <span className="font-semibold flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${r.ok ? "bg-verde-ok" : "bg-[#f59e0b]"}`} />
                      {r.v}
                    </span>
                  </div>
                ))}
                <div className="mt-[18px] p-3.5 rounded-[10px] flex justify-between items-center" style={{ background: "linear-gradient(135deg,#16a34a 0%,#0a8b40 100%)" }}>
                  <div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-white opacity-85">Resultado</div>
                    <div className="font-heading font-extrabold text-[28px] leading-none text-white tracking-[0.04em]">APROVADO</div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[32px] h-[32px]"><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" /><polyline points="22 4 12 14.1 9 11.1" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ANALISAMOS */}
      <section className="bg-white py-[88px]" id="analisamos">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">O que está incluso</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">O que analisamos no MAXILAUDO</h2>
            <p className="text-cinza-claro text-[17px] max-w-[620px]">
              Cinco frentes técnicas combinadas em uma única perícia. Nada de checklist superficial — cada item é verificado por um perito em campo, com equipamento próprio.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {[
              { num: "01", title: "Análise Estrutural", desc: "Verificamos longarinas, colunas, assoalho, caixa de roda e pontos de solda. Identificamos sinais de batida, reparo mal-feito e fadiga estrutural." },
              { num: "02", title: "Análise de Pintura", desc: "Medição com aparelho de camada de tinta em todas as peças. Detecta repinturas, massa plástica e diferenças de tonalidade — incluso, sem custo extra." },
              { num: "03", title: "Verificação de Identificação", desc: "Confronto do número de chassi, motor e plaquetas de identificação com a documentação. Detecção de adulteração, raspagem ou troca não declarada." },
              { num: "04", title: "Consulta de Histórico", desc: "Pesquisa completa em bases oficiais: leilão, sinistro, furto/roubo, gravame, restrições, débitos e cadeia de proprietários." },
              { num: "05", title: "Entrega do Laudo", desc: "Documento técnico digital com fotos, parecer de cada item, conclusão objetiva (Aprovado / Apontamentos / Reprovado) e responsabilidade do perito." },
            ].map((f) => (
              <RevealSection key={f.num} className="group bg-white border-[1.5px] border-[#e3e8f3] rounded-[14px] p-7 pt-8 relative flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-1 hover:border-vermelho hover:shadow-[0_18px_40px_rgba(10,43,143,0.08)]">
                <div className="absolute -top-3 left-[22px] bg-azul text-white font-heading font-extrabold text-[13px] px-2.5 py-0.5 rounded-full tracking-[0.1em]">{f.num}</div>
                <div className="w-[52px] h-[52px] rounded-[12px] bg-azul-claro flex items-center justify-center text-azul mt-1 transition-all group-hover:bg-vermelho group-hover:text-white">
                  <FlowIcon index={parseInt(f.num) - 1} />
                </div>
                <h3 className="font-heading font-bold text-[22px] leading-[1.1] text-cinza-texto">{f.title}</h3>
                <p className="text-cinza-claro text-[14px] leading-[1.55]">{f.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="bg-azul-claro py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Conclusão objetiva</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">Três resultados possíveis. Zero ambiguidade.</h2>
            <p className="text-cinza-claro text-[17px] max-w-[620px]">
              Toda perícia termina com um carimbo claro. Nada de &ldquo;olha, tem uns probleminhas mas é tranquilo&rdquo;. Você sai sabendo exatamente o que está comprando.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                letter: "A",
                stamp: "green",
                label: "Aprovado",
                title: "Pode fechar negócio com tranquilidade.",
                desc: "O veículo passou em todas as frentes técnicas, não tem apontamentos relevantes no histórico e os números de identificação batem com o documento.",
                items: ["Estrutura íntegra, sem reparos críticos", "Pintura original ou repintura técnica leve", "Chassi, motor e plaquetas conferem", "Sem apontamentos no histórico"],
              },
              {
                letter: "B",
                stamp: "yellow",
                label: "Apontamentos",
                title: "Negocie sabendo onde estão os defeitos.",
                desc: "O veículo tem itens fora do padrão de fábrica, mas que não comprometem a segurança nem inviabilizam a compra. Você usa o laudo como base de negociação.",
                items: ["Repintura em uma ou mais peças", "Reparos cosméticos identificados", "Itens de manutenção em atenção", "Histórico com observação pontual"],
              },
              {
                letter: "C",
                stamp: "red",
                label: "Reprovado",
                title: "Não compre. A gente te explica por quê.",
                desc: "O veículo tem problema estrutural sério, indício de adulteração de identificação ou apontamento crítico no histórico — sinistro de grande porte, leilão, furto ou roubo.",
                items: ["Estrutura comprometida ou reparo perigoso", "Chassi, motor ou plaqueta divergente", "Sinistro de grande monta no histórico", "Indício de leilão, furto ou roubo"],
              },
            ].map((r) => (
              <RevealSection key={r.letter} className="bg-white rounded-[16px] p-9 pb-8 border-[1.5px] border-transparent flex flex-col gap-4 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(10,43,143,0.1)]">
                <div className="absolute top-0 right-0 w-[90px] h-[90px] flex items-start justify-end p-3.5 opacity-[0.06] font-heading font-black text-[120px] leading-[0.8] text-cinza-texto pointer-events-none">{r.letter}</div>
                <div className={`self-start inline-flex items-center gap-2.5 px-[18px] py-2.5 rounded-full font-heading font-extrabold text-[22px] tracking-[0.08em] uppercase text-white ${r.stamp === "green" ? "bg-gradient-to-br from-[#16a34a] to-[#0a8b40] shadow-[0_8px_22px_rgba(22,163,74,0.3)]" : r.stamp === "yellow" ? "bg-gradient-to-br from-[#f59e0b] to-[#d97706] shadow-[0_8px_22px_rgba(245,158,11,0.3)]" : "bg-gradient-to-br from-vermelho to-[#c20810] shadow-[0_8px_22px_rgba(250,12,19,0.3)]"}`}>
                  {r.stamp === "green" && <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="w-[22px] h-[22px]"><polyline points="20 6 9 17 4 12" /></svg>}
                  {r.stamp === "yellow" && <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="w-[22px] h-[22px]"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>}
                  {r.stamp === "red" && <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="w-[22px] h-[22px]"><circle cx="12" cy="12" r="10" /><line x1="4.9" y1="4.9" x2="19.1" y2="19.1" /></svg>}
                  {r.label}
                </div>
                <h3 className="font-heading font-bold text-[26px] text-cinza-texto leading-[1.1]">{r.title}</h3>
                <p className="text-cinza-claro text-[14.5px] leading-[1.6]">{r.desc}</p>
                <ul className="list-none flex flex-col gap-2 mt-auto pt-3.5 border-t border-[#e8ecf6]">
                  {r.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13.5px] text-cinza-texto items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-azul mt-[7px] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE BAND */}
      <section className="bg-azul py-8">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col gap-[18px] items-start justify-between md:flex-row md:items-center">
            <div className="flex flex-col gap-1.5">
              <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-[#ff6b71]">Tudo incluso, sem letra miúda</span>
              <h3 className="font-heading font-extrabold text-[28px] text-white leading-[1.05] text-balance">Uma única perícia. Cinco análises. Um resultado objetivo.</h3>
              <p className="text-[#bcc8f0] text-[14px]">Sem taxa extra de pintura. Sem cobrança por foto. Sem surpresa no fechamento.</p>
            </div>
            <a href={WPP} className="flex-shrink-0 inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline shadow-[0_8px_22px_rgba(250,12,19,0.35)] transition-all hover:bg-vermelho-hover hover:-translate-y-0.5">
              Pedir orçamento agora <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Para quem é</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">Quem mais precisa de um MAXILAUDO</h2>
            <p className="text-cinza-claro text-[17px] max-w-[620px]">
              Três perfis com motivos diferentes — todos terminam com a mesma coisa: decisão técnica documentada antes do dinheiro trocar de mão.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "Compradores",
                desc: "Você está prestes a tirar dinheiro da poupança ou financiar 60 vezes. Antes de pagar, descubra se o carro vale o que estão pedindo — ou se tem armadilha embaixo do capô.",
                items: ["Identificar defeito oculto antes de assinar", "Usar apontamentos para negociar preço", "Detectar leilão, furto ou batida grave"],
              },
              {
                title: "Vendedores",
                desc: "Quer vender mais rápido, com confiança, e por um valor justo? Um laudo cautelar emitido antes do anúncio elimina objeção, blinda contra reclamação futura e vira argumento de venda.",
                items: ["Documento técnico que valida o anúncio", "Resposta pronta para \"tem batida?\"", "Proteção contra reclamação pós-venda"],
              },
              {
                title: "Lojistas e Revendas",
                desc: "Loja que mostra laudo cautelar vende mais — e responde melhor o consumidor exigente. Atendemos volume, com prazo combinado e padrão técnico consistente em toda a frota.",
                items: ["Padrão técnico para toda a frota", "Atendimento com prazo combinado", "Argumento de venda objetivo no showroom"],
              },
            ].map((p) => (
              <RevealSection key={p.title} className="bg-azul-escuro text-white rounded-[16px] p-8 flex flex-col gap-[18px] relative overflow-hidden border border-[rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(7,26,94,0.3)]">
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse at top right,#000,transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at top right,#000,transparent 70%)" }} />
                <div className="relative w-[56px] h-[56px] rounded-[14px] bg-vermelho text-white flex items-center justify-center">
                  <PqIcon title={p.title} />
                </div>
                <h3 className="relative font-heading font-bold text-[26px] leading-[1.1] text-white">{p.title}</h3>
                <p className="relative text-[#bcc8f0] text-[14.5px] leading-[1.6]">{p.desc}</p>
                <ul className="relative list-none flex flex-col gap-2.5 mt-1.5 pt-[18px] border-t border-[rgba(255,255,255,0.1)]">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13.5px] text-[#e1e8ff] items-start">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        eyebrow="Última chamada"
        title="Agende o MAXILAUDO antes de fechar o negócio."
        sub="Dois minutos no WhatsApp economizam dezenas de milhares de reais no carro errado. Fale com um perito agora — atendemos em toda Curitiba e região metropolitana."
        wppHref={WPP}
        wppLabel="WhatsApp: (41) 9144-6917"
      />
    </>
  );
}

function FlowIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="M3 12h2l3-9 4 18 3-12 2 6h4" /></svg>,
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><circle cx="12" cy="12" r="5" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" /></svg>,
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 4v16M4 8h16M4 16h16" /></svg>,
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    <svg key={4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="m9 15 2 2 4-4" /></svg>,
  ];
  return icons[index] ?? null;
}

function PqIcon({ title }: { title: string }) {
  if (title === "Compradores") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]"><path d="M5 13 3 17l9 4 9-4-2-4" /><path d="M3 7l9 4 9-4-9-4-9 4Z" /><path d="m3 12 9 4 9-4" /></svg>;
  if (title === "Vendedores") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]"><path d="M12 2 4 6v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V6l-8-4Z" /><path d="M9 12h6M12 9v6" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]"><path d="M3 9h18l-2 9H5L3 9Z" /><path d="M8 9V5a4 4 0 0 1 8 0v4" /></svg>;
}
