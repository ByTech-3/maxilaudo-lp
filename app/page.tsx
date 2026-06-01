import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WppIcon } from "@/components/WppIcon";
import { RevealSection } from "@/components/RevealSection";
import { CtaFinal } from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Maxilaudo — Perícias e Vistorias Veiculares em Curitiba",
  description:
    "Antes de fechar negócio, descubra a verdade sobre o veículo. Laudo cautelar, laudo técnico, remarcação de chassi e histórico veicular. Credenciada DETRAN-PR.",
};

const WPP_GERAL = `https://wa.me/554191446917?text=${encodeURIComponent("Olá! Quero falar com um especialista da Maxilaudo.")}`;

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-[#fbbf24] fill-current">
    <path d="m12 2 3.1 6.3 7 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l7-1L12 2Z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-azul-escuro text-white overflow-hidden"
        style={{ padding: "48px 0 96px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 30% 50%,#000 0%,transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 30% 50%,#000 0%,transparent 75%)",
          }}
        />
        <div
          className="absolute right-[-120px] top-[-120px] w-[520px] h-[520px] pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(250,12,19,0.18) 0%,transparent 60%)" }}
        />

        <div className="max-w-[1280px] mx-auto px-6">
          <div className="relative grid grid-cols-1 gap-12 items-center lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.18)] text-white px-4 py-2 rounded-full text-[12px] font-semibold tracking-[0.06em] uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_0_4px_rgba(52,211,153,0.2)]" />
                Credenciada DETRAN-PR para Remarcação de Chassi
              </div>

              <h1 className="h-font text-[clamp(34px,5.4vw,64px)] text-white mb-5 text-balance">
                Antes de fechar negócio, você precisa saber a{" "}
                <span className="text-vermelho">verdade</span> sobre o veículo.
              </h1>

              <p className="text-[#bcc8f0] text-[clamp(16px,1.6vw,19px)] max-w-[560px] leading-[1.55] mb-9">
                A Maxilaudo faz a perícia completa que protege seu dinheiro — e te dá segurança de decidir com informação real.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href={WPP_GERAL}
                  className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline shadow-[0_8px_22px_rgba(250,12,19,0.35)] transition-all hover:bg-vermelho-hover hover:-translate-y-0.5"
                >
                  <WppIcon />
                  Falar com especialista no WhatsApp
                  <span>→</span>
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.4)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-white"
                >
                  Conhecer nossos serviços <span>↓</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-6 mt-10 border-t border-[rgba(255,255,255,0.1)] pt-7">
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-[30px] text-white leading-none">+60.000</span>
                  <span className="text-[12px] text-[#9bafe6] mt-1">Laudos emitidos</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-[30px] text-white leading-none">DETRAN-PR</span>
                  <span className="text-[12px] text-[#9bafe6] mt-1">Credenciada p/ Remarcação</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-[30px] text-white leading-none">1h30</span>
                  <span className="text-[12px] text-[#9bafe6] mt-1">Laudo médio em campo</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-[30px] text-white leading-none">Curitiba</span>
                  <span className="text-[12px] text-[#9bafe6] mt-1">Atendimento em toda região</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative aspect-square max-w-[480px] ml-auto w-full" aria-hidden="true">
              <div
                className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.25)] shadow-[0_30px_80px_rgba(0,0,0,0.35),inset_0_0_80px_rgba(10,43,143,0.4)]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%,rgba(10,43,143,0) 60%,rgba(10,43,143,0.65) 70%,rgba(7,26,94,0.95) 100%),conic-gradient(from 0deg,rgba(255,255,255,0.04),rgba(255,255,255,0.10),rgba(255,255,255,0.04))",
                }}
              >
                <div className="absolute inset-[6%] rounded-full border border-[rgba(255,255,255,0.12)]" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(transparent calc(50% - 0.5px),rgba(255,255,255,0.25) calc(50% - 0.5px),rgba(255,255,255,0.25) calc(50% + 0.5px),transparent calc(50% + 0.5px)),linear-gradient(90deg,transparent calc(50% - 0.5px),rgba(255,255,255,0.25) calc(50% - 0.5px),rgba(255,255,255,0.25) calc(50% + 0.5px),transparent calc(50% + 0.5px))",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundImage: "repeating-conic-gradient(from 0deg,rgba(255,255,255,0.35) 0deg 0.4deg,transparent 0.4deg 6deg)",
                    mask: "radial-gradient(circle,transparent 0 46%,#000 47% 49%,transparent 50%)",
                    WebkitMask: "radial-gradient(circle,transparent 0 46%,#000 47% 49%,transparent 50%)",
                  }}
                />
                <div className="scan-line" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="font-heading font-extrabold text-[64px] leading-none text-white">APROVADO</div>
                  <div className="text-[10px] tracking-[0.24em] uppercase text-[rgba(255,255,255,0.6)] mt-1.5">RESULTADO DA VISTORIA</div>
                </div>
              </div>
              <Chip pos="top-[8%] left-[-4%]" type="ok">Chassi íntegro</Chip>
              <Chip pos="top-[38%] right-[-6%]" type="ok">Motor compatível</Chip>
              <Chip pos="bottom-[8%] left-[6%]" type="alert">Pintura: 2 pontos</Chip>
              <Chip pos="bottom-[22%] right-0" type="ok">Sem indício de leilão</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-white py-[88px]" id="servicos">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Nossos Serviços</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">O que a Maxilaudo faz por você</h2>
            <p className="text-cinza-claro text-[17px] max-w-[620px]">
              Quatro frentes técnicas para você comprar, vender ou regularizar um veículo com a tranquilidade de quem decide com base em fato — não em conversa.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {([
              { tag: "★ Produto Principal", title: "MAXILAUDO — Laudo Cautelar", desc: "Perícia completa antes de comprar. O produto que protege seu investimento — análise estrutural, identificação do veículo, funilaria/pintura e documental.", href: "/maxilaudo" },
              { tag: "Pós-compra", title: "Laudo Técnico", desc: "Para disputas judiciais, defeitos ocultos, vícios redibitórios e problemas pós-compra. Documento técnico com valor de prova.", href: "/laudo-tecnico" },
              { tag: "Credenciada DETRAN-PR", title: "Remarcação de Chassi e Motor", desc: "Empresa credenciada pelo DETRAN-PR para realizar este procedimento. Regularize seu veículo com a documentação correta exigida em lei.", href: "/remarcacao" },
              { tag: "15 min", title: "Histórico Veicular", desc: "Consulta rápida do passado do veículo antes de qualquer negócio — leilão, furto, sinistro, gravame, débitos e proprietários.", href: "/historico-veicular" },
            ] as const).map((s, i) => (
              <RevealSection key={i} className="group bg-white border-[1.5px] border-[#e3e8f3] rounded-[14px] p-8 flex flex-col relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,43,143,0.08)] hover:[--card-border:theme(colors.vermelho)]">
                <div className="absolute inset-0 rounded-[14px] border-2 border-transparent group-hover:border-vermelho pointer-events-none transition-all duration-200" />
                <div className="w-[52px] h-[52px] rounded-[12px] bg-azul-claro flex items-center justify-center text-azul mb-[22px] transition-all duration-200 group-hover:bg-vermelho group-hover:text-white">
                  <SvcIcon index={i} />
                </div>
                <span className="inline-block text-[10px] font-bold tracking-[0.18em] text-vermelho uppercase mb-2">{s.tag}</span>
                <h3 className="font-heading font-bold text-[24px] leading-[1.1] text-cinza-texto mb-3">{s.title}</h3>
                <p className="text-cinza-claro text-[14.5px] leading-[1.55] mb-[22px] flex-1">{s.desc}</p>
                <Link href={s.href} className="text-azul font-semibold text-[14px] no-underline inline-flex items-center gap-1.5 transition-all group-hover:text-vermelho group-hover:gap-2.5">
                  Saiba mais <span>→</span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-azul-claro py-[88px]" id="sobre">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Diferenciais</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">Por que escolher a Maxilaudo</h2>
            <p className="text-cinza-claro text-[17px] max-w-[620px]">
              Não vendemos opinião, vendemos laudo. Resultado objetivo, com responsabilidade técnica registrada.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <RevealSection className="bg-white rounded-[14px] p-7 border border-[#d9e1f5] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-azul">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-azul text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <h4 className="font-heading font-bold text-[20px] leading-[1.15] text-cinza-texto">Credenciada DETRAN-PR</h4>
              <p className="text-cinza-claro text-[14px] leading-[1.5]">Empresa oficialmente credenciada pelo DETRAN-PR para o procedimento de Remarcação de Chassi e Motor.</p>
            </RevealSection>
            <RevealSection className="bg-white rounded-[14px] p-7 border border-[#d9e1f5] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-azul">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-azul text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M9 11V7a3 3 0 0 1 6 0v4" /><rect x="5" y="11" width="14" height="10" rx="2" /></svg>
              </div>
              <h4 className="font-heading font-bold text-[20px] leading-[1.15] text-cinza-texto">Resultado claro: Aprovado ou Reprovado</h4>
              <p className="text-cinza-claro text-[14px] leading-[1.5]">Sem floreio. Você sai do laudo com uma decisão técnica que dá pra agir em cima.</p>
            </RevealSection>
            <RevealSection className="bg-white rounded-[14px] p-7 border border-[#d9e1f5] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-azul">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-azul text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M20.5 3.5A11 11 0 0 0 4.6 19l-1.5 5.5 5.7-1.5A11 11 0 1 0 20.5 3.5Z" /></svg>
              </div>
              <h4 className="font-heading font-bold text-[20px] leading-[1.15] text-cinza-texto">Atendimento rápido via WhatsApp</h4>
              <p className="text-cinza-claro text-[14px] leading-[1.5]">Você fala direto com perito. Agendamento, dúvida técnica e entrega do laudo pelo mesmo canal.</p>
            </RevealSection>
            <RevealSection className="bg-white rounded-[14px] p-7 border border-[#d9e1f5] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-azul">
              <div className="font-heading font-extrabold text-[36px] text-vermelho leading-none">+60.000</div>
              <h4 className="font-heading font-bold text-[20px] leading-[1.15] text-cinza-texto">Laudos emitidos em Curitiba</h4>
              <p className="text-cinza-claro text-[14px] leading-[1.5]">Histórico consistente de perícias entregues em toda a região metropolitana.</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-center text-center mx-auto max-w-[680px] mb-8">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">Como funciona</span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">Simples, rápido e sem burocracia</h2>
            <p className="text-cinza-claro text-[17px]">Três passos do contato até o laudo na sua mão.</p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-3 md:gap-8">
            {[
              { n: "1", title: "Entre em contato pelo WhatsApp", desc: "Você manda mensagem, conta qual veículo e o que precisa. Em minutos um perito responde com prazo e valor." },
              { n: "2", title: "Agendamos a vistoria na sua conveniência", desc: "Vamos até o veículo onde ele estiver — concessionária, loja, casa do vendedor. Você não precisa se deslocar." },
              { n: "3", title: "Você recebe o laudo completo", desc: "Documento técnico com fotos, conclusão objetiva e responsabilidade do perito. Entrega digital no mesmo dia." },
            ].map((s) => (
              <RevealSection key={s.n} className="bg-white border-[1.5px] border-[#e3e8f3] rounded-[14px] px-7 pb-8 pt-16 relative z-[1] flex flex-col gap-3.5">
                <div className="absolute -top-[29px] w-[64px] h-[64px] rounded-full bg-vermelho text-white flex items-center justify-center font-heading font-extrabold text-[30px] shadow-[0_8px_22px_rgba(250,12,19,0.3)] border-[6px] border-white">
                  {s.n}
                </div>
                <h4 className="font-heading font-bold text-[22px] text-cinza-texto leading-[1.15]">{s.title}</h4>
                <p className="text-cinza-claro text-[14.5px] leading-[1.55]">{s.desc}</p>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-12 flex justify-center">
            <a href={WPP_GERAL} className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline shadow-[0_8px_22px_rgba(250,12,19,0.35)] transition-all hover:bg-vermelho-hover hover:-translate-y-0.5">
              Começar agora pelo WhatsApp <span>→</span>
            </a>
          </RevealSection>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-azul text-white py-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <div className="flex flex-col items-start">
              {/* selo mobile: acima do label */}
              <Image
                src="/assets/selo-google.png"
                alt="Avaliações Google"
                width={220}
                height={146}
                className="md:hidden mb-4"
                style={{ objectFit: "contain" }}
              />
              <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-[#ff6b71] mb-3.5">Depoimentos reais</span>
              <h2 className="h-font text-[clamp(30px,4vw,46px)] text-white mb-3.5 text-balance">O que nossos clientes dizem</h2>
              <p className="text-[15px] md:text-[16px]" style={{ color: "#fbbf24" }}>Clientes que avaliaram no Google — veja o que dizem sobre a Maxilaudo.</p>
            </div>
            {/* selo desktop: lado direito */}
            <Image
              src="/assets/selo-google.png"
              alt="Avaliações Google"
              width={220}
              height={146}
              className="hidden md:block flex-shrink-0"
              style={{ objectFit: "contain", marginRight: 48 }}
            />
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { initials: "LO", color: "#1e3fbf", name: "Luiz Octavio", role: "Cliente · Laudo Cautelar", quote: "Empresa séria, um ótimo atendimento! Laudo detalhado inclusive com análise de pintura, coisa que a concorrência oferece por custo adicional." },
              { initials: "EL", color: "#fa0c13", name: "Emanuelle Lima", role: "Cliente · Histórico Veicular", quote: "Em menos de 15 minutos tive a resposta com todo o histórico veicular. Graças a eles não comprei um carro que por fora estava lindo, mas tinha vários apontamentos — furto, batida e leilão." },
              { initials: "JB", color: "#1e3fbf", name: "José Barbosa", role: "Cliente · Laudo Técnico", quote: "Enviaram o perito e em questão de 1h30 recebi o laudo completo com fotos. Sou imensamente grato pela eficiência do serviço." },
            ].map((t) => (
              <RevealSection key={t.name} className="bg-azul-escuro border border-[rgba(255,255,255,0.1)] rounded-[14px] p-8 flex flex-col gap-[18px] transition-all duration-200 hover:-translate-y-0.5 hover:border-vermelho">
                <div className="flex gap-0.5" aria-label="5 estrelas">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
                <p className="text-[15px] leading-[1.6] text-[#e1e8ff] flex-1">
                  <span className="text-[42px] leading-[0] text-[rgba(250,12,19,0.7)] mr-1 align-[-12px] font-serif">&ldquo;</span>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-3.5 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-heading font-bold text-[16px] text-white flex-shrink-0" style={{ background: t.color }}>{t.initials}</div>
                  <div>
                    <div className="font-semibold text-[14.5px] text-white">{t.name}</div>
                    <div className="text-[12px] text-[#9bafe6]">{t.role}</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CtaFinal
        eyebrow="Última chamada"
        title="Não arrisque seu dinheiro."
        sub="Agende agora sua perícia — atendemos em Curitiba via WhatsApp ou telefone."
        wppHref={WPP_GERAL}
        wppLabel="WhatsApp: (41) 9144-6917"
      />
    </>
  );
}

function Chip({ pos, type, children }: { pos: string; type: "ok" | "alert"; children: React.ReactNode }) {
  return (
    <div className={`absolute ${pos} flex items-center gap-2 bg-[rgba(10,43,143,0.85)] backdrop-blur-sm border border-[rgba(255,255,255,0.18)] text-white text-[12px] font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-[0_8px_22px_rgba(0,0,0,0.35)]`}>
      <span className={`w-2 h-2 rounded-full ${type === "ok" ? "bg-[#34d399] shadow-[0_0_0_3px_rgba(52,211,153,0.25)]" : "bg-vermelho shadow-[0_0_0_3px_rgba(250,12,19,0.3)]"}`} />
      {children}
    </div>
  );
}

function SvcIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" /></svg>,
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6M9 9h2" /></svg>,
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2C20 17.5 12 22 12 22Z" /><path d="m9 12 2 2 4-4" /></svg>,
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  ];
  return icons[index];
}

