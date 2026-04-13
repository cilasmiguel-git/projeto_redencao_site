import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
import CookieBanner from "../components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Redenção | Transporte e Fretamento",
  description: "Tradição em transporte desde 1936. Fretamento turístico, empresarial e contínuo, além de oficina mecânica de veículos pesados em Fortaleza, Ceará.",  keywords: ["fretamento de ônibus fortaleza", "aluguel de onibus ceara", "fretamento turismo ceará", "transporte executivo fortaleza", "oficina linha pesada fortaleza", "fretamento contínuo", "Redenção"],
  authors: [{ name: "Redenção Transporte e Turismo" }],
  openGraph: {
    title: "Redenção Transporte e Turismo",
    description: "Referência em Fretamento Turístico e Contínuo no estado do Ceará. Conforto, segurança e pontualidade há mais de 80 anos.",
    url: "https://www.redencaoonline.com.br",
    siteName: "Redenção Transporte e Turismo",
    images: [
      {
        url: "/projeto_redencao_site/images/banner-principal.png",
        width: 1200,
        height: 630,
        alt: "Frota de Ônibus Redenção",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
