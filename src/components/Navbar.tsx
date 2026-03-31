"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { language, setLanguage, menuItems } = useLanguage();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        const handleScroll = () => setScrolled(window.scrollY > 20);

        checkMobile();
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    // Altura do container
    const navHeight = isMobile
        ? (scrolled ? "56px" : "70px")
        : (scrolled ? "90px" : "130px");

    // Largura do logo
    const logoWidth = isMobile
        ? (scrolled ? "110px" : "140px")
        : (scrolled ? "240px" : "343px");

    const toggleLanguage = () => {
        setLanguage(language === "pt" ? "en" : "pt");
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-gray-100 ${scrolled ? "shadow-md" : ""}`}
            style={{ transition: "box-shadow 0.3s" }}
        >
            <div
                className="max-w-[1512px] mx-auto px-4 flex items-center justify-between overflow-hidden"
                style={{
                    height: navHeight,
                    transition: "height 0.3s ease",
                    paddingLeft: "clamp(16px, 3vw, 40px)",
                    paddingRight: "clamp(16px, 3vw, 40px)",
                }}
            >
                {/* Logo */}
                <div className="flex-shrink-0 z-50">
                    <Link href="/" className="block">
                        <Image
                            src="/assets/logo.svg"
                            alt="Garcia Alves Logo"
                            width={343}
                            height={64}
                            priority
                            style={{
                                width: logoWidth,
                                height: "auto",
                                transition: "width 0.3s ease",
                            }}
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center justify-end gap-x-6 xl:gap-x-10 font-handel font-bold tracking-normal text-black shrink-0 ml-6"
                    style={{ fontSize: "clamp(13px, 1.1vw, 18px)" }}
                >
                    {menuItems.map((item, index) => (
                      <Link key={index} href={item.link} className="hover:text-primary transition-colors whitespace-nowrap">
                        {item.label}
                      </Link>
                    ))}
                    
                    <button 
                        onClick={toggleLanguage}
                        className="text-primary font-bold hover:opacity-80 transition-opacity uppercase whitespace-nowrap bg-gray-100 px-3 py-1 rounded cursor-pointer"
                    >
                        {language === "pt" ? "PT / en" : "pt / EN"}
                    </button>
                </div>

                {/* Mobile: PT/EN + Hamburger */}
                <div className="flex lg:hidden items-center gap-3 z-50 shrink-0">
                    <button 
                        onClick={toggleLanguage}
                        className="text-primary font-bold text-xs whitespace-nowrap bg-gray-100 px-2 py-1 rounded"
                    >
                        {language === "pt" ? "PT / en" : "pt / EN"}
                    </button>
                    <button
                        className="text-black p-1 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-6 flex flex-col items-center justify-center relative" style={{ gap: "5px" }}>
                            <span className={`block bg-black transition-all duration-300`}
                                style={{
                                    height: "2px", width: "22px", display: "block",
                                    transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
                                }} />
                            <span className={`block bg-black transition-all duration-300`}
                                style={{
                                    height: "2px", width: "22px", display: "block",
                                    opacity: isOpen ? 0 : 1,
                                }} />
                            <span className={`block bg-black transition-all duration-300`}
                                style={{
                                    height: "2px", width: "22px", display: "block",
                                    transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                                }} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 font-handel text-2xl font-bold lg:hidden"
                style={{
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                    transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
            >
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.link} onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ))}
            </div>
        </nav>
    );
}
