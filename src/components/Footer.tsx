"use client";
// Force re-hydration check after navigation fix

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

const imgGroup = "/assets/Group2.svg";
const imgRectangle27 = "/assets/6e0b5c610eaa9e9576dc2f40d3cc87fd56fab813.png";

export default function Footer() {
    const { t, footer } = useLanguage();

    // Fallback values if footer data is missing from CMS
    const title = footer?.title || "REG.TECH.LAW.ALL";
    const description = footer?.description || "Vivemos o presente olhando para o que vem a seguir. Conectamos Direito e tecnologia para que negócios possam inovar com segurança, crescer com estratégia e conquistar espaço em um mundo em constante mudança.";
    const email = footer?.email || "contato@garciaalves.com";
    const phone = footer?.phone || "61 9 9999 9999";
    const addressLines = footer?.address && footer.address.some(l => l) ? footer.address : ["", "", ""];
    const socialLinks = footer?.socialLinks || [
        { platform: "linkedin", url: "#" }
    ];

    // Split title for styling if it contains the pattern .ALL
    const renderTitle = () => {
        if (title.includes('.ALL')) {
            const [main, ...rest] = title.split('.ALL');
            return (
                <>
                    {main}<span className="text-primary">.ALL</span>{rest.join('.ALL')}
                </>
            );
        }
        return title;
    };

    return (
        <footer id="contato" className="relative w-full bg-accent overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
            {/* Decorative Texture overlays */}
            <div className="absolute top-0 left-0 w-full h-full opacity-25 mix-blend-luminosity pointer-events-none z-0 bg-[#d9d9d9]">
                <img src={imgRectangle27} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-full max-w-[1512px] mx-auto px-6 lg:px-[123px] relative z-20">
                {/* Intro */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[16px] xl:gap-[100px] items-start mb-16 lg:mb-24 mt-4 lg:mt-12">
                    <h2 className="font-handel text-[35px] md:text-[50px] lg:text-[61.8px] leading-[1] text-gray-dark lg:whitespace-nowrap flex-shrink-0">
                        {renderTitle()}
                    </h2>
                    <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] text-gray-dark lg:max-w-[585px] pt-2">
                        {description}
                    </p>
                </div>

                {/* Form Section */}
                <div className="flex flex-col w-full mb-20 lg:mb-32 lg:max-w-[1100px]">
                    <h3 className="font-handel text-[20px] lg:text-[25px] leading-[1] text-black mb-4 uppercase lg:normal-case">{t.footer_contact.title}</h3>
                    <form className="flex flex-col md:flex-row w-full">
                        <input
                            type="email"
                            placeholder={t.footer_contact.email_placeholder}
                            className="bg-[#e9e9e9]/80 px-8 py-5 lg:h-[64px] font-motiva font-bold text-[18px] lg:text-[18px] text-gray-700 placeholder:text-[#8c8c8c] outline-none focus:bg-white transition-colors w-full shrink-0 md:w-[350px]"
                        />
                        <input
                            type="text"
                            placeholder={t.footer_contact.message_placeholder}
                            className="bg-[#e9e9e9]/80 px-8 py-5 lg:h-[64px] font-motiva font-bold text-[18px] lg:text-[18px] text-gray-700 placeholder:text-[#8c8c8c] outline-none focus:bg-white transition-colors w-full flex-1 border-t md:border-t-0 md:border-l border-white/50"
                        />
                        <button type="submit" className="bg-[#1a05f3] hover:bg-[#1003ba] text-white font-motiva font-bold text-[18px] lg:text-[18px] lg:h-[64px] py-5 px-10 flex items-center justify-center transition-colors shrink-0">
                            {t.footer_contact.send}
                        </button>
                    </form>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 font-handel text-[18px] lg:text-[20.3px] text-black mb-16">
                    <div className="flex flex-col gap-4 lg:col-span-4 xl:col-span-3 lg:pl-[12px]">
                        <Link href="/#quem-somos" className="hover:text-primary transition-colors lowercase">{t.nav.about}</Link>
                        <Link href="/#areas" className="hover:text-primary transition-colors lowercase">{t.nav.expertise}</Link>
                        <Link href="/#advogados" className="hover:text-primary transition-colors lowercase">{t.nav.lawyers}</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors lowercase">{t.nav.blog}</Link>
                        <Link href="/#contato" className="hover:text-primary transition-colors lowercase">{t.nav.contact}</Link>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-2 xl:col-span-3">
                        {socialLinks.map((link, i) => (
                            <a 
                                key={i} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-primary transition-colors lowercase"
                            >
                                {link.platform}
                            </a>
                        ))}
                        <a href={`mailto:${email}`} className="hover:text-primary transition-colors lowercase mt-auto mb-10">{email}</a>
                    </div>
                    <div className="flex flex-col gap-1 lg:max-w-[328px] lg:col-span-4 xl:col-span-4 pt-1 uppercase text-[14px] lg:text-[16px]">
                        {addressLines.map((line, i) => (
                            <p key={i} className="m-0 leading-[1.3] text-black">{line}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-2 xl:col-span-2 pt-1 lg:items-end">
                        <span className="text-black lg:hidden uppercase">{t.footer_contact.phone_label}</span>
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{phone}</a>
                    </div>
                </div>
            </div>

            <div className="w-full mt-10 md:mt-20 flex justify-center pb-8 lg:pb-0">
                <img src={imgGroup} alt="" className="w-full h-auto object-cover" />
            </div>
        </footer>
    );
}
