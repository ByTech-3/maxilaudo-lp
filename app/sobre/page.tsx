import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WppIcon } from "@/components/WppIcon";
import { RevealSection } from "@/components/RevealSection";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sobre a Maxilaudo — 11 anos em perícias e vistorias veiculares em Curitiba",
  description:
    "Conheça a Maxilaudo: 11 anos de mercado, duas unidades em Curitiba, equipe especializada e credenciamento DETRAN-PR para remarcações. Mais de 60.000 laudos emitidos.",
};

const WPP_PARTICULAR = `https://wa.me/554191446917?text=${encodeURIComponent(
  "Olá! Vim pelo site e quero saber mais sobre a Maxilaudo."
)}`;
const WPP_PARCEIRO = `https://wa.me/554191446917?text=${encodeURIComponent(
  "Olá! Sou parceiro/lojista e quero falar com a Maxilaudo."
)}`;

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre a Maxilaudo",
  url: "https://www.maxilaudo.com/sobre",
  about: {
    "@id": "https://www.maxilaudo.com/#business",
  },
  mainEntity: {
    "@id": "https://www.maxilaudo.com/#business",
  },
};

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const team = [
  { init: "CB", name: "Cauê Zadra Bertoli", role: "Administrador e Proprietário", exp: "20+ anos empreendendo" },
  { init: "KL", name: "Kaio Murilo O. Lopes", role: "Perito Cautelar", exp: "13 anos de experiência" },
  { init: "ON", name: "Osvaldo Vitória Neto", role: "Perito Cautelar", exp: "16 anos de experiência" },
  { init: "GA", name: "Gustavo B. A. de Araújo", role: "Perito Cautelar", exp: "9 anos de experiência" },
  { init: "DS", name: "Dennis M. Santiago", role: "Gerente", exp: "Comercial e atendimento" },
  { init: "LS", name: "Lucas Schmitz", role: "Digitador / Logística", exp: "Sistemas e agendamento" },
  { init: "LG", name: "Larissa M. Gonetecki", role: "Financeiro", exp: "Gestão financeira" },
  { init: "LD", name: "Luiz F. Stella Drozdz", role: "Marketing / TI", exp: "Tecnologia e projetos" },
];

const equipamentos = [
  "Gravação eletroquímica",
  "Micropercussão / puncionamento",
  "Micrômetro",
  "Câmera endoscópica",
  "Iluminação técnica",
  "Scanner de chassi e ferramentas de inspeção",
];

