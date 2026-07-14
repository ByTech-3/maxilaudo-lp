import type { Metadata } from "next";
import { WppIcon } from "@/components/WppIcon";
import { RevealSection } from "@/components/RevealSection";
import { PartnerCarousel } from "@/components/PartnerCarousel";

export const metadata: Metadata = {
  title: "Parceria para Lojistas — Laudo Cautelar com Volume Mensal | Maxilaudo Curitiba",
  description:
    "Seja parceiro Maxilaudo: laudo cautelar completo para lojistas de Curitiba com volume mensal, preço fechado e deslocamento incluso. Proteja seu estoque e venda com mais confiança. +30 lojas parceiras.",
};

const WPP = "https://wa.me/5541997426286?text=Olá!+Sou+lojista+e+quero+conhecer+a+parceria+da+Maxilaudo.";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Parceria para Lojistas — Laudo Cautelar com Volume Mensal",
  description:
    "Programa de parceria para lojistas e revendas: laudo cautelar completo com volume mensal, preço fechado e deslocamento incluso em Curitiba.",
  url: "https://www.maxilaudo.com/lojistas",
  provider: {
    "@type": "AutoRepair",
    "@id": "https://www.maxilaudo.com/#business",
    name: "Maxilaudo Perícias e Vistorias",
  },
  areaServed: { "@type": "City", name: "Curitiba" },
  serviceType: "Parceria B2B — Laudo Cautelar",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Lojistas e revendas de veículos",
  },
};

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const dores = [
  {
    title: "Comprou gato por lebre",
    desc: "Chassi remarcado, sinistro de leilão, motor trocado. Você descobre tarde demais, com o carro já pago.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Vício oculto volta pra você",
    desc: "O comprador aciona a loja meses depois. Sem laudo documentando o estado do veículo, a conta é sua.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
      </svg>
    ),
  },
  {
    title: "Carro parado é dinheiro parado",
    desc: "Comprador inseguro trava a venda. Um laudo na mão acelera a decisão e gira seu estoque.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const beneficios = [
  {
    title: "Proteja a compra",
    desc: "Saiba exatamente o que está entrando no seu estoque.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]">
        <path d="M12 2 4 6v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V6l-8-4Z" />
      </svg>
    ),
  },
  {
    title: "Venda mais rápido",
    desc: "Carro com laudo passa confiança e fecha negócio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Blinde-se juridicamente",
    desc: "Documento técnico com responsabilidade registrada.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]">
        <path d="M3 9h18l-2 9H5L3 9Z" />
        <path d="M8 9V5a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: "Custo previsível",
    desc: "Fechamento mensal, sem surpresa no seu caixa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18M8 2v4M16 2v4" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
];

const inclusos = [
  "Análise estrutural",
  "Funilaria e pintura",
  "Identificação veicular (chassi, motor, vidros)",
  "Histórico nacional (40+ fornecedores)",
  "Consulta integrada a seguradoras",
  "Deslocamento incluso em Curitiba",
  "Laudo em PDF com fotos e assinatura",
];

const passos = [
  { num: "01", title: "Solicite pelo WhatsApp", desc: "Peça os laudos ao longo do mês, quando precisar. A equipe agenda e executa." },
  { num: "02", title: "Fechamento no dia 1º", desc: "Todas as solicitações do mês consolidadas em um só lugar." },
  { num: "03", title: "Pagamento até o dia 5", desc: "Simples, previsível, sem cobrança avulsa a cada laudo." },
];

const planos = [
  {
    nome: "Giro Leve",
    desc: "Para lojas com demanda inicial",
    vol: "até 20 laudos/mês",
    destaque: false,
  },
  {
    nome: "Giro Médio",
    desc: "O equilíbrio ideal para a maioria das revendas",
    vol: "até 50 laudos/mês",
    destaque: true,
  },
  {
    nome: "Giro Alto",
    desc: "Para operações de alto volume",
    vol: "acima de 50 laudos/mês · melhor custo por laudo",
    destaque: false,
  },
];

