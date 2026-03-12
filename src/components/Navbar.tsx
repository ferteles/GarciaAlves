"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        // Dispara uma vez ao carregar para pegar o estado inicial
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? 'shadow-md' : ''}`}>
            <div className={`max-w-[1512px] mx-auto px-6 lg:px-[40px] flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[70px] lg:h-[90px]' : 'h-[90px] lg:h-[130px]'}`}>
                
                {/* Logo */}
                <div className="flex-shrink-0 z-50">
                    <Link href="/" className="block">
                        <Image
                            src="/assets/7fa17b67e0e71de8c6bb1cbc7efbaf4271091096.svg"
                            alt="Garcia Alves Logo"
                            width={343}
                            height={64}
                            priority
                            className={`transition-all duration-300 h-auto ${scrolled ? 'w-[150px] md:w-[200px] lg:w-[260px]' : 'w-[180px] md:w-[240px] lg:w-[343px]'}`}
                        />
                    </Link>
                </div>

                {/* Desktop Menu - Stacked Layout */}
                <div className="hidden lg:flex items-center justify-end gap-x-8 xl:gap-x-12 font-handel text-[16px] xl:text-[20.3px] font-bold tracking-normal text-black w-full ml-8">
                    <Link href="#quem-somos" className="hover:text-primary transition-colors whitespace-nowrap">
                        quem somos
                    </Link>
                    <Link href="#areas" className="hover:text-primary transition-colors whitespace-nowrap">
                        áreas de atuação
                    </Link>
                    
                    {/* Advogados / Contato Stacked */}
                    <div className="flex flex-col items-center gap-1">
                        <Link href="#advogados" className="hover:text-primary transition-colors whitespace-nowrap">
                            advogados
                        </Link>
                        <Link href="#contato" className="hover:text-primary transition-colors whitespace-nowrap">
                            contato
                        </Link>
                    </div>

                    {/* Blog / PT/EN Stacked */}
                    <div className="flex flex-col items-center gap-1">
                        <Link href="/blog" className="hover:text-primary transition-colors whitespace-nowrap">
                            blog
                        </Link>
                        <button className="text-primary font-bold hover:opacity-80 transition-opacity uppercase">
                            PT/EN
                        </button>
                    </div>
                </div>

                {/* Mobile Icons + Hamburger */}
                <div className="flex lg:hidden items-center gap-4 z-50">
                    <button className="text-primary font-bold text-sm">
                        PT/EN
                    </button>
                    <button
                        className="text-black p-2 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-8 h-8 flex flex-col items-center justify-center relative space-y-[6px]">
                            <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
                            <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col items-center pt-32 gap-8 font-handel text-2xl font-bold transition-transform duration-300 ease-in-out lg:hidden ${
                    isOpen ? "translate-y-0" : "translate-y-[-150%] opacity-0 pointer-events-none"
                }`}
            >
                <Link href="#quem-somos" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                    quem somos
                </Link>
                <Link href="#areas" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                    áreas de atuação
                </Link>
                <Link href="#advogados" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                    advogados
                </Link>
                <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                    blog
                </Link>
                <Link href="#contato" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                    contato
                </Link>
            </div>
        </nav>
    );
}
