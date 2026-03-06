import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const motivaSans = localFont({
  src: "../../public/assets/MotivaSansRegular.woff.ttf",
  variable: "--font-motiva-sans",
});

const handelGothic = localFont({
  src: "../../public/assets/HandelGothic.ttf",
  variable: "--font-handel-gothic",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Garcia Alves Advocacia",
  description: "Advocacia especializada em Direito Empresarial, Regulatório e Tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${motivaSans.variable} ${handelGothic.variable} antialiased font-sans text-foreground bg-background`}>
        {children}
      </body>
    </html>
  );
}
