import type { Metadata } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WppFloat } from "@/components/WppFloat";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maxilaudo — Perícias e Vistorias Veiculares em Curitiba",
  description:
    "Laudo cautelar, laudo técnico, remarcação de chassi e histórico veicular. Credenciada DETRAN-PR. Atendemos em Curitiba e região metropolitana.",
  icons: {
    icon: [{ url: "/icon.png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${poppins.variable}`}>
      <body>
        <Script src="/tracking.js" strategy="afterInteractive" />
        <Header />
        <main className="pt-[68px]">{children}</main>
        <Footer />
        <WppFloat />
      </body>
    </html>
  );
}
