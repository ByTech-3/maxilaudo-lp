import Image from "next/image";

const partners = [
  { file: "01-logo-senna-clara.jpg", alt: "Senna Multimarcas", light: true },
  { file: "02-logo-jk.jpg", alt: "JK Multimarcas", light: false },
  { file: "03-logo-dsm.jpg", alt: "DSM Multimarcas", light: false },
  { file: "04-logo-d87.jpg", alt: "D87 Multimarcas", light: false },
  { file: "05-logo-serie7-clara.jpg", alt: "Série 7 Multimarcas", light: true },
  { file: "06-logo-autopoint-clara.jpg", alt: "Autopoint", light: true },
  { file: "07-logo-c5.jpg", alt: "C5 Multimarcas", light: false },
  { file: "08-logo-autofan-clara.jpg", alt: "Autofan", light: true },
  { file: "09-logo-autoavant-clara.jpg", alt: "Autoavant", light: true },
  { file: "10-logo-lugicar.jpg", alt: "Lugicar", light: false },
  { file: "11-logo-street.jpg", alt: "Street Multimarcas", light: false },
  { file: "12-logo-casaril-clara.jpg", alt: "Casaril Veículos", light: true },
  { file: "13-logo-alle.jpg", alt: "Alle Multimarcas", light: false },
  { file: "14-logo-bruno.jpg", alt: "Bruno Multimarcas", light: false },
  { file: "15-logo-santa.jpg", alt: "Santa Multimarcas", light: false },
  { file: "16-logo-fast.jpg", alt: "Fast Multimarcas", light: false },
  { file: "17-logo-evo.jpg", alt: "Evo Multimarcas", light: false },
  { file: "18-logo-asn.jpg", alt: "ASN Multimarcas", light: false },
  { file: "19-logo-btk-clara.jpg", alt: "BTK Multimarcas", light: true },
  { file: "20-logo-casaril.jpg", alt: "Casaril Veículos", light: false },
  { file: "21-logo-carroagem-clara.jpg", alt: "Carroagem Multimarcas", light: true },
  { file: "22-logo-ville-clara.jpg", alt: "Ville Multimarcas", light: true },
  { file: "23-fazendinha motors-clara.jpg", alt: "Fazendinha Motors", light: true },
  { file: "24-logo-pratasul-clara.jpg", alt: "Pratasul Multimarcas", light: true },
];

function LogoCard({ file, alt, light }: { file: string; alt: string; light: boolean }) {
  return (
    <div
      className={`logo-card relative flex-shrink-0 w-[168px] h-[112px] rounded-[14px] flex items-center justify-center p-5 ${
        light ? "bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)]" : "bg-white border border-[#e3e8f3]"
      }`}
    >
      <div className="relative w-full h-full">
        <Image
          src={encodeURI(`/assets/logo-parceiros/${file}`)}
          alt={alt}
          fill
          className="object-contain"
          sizes="168px"
        />
      </div>
    </div>
  );
}

export function PartnerCarousel() {
  const track = [...partners, ...partners];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-wrap">
        <div className="marquee-track flex items-center gap-5">
          {track.map((p, i) => (
            <LogoCard key={`${p.file}-${i}`} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
