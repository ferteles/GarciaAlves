import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-[1512px] mx-auto px-10 h-[120px] lg:h-[150px] flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image
                            src="/assets/7fa17b67e0e71de8c6bb1cbc7efbaf4271091096.svg"
                            alt="Garcia Alves Logo"
                            width={343}
                            height={64}
                            priority
                            className="w-[200px] md:w-[280px] lg:w-[343px] h-auto"
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex items-center gap-10 font-motiva text-xl tracking-wide">
                    <Link href="#quem-somos" className="hover:text-primary transition-colors">
                        quem somos
                    </Link>
                    <Link href="#areas" className="hover:text-primary transition-colors">
                        áreas de atuação
                    </Link>
                    <Link href="#advogados" className="hover:text-primary transition-colors">
                        advogados
                    </Link>
                    <Link href="#blog" className="hover:text-primary transition-colors">
                        blog
                    </Link>
                    <Link href="#contato" className="hover:text-primary transition-colors">
                        contato
                    </Link>
                    <button className="text-primary font-semibold hover:opacity-80 transition-opacity ml-4">
                        PT/EN
                    </button>
                </div>

                {/* Mobile menu button could go here */}
                <div className="flex lg:hidden">
                    <button className="text-foreground p-2 text-primary font-semibold">
                        PT/EN
                    </button>
                </div>
            </div>
        </nav>
    );
}