const diferenciais = [
  "Atendimento rápido",
  "Estrutura própria",
  "Equipe experiente",
  "Registro fotográfico padronizado",
  "Suporte por WhatsApp",
  "Boa localização",
  "Documentação técnica",
  "Experiência com lojistas e despachantes",
  "Processo organizado",
];

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* 1. HERO INSTITUCIONAL */}
      <section className="relative bg-azul-escuro text-white overflow-hidden" style={{ padding: "96px 0 96px" }}>
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
        <div
          className="absolute left-[-120px] bottom-[-160px] w-[420px] h-[420px] pointer-events-none rotate-12"
          style={{ background: "linear-gradient(135deg,rgba(250,12,19,0.18),transparent 70%)" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <Breadcrumb current="Sobre a Maxilaudo" />

          <RevealSection className="max-w-[760px]">
            <div className="inline-flex items-center gap-2.5 bg-vermelho text-white px-[14px] py-[7px] rounded-[6px] font-heading font-extrabold tracking-[0.12em] text-[13px] uppercase mb-[22px]">
              A Empresa
            </div>
            <h1 className="h-font text-[clamp(34px,5.2vw,60px)] text-white mb-[22px] text-balance">
              11 anos protegendo quem compra, vende e regulariza veículos.
            </h1>
            <p className="text-[#bcc8f0] text-[clamp(16px,1.6vw,19px)] leading-[1.55]">
              Especialistas em laudo cautelar, identificação veicular e remarcações autorizadas de chassi, motor e vidros. Curitiba e Região Metropolitana.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 2. QUEM SOMOS */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[760px]">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">
              A empresa
            </span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">
              Quem somos
            </h2>
            <p className="text-cinza-claro text-[17px] leading-[1.6]">
              A Maxilaudo é especializada em laudo cautelar, identificação veicular, perícias técnicas e remarcações de chassi, motor e vidros. Com 11 anos de mercado, passou por reformulação administrativa e operacional a partir de 2021, sob gestão de Cauê Zadra Bertoli, fortalecendo equipe, estrutura e processos. Atende pessoas físicas, lojistas, garagens, despachantes, empresas e parceiros comerciais em Curitiba e Região Metropolitana.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { num: "11", label: "anos de mercado" },
              { num: "+30", label: "lojistas parceiros" },
              { num: "+60.000", label: "laudos emitidos" },
            ].map((c) => (
              <RevealSection
                key={c.label}
                className="bg-azul-claro border-[1.5px] border-[rgba(10,43,143,0.1)] rounded-[16px] p-8 text-center"
              >
                <div className="font-heading font-extrabold text-[clamp(34px,4vw,46px)] leading-none text-azul mb-2">
                  {c.num}
                </div>
                <div className="text-cinza-claro text-[14.5px] font-medium">{c.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NOSSOS SERVIÇOS EM AÇÃO */}
      <section className="bg-azul-claro py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[760px]">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">
              No dia a dia
            </span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">
              Precisão técnica em cada laudo
            </h2>
          </RevealSection>

          {/* Bloco Laudo Cautelar */}
          <RevealSection className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/laudo-cautelar/laudo-analisandoestrutura-paisagem.jpg"
                  alt="Perito analisando estrutura do veículo durante o laudo cautelar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-video rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/laudo-cautelar/laudo-analisandopintura-paisagem.jpg"
                  alt="Perito analisando pintura do veículo durante o laudo cautelar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/laudo-cautelar/laudo-peritocommicrometro-quadrado.jpg"
                  alt="Perito utilizando micrômetro para medir camada de tinta"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/laudo-cautelar/laudo-analisandodetalhe-quadrado.jpg"
                  alt="Perito analisando detalhe técnico do veículo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <p className="text-cinza-claro text-[14px] mt-3.5">
              <strong className="text-cinza-texto font-semibold">Laudo Cautelar</strong> — análise estrutural, pintura, identificação e detalhes
            </p>
          </RevealSection>

          {/* Bloco Remarcação */}
          <RevealSection>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="relative aspect-video sm:col-span-1 rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/remarcacao/remarcacao-peritogravando-paisagem.jpg"
                  alt="Perito realizando gravação de chassi na remarcação autorizada"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-video sm:col-span-1 rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/remarcacao/remarcacao-peritogravando2-paisagem.jpg"
                  alt="Perito realizando gravação de motor na remarcação autorizada"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-square sm:col-span-1 rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/remarcacao/remarcacao-realizando-quadrado.jpg"
                  alt="Remarcação sendo realizada em oficina própria"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <p className="text-cinza-claro text-[14px] mt-3.5">
              <strong className="text-cinza-texto font-semibold">Remarcação autorizada</strong> — gravação de chassi, motor e vidros
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 4. ESTRUTURA FÍSICA */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[760px]">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">
              Onde atuamos
            </span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">
              Estrutura física
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-10">
            <RevealSection className="rounded-[16px] overflow-hidden border-[1.5px] border-[#e3e8f3]">
              <div className="relative aspect-video">
                <Image
                  src="/assets/unidades/fachada-matriz-santafelicidade-paisagem.jpg"
                  alt="Fachada da unidade Matriz da Maxilaudo em Santa Felicidade"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-[12px] font-bold tracking-[0.18em] uppercase text-vermelho mb-2">
                  Matriz
                </span>
                <p className="text-cinza-texto text-[15.5px] font-medium leading-[1.5]">
                  Santa Felicidade — R. Via Veneto, 1440 · CEP 81020-490
                </p>
              </div>
            </RevealSection>

            <RevealSection className="rounded-[16px] overflow-hidden border-[1.5px] border-[#e3e8f3]">
              <div className="relative aspect-video">
                <Image
                  src="/assets/unidades/fachada-filial-portaopaisagem.jpg"
                  alt="Fachada da unidade Filial da Maxilaudo no Portão"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-[12px] font-bold tracking-[0.18em] uppercase text-vermelho mb-2">
                  Filial
                </span>
                <p className="text-cinza-texto text-[15.5px] font-medium leading-[1.5]">
                  Portão — R. Dr. João Tobias Pinto Rebelo, 207 · CEP 81070-070
                </p>
              </div>
            </RevealSection>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { num: "4", label: "veículos atendidos simultaneamente" },
              { num: "1h–1h30", label: "duração média do laudo cautelar" },
              { num: "≈1h", label: "duração média da remarcação" },
            ].map((m) => (
              <RevealSection key={m.label} className="bg-azul-claro rounded-[16px] p-7 text-center">
                <div className="font-heading font-extrabold text-[clamp(26px,3vw,34px)] leading-none text-azul mb-2">
                  {m.num}
                </div>
                <div className="text-cinza-claro text-[13.5px] font-medium">{m.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EQUIPE */}
      <section className="bg-azul-claro py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[760px]">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">
              Quem faz acontecer
            </span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">
              Nossa equipe
            </h2>
          </RevealSection>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((p) => (
              <RevealSection
                key={p.init}
                className="bg-white border-[1.5px] border-[#e3e8f3] rounded-[14px] p-6 flex flex-col items-center text-center gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:border-vermelho hover:shadow-[0_18px_40px_rgba(10,43,143,0.08)]"
              >
                <div className="w-[64px] h-[64px] rounded-full bg-azul text-white flex items-center justify-center font-heading font-extrabold text-[20px] tracking-[0.04em]">
                  {p.init}
                </div>
                <h3 className="font-heading font-bold text-[17px] leading-[1.15] text-cinza-texto">
                  {p.name}
                </h3>
                <span className="text-vermelho text-[12.5px] font-semibold uppercase tracking-[0.04em]">
                  {p.role}
                </span>
                <p className="text-cinza-claro text-[13px]">{p.exp}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EQUIPAMENTOS E TECNOLOGIA */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[760px]">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">
              Precisão técnica
            </span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">
              Equipamentos e tecnologia
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
            <RevealSection className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {equipamentos.map((e) => (
                <div
                  key={e}
                  className="flex items-center gap-3 bg-azul-claro border-[1.5px] border-[rgba(10,43,143,0.1)] rounded-[12px] px-5 py-4"
                >
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-azul text-white flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
                    </svg>
                  </div>
                  <span className="text-cinza-texto text-[14.5px] font-medium leading-[1.3]">{e}</span>
                </div>
              ))}
            </RevealSection>

            <RevealSection className="bg-azul text-white rounded-[16px] p-8 flex flex-col gap-5 relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
                  backgroundSize: "32px 32px",
                  maskImage: "radial-gradient(ellipse at top right,#000,transparent 70%)",
                  WebkitMaskImage: "radial-gradient(ellipse at top right,#000,transparent 70%)",
                }}
              />
              <h3 className="relative font-heading font-bold text-[22px] text-white">
                Sistemas de consulta
              </h3>
              <div className="relative flex flex-col gap-4">
                <div className="flex gap-3 items-start">
                  {CHECK}
                  <p className="text-[#dbe3ff] text-[14.5px] leading-[1.55]">
                    Histórico veicular nacional com mais de 40 fornecedores de dados
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  {CHECK}
                  <p className="text-[#dbe3ff] text-[14.5px] leading-[1.55]">
                    Sistema integrado a seguradoras para aceitação e indenizações ocultas
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>

          <RevealSection className="mt-6 text-cinza-claro text-[14px] border-t border-[#e3e8f3] pt-6">
            Laudos emitidos em PDF, com assinatura, fotos e apontamentos técnicos.
          </RevealSection>
        </div>
      </section>

      {/* 7. CAPACIDADE OPERACIONAL */}
      <section className="bg-azul py-[88px] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center,#000 0%,transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center,#000 0%,transparent 75%)",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[760px]">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-[#ff6b71] mb-3.5">
              Volume e agilidade
            </span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-white mb-3.5 text-balance">
              Capacidade operacional
            </h2>
          </RevealSection>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {[
              { num: "30+", label: "atendimentos por dia", accent: true },
              { num: "25+", label: "laudos cautelares por dia", accent: false },
              { num: "5+", label: "remarcações por dia", accent: true },
              { num: "20+", label: "fotos por atendimento", accent: false },
              { num: "30 min", label: "para emissão do laudo", accent: true },
              { num: "4", label: "veículos simultâneos", accent: false },
            ].map((s) => (
              <RevealSection key={s.label} className="flex flex-col gap-1.5">
                <div
                  className={`font-heading font-extrabold text-[clamp(32px,4.5vw,48px)] leading-none ${
                    s.accent ? "text-vermelho" : "text-white"
                  }`}
                >
                  {s.num}
                </div>
                <div className="text-[#bcc8f0] text-[13.5px] font-medium">{s.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CREDENCIAMENTO E RESPONSABILIDADE TÉCNICA */}
      <section className="bg-white py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="max-w-[760px]">
            <h2 className="h-font text-[clamp(28px,3.6vw,40px)] text-cinza-texto mb-5 text-balance">
              Credenciamento e responsabilidade técnica
            </h2>
            <p className="text-cinza-claro text-[16.5px] leading-[1.65] mb-7">
              Credenciada junto ao DETRAN-PR para remarcações de chassi e motor, com autorizações ativas nas duas unidades. O laudo cautelar é um serviço privado e consultivo — sua validade está vinculada à responsabilidade técnica e civil da empresa emissora. CNPJ ativo, certificados e documentação de apoio para cada laudo emitido.
            </p>
            <div className="inline-flex items-center gap-3 bg-azul-claro border-[1.5px] border-[rgba(10,43,143,0.15)] rounded-[12px] px-6 py-4">
              <div className="w-[38px] h-[38px] rounded-full bg-vermelho text-white flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
                  <path d="M12 2 4 6v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V6l-8-4Z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-[18px] text-azul">
                Laudos assegurados pela Porto Seguro.
              </span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 9. DIFERENCIAIS */}
      <section className="bg-azul-claro py-[88px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <RevealSection className="flex flex-col items-start mb-12 max-w-[760px]">
            <span className="inline-block text-[12px] font-bold tracking-[0.22em] uppercase text-vermelho mb-3.5">
              Por que a Maxilaudo
            </span>
            <h2 className="h-font text-[clamp(30px,4vw,46px)] text-cinza-texto mb-3.5 text-balance">
              Diferenciais
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((d) => (
              <RevealSection
                key={d}
                className="flex items-center gap-3 bg-white border-[1.5px] border-[#e3e8f3] rounded-[12px] px-5 py-4"
              >
                <span className="w-[26px] h-[26px] rounded-full bg-verde-ok text-white flex items-center justify-center flex-shrink-0">
                  {CHECK}
                </span>
                <span className="text-cinza-texto text-[14.5px] font-medium">{d}</span>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
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
          <h2 className="h-font text-[clamp(34px,5vw,58px)] text-white mb-3.5 text-balance">
            Fale com a Maxilaudo
          </h2>
          <p className="text-[18px] text-[rgba(255,255,255,0.92)] mb-9 max-w-[640px] mx-auto">
            À disposição para análise, visita técnica e atendimento em Curitiba e Região.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mb-8">
            <a
              href={WPP_PARTICULAR}
              className="inline-flex items-center gap-2.5 bg-white text-vermelho px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-azul hover:text-white hover:-translate-y-0.5"
            >
              <WppIcon />
              Atendimento a particulares: (41) 9144-6917
            </a>
            <a
              href={WPP_PARCEIRO}
              className="inline-flex items-center gap-2.5 bg-transparent text-white border border-[rgba(255,255,255,0.6)] px-[26px] py-4 rounded-[10px] font-semibold text-[15px] no-underline transition-all hover:bg-white hover:text-vermelho hover:-translate-y-0.5"
            >
              <WppIcon />
              Atendimento a parceiros: (41) 9144-6917
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-[14.5px] text-[rgba(255,255,255,0.85)]">
            <Link href="/" className="text-white no-underline hover:underline underline-offset-2">
              www.maxilaudo.com
            </Link>
            <a href="mailto:adm@maxilaudo.com" className="text-white no-underline hover:underline underline-offset-2">
              adm@maxilaudo.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
