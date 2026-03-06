import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contato" className="bg-accent pt-20 lg:pt-32 relative overflow-hidden flex flex-col">
            {/* Background overlay similar to Figma */}
            <div className="absolute inset-0 bg-gray-light mix-blend-luminosity opacity-25 pointer-events-none" />

            <div className="max-w-[1512px] mx-auto px-10 lg:px-20 relative z-10 w-full flex-1">

                {/* Contact Form Section */}
                <div className="mb-24 lg:mb-40 max-w-4xl">
                    <h2 className="font-handel text-2xl md:text-3xl lg:text-[33px] mb-8 text-black">
                        Sua mensagem é importante para nós
                    </h2>
                    <form className="flex flex-col md:flex-row gap-4 lg:gap-0 w-full shadow-sm">
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="bg-[#e2e2e2] px-6 py-5 md:py-6 font-motiva font-bold text-[#8c8c8c] flex-1 outline-none focus:ring-2 focus:ring-primary focus:z-10 relative"
                        />
                        <input
                            type="text"
                            placeholder="BREVE MENSAGEM"
                            className="bg-[#f1f1f1] px-6 py-5 md:py-6 font-motiva font-bold text-[#8c8c8c] flex-[2] outline-none focus:ring-2 focus:ring-primary focus:z-10 relative"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white font-motiva font-bold text-[20px] px-10 py-5 md:py-6 hover:bg-primary/90 transition-colors"
                        >
                            ENVIAR
                        </button>
                    </form>
                </div>

                {/* Footer Links and Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="font-handel text-4xl lg:text-[61px] leading-tight text-foreground uppercase tracking-widest mb-6">
                            REG.TECH.LAW<span className="text-primary">.ALL</span>
                        </h3>
                        <p className="font-motiva text-xl text-foreground max-w-[585px] leading-relaxed">
                            Vivemos o presente olhando para o que vem a seguir. Conectamos Direito e tecnologia para que negócios possam inovar com segurança, crescer com estratégia e conquistar espaço em um mundo em constante mudança.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 font-motiva text-xl tracking-wide">
                        <Link href="#quem-somos" className="hover:text-primary transition-colors">quem somos</Link>
                        <Link href="#areas" className="hover:text-primary transition-colors">áreas de atuação</Link>
                        <Link href="#advogados" className="hover:text-primary transition-colors">advogados</Link>
                        <Link href="#blog" className="hover:text-primary transition-colors">blog</Link>
                        <Link href="#contato" className="hover:text-primary transition-colors">contato</Link>
                        <div className="mt-4 flex flex-col gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">linkedin</a>
                            <a href="mailto:contato@garciaalves.com" className="hover:text-primary transition-colors">contato@garciaalves.com</a>
                            <a href="tel:+5561999999999" className="hover:text-primary transition-colors">61 9 9999 9999</a>
                        </div>
                    </div>

                    <div className="font-motiva text-xl tracking-wide">
                        <p className="mb-1">Centro Empresarial Varig</p>
                        <p className="mb-1">Setor Comercial Norte Quadra 04</p>
                        <p className="mb-1">BL B - Asa Norte, Brasília - DF</p>
                    </div>
                </div>
            </div>

            {/* Giant Logo Text */}
            <div className="w-full relative z-10 mt-20 lg:mt-32 uppercase font-handel text-[25vw] sm:text-[20vw] lg:text-[16vw] xl:text-[230px] leading-[0.75] tracking-tighter text-black flex flex-col justify-end">
                <div className="max-w-[1512px] mx-auto px-10 lg:px-20 w-full flex flex-col">
                    <span className="block -ml-[0.05em]">garcia</span>
                    <span className="block -ml-[0.05em]">alves</span>
                </div>
            </div>
        </footer>
    );
}
