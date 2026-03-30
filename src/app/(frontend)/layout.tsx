import type { Metadata } from "next";
import "./globals.css";
import { OrganizationJsonLd, LegalServiceJsonLd } from "@/components/JsonLd";

const siteUrl = "https://garciaalves.adv.br";
const defaultTitle = "Garcia Alves Advocacia | Direito Empresarial, Regulatório e Tecnologia";
const defaultDescription =
  "Escritório de advocacia especializado em Direito Empresarial, Regulatório e Tecnologia em Brasília-DF. Combinamos visão estratégica e atuação técnica para empresas, empreendedores e instituições.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Garcia Alves Advocacia",
  },
  description: defaultDescription,
  keywords: [
    "advocacia empresarial",
    "direito regulatório",
    "direito digital",
    "tecnologia e inovação",
    "escritório de advocacia Brasília",
    "advogado empresarial",
    "consultoria jurídica",
    "LGPD",
    "Garcia Alves Advocacia",
  ],
  authors: [{ name: "Garcia Alves Advocacia", url: siteUrl }],
  creator: "Garcia Alves Advocacia",
  publisher: "Garcia Alves Advocacia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "pt-BR": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Garcia Alves Advocacia",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/assets/og-default.png",
        width: 1200,
        height: 630,
        alt: "Garcia Alves Advocacia — Pensar. Conectar. Resolver.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/assets/og-default.png"],
    creator: "@garciaalvesadv",
    site: "@garciaalvesadv",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased font-sans text-foreground bg-background" suppressHydrationWarning>
        <OrganizationJsonLd />
        <LegalServiceJsonLd />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
