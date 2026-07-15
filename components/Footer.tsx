import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-azul-escuro text-[#cfd9f7] pt-16 pb-7">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Image
              src="/assets/maxilaudo-logo.png"
              alt="Maxilaudo"
              height={54}
              width={160}
              className="w-auto mb-[18px]"
              style={{ mixBlendMode: "screen" }}
            />
            <p className="text-[13.5px] leading-[1.55] text-[#9bafe6] max-w-[280px]">
              Perícias e vistorias veiculares em Curitiba. Credenciada DETRAN-PR para Remarcação de Chassi e Motor. Mais de 60.000 laudos emitidos.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h5 className="font-heading font-bold text-white text-[18px] uppercase tracking-[0.1em] mb-[18px]">
              Navegação
            </h5>
            <Link href="/" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">Início</Link>
            <Link href="/#sobre" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">A Maxilaudo</Link>
            <Link href="/laudo-cautelar" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">MAXILAUDO Cautelar</Link>
            <Link href="/laudo-tecnico" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">Laudo Técnico</Link>
            <Link href="/remarcacao" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">Remarcação</Link>
            <Link href="/historico-veicular" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">Histórico Veicular</Link>
            <Link href="/lojistas" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">Parceria para Lojistas</Link>
            <Link href="/sobre" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">Sobre a Maxilaudo</Link>
          </div>

          {/* Contato */}
          <div>
            <h5 className="font-heading font-bold text-white text-[18px] uppercase tracking-[0.1em] mb-[18px]">
              Contato
            </h5>
            <a href="https://wa.me/554191446917" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">WhatsApp (41) 9144-6917</a>
            <a href="tel:+554130239104" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">Fixo (41) 3023-9104</a>
            <a href="mailto:contato@maxilaudo.com.br" className="block text-[#9bafe6] no-underline text-sm py-1.5 hover:text-white transition-colors">contato@maxilaudo.com.br</a>
            <div className="mt-3.5 text-[13.5px] leading-[1.6] text-[#9bafe6]">
              <strong className="text-white font-semibold block mb-0.5 text-[13px] tracking-[0.06em] uppercase">Horário</strong>
              Seg–Sex 8h30–18h<br />Sáb 9h–17h
            </div>
          </div>

          {/* Endereços */}
          <div>
            <h5 className="font-heading font-bold text-white text-[18px] uppercase tracking-[0.1em] mb-[18px]">
              Endereços
            </h5>
            <div className="text-[13.5px] leading-[1.6] text-[#9bafe6] mb-3.5">
              <strong className="text-white font-semibold block mb-0.5 text-[13px] tracking-[0.06em] uppercase">Santa Felicidade</strong>
              R. Via Veneto, 1440<br />Curitiba, PR
            </div>
            <div className="text-[13.5px] leading-[1.6] text-[#9bafe6]">
              <strong className="text-white font-semibold block mb-0.5 text-[13px] tracking-[0.06em] uppercase">Portão</strong>
              R. Dr. João Tobias Pinto Rebelo, 3589<br />Curitiba, PR
            </div>
          </div>
        </div>

        <hr className="border-none border-t border-[rgba(255,255,255,0.08)] my-10" />

        <div className="flex flex-col gap-3 items-start justify-between text-[12.5px] text-[#7a8cbf] sm:flex-row sm:items-center">
          <div>© 2025 Maxilaudo Perícias e Vistorias Veiculares. Todos os direitos reservados.</div>
          <div>CNPJ 20.250.264.0001/00 · Credenciada DETRAN-PR para Remarcação de Chassi e Motor</div>
        </div>
      </div>
    </footer>
  );
}
