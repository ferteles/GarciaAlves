import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garcia Alves Advocacia",
  description: "Advocacia especializada em Direito Empresarial, Regulatório e Tecnologia.",
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
