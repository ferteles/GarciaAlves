import Link from 'next/link';

const imgGroup = "http://localhost:3845/assets/b9d1bb04494e3a73bf98c053fea148ac555add0e.svg";
const imgGroup2 = "http://localhost:3845/assets/4194d183abd6ca9c535cb2fec06388ea4fe1cfa2.svg";
const imgRectangle27 = "http://localhost:3845/assets/6e0b5c610eaa9e9576dc2f40d3cc87fd56fab813.png";

export default function Footer() {
    return (
        <footer id="contato" className="relative w-full bg-accent overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
            {/* Decorative Texture overlays */}
            <div className="absolute top-0 left-0 w-full h-full lg:h-[671px] opacity-25 mix-blend-luminosity pointer-events-none z-0 bg-[#d9d9d9]">
                <img src={imgRectangle27} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-full max-w-[1512px] mx-auto px-6 lg:px-[123px] relative z-20">
                {/* Intro */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[16px] xl:gap-[100px] items-start mb-16 lg:mb-24 mt-4 lg:mt-12">
                    <h2 className="font-handel text-[50px] lg:text-[61.8px] leading-[1] text-gray-dark lg:whitespace-nowrap flex-shrink-0">
                        REG.TECH.LAW<span className="text-primary">.ALL</span>
                    </h2>
                    <p className="font-motiva text-[18px] lg:text-[20px] leading-[1.5] text-gray-dark lg:max-w-[585px] pt-2">
                        Vivemos o presente olhando para o que vem a seguir. Conectamos Direito e tecnologia para que negócios possam inovar com segurança, crescer com estratégia e conquistar espaço em um mundo em constante mudança.
                    </p>
                </div>

                {/* Form Section */}
                <div className="flex flex-col lg:flex-row w-full mb-20 lg:mb-32">
                    <div className="bg-[#e2e2e2] flex items-center px-8 lg:px-[48px] py-4 lg:h-[64px] lg:w-[485px]">
                        <h3 className="font-handel text-[20px] lg:text-[33.1px] leading-[1] text-gray-dark uppercase lg:normal-case">Sua mensagem é importante para nós</h3>
                    </div>
                    <form className="flex flex-col md:flex-row flex-1 w-full lg:max-w-[789px]">
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="bg-[#f1f1f1] px-8 py-5 lg:h-[64px] font-motiva font-bold text-[18px] lg:text-[20px] text-gray-500 placeholder:text-[#8c8c8c] outline-none focus:bg-white transition-colors w-full border-[2px] border-transparent focus:border-primary shrink-0 lg:w-[263px]"
                        />
                        <input
                            type="text"
                            placeholder="BREVE MENSAGEM"
                            className="bg-[#f1f1f1] px-8 py-5 lg:h-[64px] font-motiva font-bold text-[18px] lg:text-[20px] text-gray-500 placeholder:text-[#8c8c8c] outline-none focus:bg-white transition-colors w-full flex-1 border-[2px] border-transparent focus:border-primary border-t md:border-t-0 md:border-l border-[#e2e2e2]"
                        />
                        <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-motiva font-bold text-[18px] lg:text-[20px] lg:h-[64px] py-5 px-8 lg:px-[46px] flex items-center justify-center transition-colors shrink-0">
                            ENVIAR
                        </button>
                    </form>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 font-handel text-[18px] lg:text-[20.3px] text-black mb-16">
                    <div className="flex flex-col gap-4 lg:col-span-4 xl:col-span-3 lg:pl-[12px]">
                        <Link href="#quem-somos" className="hover:text-primary transition-colors lowercase">quem somos</Link>
                        <Link href="#areas" className="hover:text-primary transition-colors lowercase">áreas de atuação</Link>
                        <Link href="#advogados" className="hover:text-primary transition-colors lowercase">advogados</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors lowercase">blog</Link>
                        <Link href="#contato" className="hover:text-primary transition-colors lowercase">contato</Link>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-2 xl:col-span-3">
                        <a href="#" className="hover:text-primary transition-colors lowercase">linkedin</a>
                        <a href="mailto:contato@garciaalves.com" className="hover:text-primary transition-colors lowercase mt-auto mb-10">contato@garciaalves.com</a>
                    </div>
                    <div className="flex flex-col gap-1 lg:max-w-[328px] lg:col-span-4 xl:col-span-4 pt-1">
                        <p className="m-0 lowercase leading-[1.3]">Centro Empresarial Varig</p>
                        <p className="m-0 lowercase leading-[1.3]">Setor Comercial Norte Quadra 04</p>
                        <p className="m-0 lowercase leading-[1.3]">BL B - Asa Norte, Brasília - DF</p>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-2 xl:col-span-2 pt-1 lg:items-end">
                        <span className="text-black lg:hidden">Telefone</span>
                        <a href="tel:61999999999" className="hover:text-primary transition-colors">61 9 9999 9999</a>
                    </div>
                </div>
            </div>

            {/* Decorative Vector Groups at the bottom */}
            <div className="absolute bottom-[-50px] lg:bottom-0 left-[-50px] w-[1410px] h-[415px] pointer-events-none opacity-[0.15] lg:opacity-50 z-10 hidden md:block">
                <img src={imgGroup} alt="" className="absolute left-0 bottom-0 max-w-none w-[1410px] h-[415px]" />
                <img src={imgGroup2} alt="" className="absolute left-[calc(16.67%+105px)] bottom-0 max-w-none w-[1169px] h-[330px]" />
            </div>
        </footer>
    );
}
