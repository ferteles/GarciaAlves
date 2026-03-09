"use client";

import Link from "next/link";
import { useState } from "react";

const imgGroup1 = "http://localhost:3845/assets/7fa17b67e0e71de8c6bb1cbc7efbaf4271091096.svg";

export default function TopNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 lg:px-[40px] lg:pt-[44px] text-black">
            <div className="flex items-center justify-between">
                <Link href="/" className="z-50 w-[200px] lg:w-[343px] h-[64px] relative block">
                    <img src={imgGroup1} alt="Logo Garcia Alves" className={`w-full h-full object-contain transition-all duration-300 ${isOpen ? 'brightness-100' : ''}`} />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-[49px] font-handel text-[20.3px] lowercase tracking-normal">
                    <Link href="#quem-somos" className="hover:text-primary transition-colors">quem somos</Link>
                    <Link href="#areas" className="hover:text-primary transition-colors">áreas de atuação</Link>
                    <Link href="#advogados" className="hover:text-primary transition-colors">advogados</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">blog</Link>
                    <Link href="#contato" className="hover:text-primary transition-colors">contato</Link>
                    <span className="text-primary cursor-pointer transition-colors ml-2 uppercase">PT/EN</span>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-black z-50 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="w-8 h-8 flex items-center justify-center relative">
                        <span className={`absolute h-0.5 w-6 transition-all duration-300 ${isOpen ? "bg-black rotate-45" : "bg-black -translate-y-2"
                            }`} />
                        <span className={`absolute h-0.5 w-6 transition-all duration-300 ${isOpen ? "bg-transparent" : "bg-black"
                            }`} />
                        <span className={`absolute h-0.5 w-6 transition-all duration-300 ${isOpen ? "bg-black -rotate-45" : "bg-black translate-y-2"
                            }`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Sub-Layer */}
            <div className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <nav className="flex flex-col items-center justify-center h-full gap-8 font-handel text-2xl text-black lowercase tracking-normal">
                    <Link href="#quem-somos" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">quem somos</Link>
                    <Link href="#areas" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">áreas de atuação</Link>
                    <Link href="#advogados" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">advogados</Link>
                    <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">blog</Link>
                    <Link href="#contato" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">contato</Link>
                    <span className="text-primary mt-4 uppercase">PT/EN</span>
                </nav>
            </div>
        </header>
    );
}
