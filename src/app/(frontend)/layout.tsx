import type { Metadata } from "next";
import "./globals.css";
import { OrganizationJsonLd, LegalServiceJsonLd } from "@/components/JsonLd";
import { getPayload } from "payload"
import configPromise from '@payload-config'
import { LanguageProvider } from "@/context/LanguageContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const currentLanguage = (cookieStore.get('NEXT_LOCALE')?.value as 'pt' | 'en') || 'pt'

  const fallbackUrl   = 'https://garciaalves.adv.br'
  const fallbackTitle = 'Garcia Alves Advocacia | Direito Empresarial, Regulatório e Tecnologia'
  const fallbackDesc  = 'Escritório de advocacia especializado em Direito Empresarial, Regulatório e Tecnologia em Brasília-DF. Combinamos visão estratégica e atuação técnica para empresas, empreendedores e instituições.'

  let seo: any = null
  try {
    const payload = await getPayload({ config: configPromise })
    seo = await (payload as any).findGlobal({ slug: 'seo' })
  } catch {}

  const siteUrl    = seo?.siteUrl       || fallbackUrl
  const siteName   = seo?.siteName      || 'Garcia Alves Advocacia'
  const template   = seo?.titleTemplate || '%s | Garcia Alves Advocacia'
  
  // SEO fields with language awareness
  const title      = seo?.[`homeTitle_${currentLanguage}`] || seo?.homeTitle_pt || fallbackTitle
  const desc       = seo?.[`homeDescription_${currentLanguage}`] || seo?.homeDescription_pt || fallbackDesc
  
  const ogImageUrl = seo?.homeOgImage?.url || seo?.defaultOgImage?.url || '/assets/og-default.png'
  const twitter    = seo?.twitterHandle || '@garciaalvesadv'
  
  const keywordsField = seo?.[`keywords_${currentLanguage}`] || seo?.keywords_pt
  const keywords = keywordsField?.map((k: any) => k.keyword).filter(Boolean) || [
    'advocacia empresarial', 'direito regulatório', 'direito digital',
    'tecnologia e inovação', 'escritório de advocacia Brasília', 'LGPD', 'Garcia Alves Advocacia',
  ]

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template },
    description: desc,
    keywords,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    ...(seo?.googleVerification ? { verification: { google: seo.googleVerification } } : {}),
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    alternates: {
      canonical: siteUrl,
      languages: { 'pt-BR': siteUrl, 'en-US': `${siteUrl}/en` },
    },
    openGraph: {
      type: 'website',
      locale: currentLanguage === 'en' ? 'en_US' : 'pt_BR',
      alternateLocale: currentLanguage === 'en' ? 'pt_BR' : 'en_US',
      url: siteUrl,
      siteName,
      title,
      description: desc,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `${siteName} — Pensar. Conectar. Resolver.` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogImageUrl],
      creator: twitter,
      site: twitter,
    },
  }
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  let menuData = null;
  let footerData = null;
  let whatsappData = null;
  try {
    const payload = await getPayload({ config: configPromise })
    menuData = await (payload as any).findGlobal({
      slug: 'main-menu',
    })
    footerData = await (payload as any).findGlobal({
      slug: 'footer',
    })
    whatsappData = await (payload as any).findGlobal({
      slug: 'whatsapp',
    })
  } catch (err) {
    console.error("Layout: Error fetching globals:", err);
  }

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased font-sans text-foreground bg-background" suppressHydrationWarning>
        <OrganizationJsonLd />
        <LegalServiceJsonLd />
        <LanguageProvider 
          initialMenu={menuData as any} 
          initialFooter={footerData as any}
          initialWhatsApp={whatsappData as any}
        >
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