const capacidade = [
  { num: "25+", label: "laudos por dia", accent: true },
  { num: "30 min", label: "para emissão do laudo", accent: false },
  { num: "2", label: "unidades em Curitiba", accent: true },
  { num: "4", label: "veículos simultâneos", accent: false },
  { num: "20+", label: "fotos por laudo", accent: true },
];

export default function LojistasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-azul text-white overflow-hidden" style={{ padding: "96px 0 88px" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 70% 40%,#000 0%,transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 70% 40%,#000 0%,transparent 75%)",
          }}
        />
        <div
          className="absolute right-[-180px] top-[-180px] w-[560px] h-[560px] pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(250,12,19,0.28) 0%,transparent 60%)" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <RevealSection className="max-w-[760px]">
            <div className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[14px] py-[7px] rounded-[6px] font-heading font-extrabold tracking-[0.12em] text-[13px] uppercase mb-[22px]">
              Parceria para Lojistas e Revendas
            </div>
            <h1 className="h-font text-[clamp(32px,5vw,56px)] text-white mb-[22px] text-balance">
              Cada carro que entra no seu estoque sem laudo é um risco que você assume sozinho.
            </h1>
            <p className="text-[#bcc8f0] text-[clamp(16px,1.6vw,19px)] leading-[1.55] mb-9 max-w-[640px]">
              Laudo cautelar completo para lojistas de Curitiba — com volume mensal, preço fechado e deslocamento incluso. Proteja seu capital de giro e venda com mais confiança.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-9">
              <a href={WPP} className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline shadow-[0_8px_22px_rgba(250,12,19,0.35)] transition-all hover:bg-vermelho-hover hover:-translate-y-0.5">
                <WppIcon /> Quero ser parceiro <span>→</span>
              </a>
              <a href="#como-funciona" className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.4)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-white">
                Ver como funciona <span>↓</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2 items-center text-[#cfd9f7] text-[13.5px] font-medium border-t border-[rgba(255,255,255,0.1)] pt-6">
              <span>+30 lojas parceiras</span>
              <span className="text-[rgba(255,255,255,0.3)]">·</span>
              <span>+60.000 laudos</span>
              <span className="text-[rgba(255,255,255,0.3)]">·</span>
              <span>Credenciada DETRAN-PR</span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 2. A DOR */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[720px]">
            <h2 className="h-font text-[clamp(28px,3.8vw,44px)] text-cinza-texto mb-3.5 text-balance">
              Um carro problemático no estoque custa muito mais que um laudo.
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {dores.map((d) => (
              <RevealSection
                key={d.title}
                className="bg-white border-[1.5px] border-[#e3e8f3] rounded-[16px] p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-vermelho hover:shadow-[0_18px_40px_rgba(10,43,143,0.08)]"
              >
                <div className="w-[52px] h-[52px] rounded-[12px] bg-[#fdeceb] flex items-center justify-center text-vermelho">
                  {d.icon}
                </div>
                <h3 className="font-heading font-bold text-[21px] leading-[1.15] text-cinza-texto">{d.title}</h3>
                <p className="text-cinza-claro text-[14.5px] leading-[1.55]">{d.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A VIRADA */}
      <section className="bg-azul-claro py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-6 max-w-[720px]">
            <h2 className="h-font text-[clamp(28px,3.8vw,44px)] text-cinza-texto mb-3.5 text-balance">
              O laudo cautelar é a ferramenta que todo lojista sério usa.
            </h2>
            <p className="text-cinza-claro text-[17px] leading-[1.6]">
              Não é gasto — é o filtro que protege sua compra, acelera sua venda e te blinda juridicamente. E como parceiro Maxilaudo, você tem tudo isso com previsibilidade de custo e prioridade no atendimento.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-10">
            {beneficios.map((b) => (
              <RevealSection
                key={b.title}
                className="bg-white rounded-[14px] p-6 flex items-start gap-4 border-[1.5px] border-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,43,143,0.08)]"
              >
                <div className="w-[48px] h-[48px] rounded-[12px] bg-azul text-white flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[18.5px] leading-[1.15] text-cinza-texto mb-1.5">{b.title}</h3>
                  <p className="text-cinza-claro text-[14px] leading-[1.5]">{b.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. O QUE ESTÁ INCLUSO */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[720px]">
            <h2 className="h-font text-[clamp(28px,3.8vw,44px)] text-cinza-texto mb-3.5 text-balance">
              Laudo cautelar completo — tudo incluso, sem custo escondido
            </h2>
          </RevealSection>

          <RevealSection className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 mb-8">
            {inclusos.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-azul-claro border-[1.5px] border-[rgba(10,43,143,0.1)] rounded-[12px] px-5 py-4">
                <span className="text-verde-ok">{CHECK}</span>
                <span className="text-cinza-texto text-[14.5px] font-medium">{item}</span>
              </div>
            ))}
          </RevealSection>

          <RevealSection className="inline-flex items-center gap-3 bg-azul text-white rounded-[12px] px-6 py-4">
            <div className="w-[38px] h-[38px] rounded-full bg-vermelho text-white flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
                <path d="M12 2 4 6v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V6l-8-4Z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-[18px] text-white">Laudos assegurados pela Porto Seguro.</span>
          </RevealSection>
        </div>
      </section>

      {/* 5. COMO FUNCIONA A PARCERIA */}
      <section className="bg-azul-claro py-[88px]" id="como-funciona">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[720px]">
            <h2 className="h-font text-[clamp(28px,3.8vw,44px)] text-cinza-texto mb-3.5 text-balance">
              Uma parceria feita para a rotina de quem vende carro
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
            {passos.map((p) => (
              <RevealSection
                key={p.num}
                className="group bg-white border-[1.5px] border-[#e3e8f3] rounded-[14px] p-7 pt-8 relative flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-azul hover:shadow-[0_18px_40px_rgba(10,43,143,0.08)]"
              >
                <div className="absolute -top-3 left-[22px] bg-azul text-white font-heading font-extrabold text-[13px] px-2.5 py-0.5 rounded-full tracking-[0.1em]">
                  {p.num}
                </div>
                <h3 className="font-heading font-bold text-[20px] leading-[1.15] text-cinza-texto mt-1">{p.title}</h3>
                <p className="text-cinza-claro text-[14px] leading-[1.55]">{p.desc}</p>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="bg-azul text-white rounded-[14px] px-7 py-5 text-center font-heading font-bold text-[16.5px] leading-[1.4]">
            Modelo de fechamento mensal — sem multa, sem fidelidade forçada, sem burocracia.
          </RevealSection>
        </div>
      </section>

      {/* 6. MODALIDADES DE PARCERIA */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-3 max-w-[720px]">
            <h2 className="h-font text-[clamp(28px,3.8vw,44px)] text-cinza-texto mb-3.5 text-balance">
              Planos que se ajustam ao volume da sua loja
            </h2>
            <p className="text-cinza-claro text-[16px] leading-[1.6] max-w-[640px]">
              O serviço é exatamente o mesmo em todos os planos — mesma qualidade, mesma entrega. O que muda é apenas o custo por volume.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-10">
            {planos.map((p) => (
              <RevealSection
                key={p.nome}
                className={`relative rounded-[16px] p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 ${
                  p.destaque
                    ? "bg-white border-[2px] border-vermelho shadow-[0_22px_50px_rgba(250,12,19,0.14)] md:scale-105"
                    : "bg-white border-[1.5px] border-[#e3e8f3] hover:shadow-[0_18px_40px_rgba(10,43,143,0.08)]"
                }`}
              >
                {p.destaque && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-vermelho text-white font-heading font-extrabold text-[12px] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                    Mais Escolhido
                  </span>
                )}
                <h3 className="font-heading font-bold text-[26px] leading-[1.1] text-cinza-texto mt-2">{p.nome}</h3>
                <p className="text-cinza-claro text-[14.5px] leading-[1.5]">{p.desc}</p>
                <div className="text-azul font-heading font-bold text-[15px] uppercase tracking-[0.04em] border-t border-[#e8ecf6] pt-4 mt-auto">
                  {p.vol}
                </div>
                <a
                  href={WPP}
                  className={`inline-flex items-center justify-center gap-2.5 px-[22px] py-3.5 rounded-[10px] font-semibold text-[14.5px] no-underline transition-all ${
                    p.destaque
                      ? "bg-vermelho text-white shadow-[0_8px_22px_rgba(250,12,19,0.35)] hover:bg-vermelho-hover"
                      : "bg-azul-claro text-azul hover:bg-azul hover:text-white"
                  }`}
                >
                  <WppIcon />
                  Consultar valores no WhatsApp
                </a>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center text-cinza-claro text-[14px] mt-9">
            Quanto maior o volume mensal, menor o custo por laudo.
          </RevealSection>
        </div>
      </section>

      {/* 7. CARROSSEL DE PARCEIROS */}
      <section className="bg-azul py-[88px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[720px]">
            <h2 className="h-font text-[clamp(28px,3.8vw,44px)] text-white mb-3.5 text-balance">
              Lojas que já giram o estoque com a Maxilaudo
            </h2>
            <p className="text-[#bcc8f0] text-[16px]">
              Mais de 30 revendas de Curitiba e região já são parceiras.
            </p>
          </RevealSection>
        </div>

        <RevealSection>
          <PartnerCarousel />
        </RevealSection>
      </section>

      {/* 8. CAPACIDADE OPERACIONAL */}
      <section className="bg-azul py-[72px] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-10 max-w-[720px]">
            <h2 className="h-font text-[clamp(26px,3.4vw,38px)] text-white mb-2 text-balance">
              Estrutura para atender a demanda da sua loja
            </h2>
          </RevealSection>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-5">
            {capacidade.map((c) => (
              <RevealSection key={c.label} className="flex flex-col gap-1.5">
                <div className={`font-heading font-extrabold text-[clamp(28px,3.6vw,40px)] leading-none ${c.accent ? "text-vermelho" : "text-white"}`}>
                  {c.num}
                </div>
                <div className="text-[#bcc8f0] text-[13px] font-medium">{c.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
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
          <h2 className="h-font text-[clamp(32px,5vw,56px)] text-white mb-3.5 text-balance">
            Pare de arriscar seu estoque no escuro.
          </h2>
          <p className="text-[18px] text-[rgba(255,255,255,0.92)] mb-9 max-w-[600px] mx-auto">
            Fale com a Maxilaudo, conheça os valores e comece a proteger cada carro que entra na sua loja.
          </p>
          <a
            href={WPP}
            className="inline-flex items-center gap-2.5 bg-white text-vermelho px-[30px] py-[18px] rounded-[10px] font-semibold text-[16px] no-underline transition-all hover:bg-azul hover:text-white hover:-translate-y-0.5 mb-8"
          >
            <WppIcon />
            Falar com atendimento a parceiros
          </a>
          <div className="flex flex-wrap gap-x-3 gap-y-2 justify-center text-[rgba(255,255,255,0.85)] text-[13.5px] font-medium">
            <span>+30 lojas parceiras</span>
            <span className="text-[rgba(255,255,255,0.4)]">·</span>
            <span>Credenciada DETRAN-PR</span>
            <span className="text-[rgba(255,255,255,0.4)]">·</span>
            <span>Laudos assegurados pela Porto Seguro</span>
          </div>
        </div>
      </section>
    </>
  );
}
