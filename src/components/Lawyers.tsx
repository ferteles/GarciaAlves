import Image from "next/image";
import Link from "next/link";

export default function Lawyers() {
    const lawyers = [
        {
            name: "Sérgio Garcia Alves",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            linkedin: "https://linkedin.com",
            image: "/assets/ade156cb737fa832bc5d0210a0475d4e054f3942.png",
        },
        {
            name: "Sérgio Garcia Alves",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            linkedin: "https://linkedin.com",
            image: "/assets/ade156cb737fa832bc5d0210a0475d4e054f3942.png",
        },
        {
            name: "Sérgio Garcia Alves",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            linkedin: "https://linkedin.com",
            image: "/assets/ade156cb737fa832bc5d0210a0475d4e054f3942.png",
        },
        {
            name: "Sérgio Garcia Alves",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
            linkedin: "https://linkedin.com",
            image: "/assets/ade156cb737fa832bc5d0210a0475d4e054f3942.png",
        }
    ];

    return (
        <section id="advogados" className="relative w-full py-32 lg:py-48 bg-primary text-white">
            <div className="max-w-[1512px] mx-auto px-10 lg:px-20">

                {/* Header */}
                <h2 className="font-handel text-4xl lg:text-[50px] leading-[1.1] mb-20 lg:mb-32">
                    Nossos Advogados
                </h2>

                {/* Lawyers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
                    {lawyers.map((lawyer, index) => (
                        <div key={index} className="flex flex-col group">

                            {/* Image Container */}
                            <div className="relative w-full aspect-[343/402] mb-12 bg-[#d9d9d9] overflow-hidden">
                                <Image
                                    src={lawyer.image}
                                    alt={lawyer.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/30 mb-8 max-w-[343px]" />

                            {/* Info */}
                            <h3 className="font-handel text-2xl lg:text-[29.985px] mb-6">
                                {lawyer.name}
                            </h3>

                            <a
                                href={lawyer.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-handel text-[19.128px] underline underline-offset-4 decoration-1 hover:text-accent transition-colors mb-8 inline-block"
                            >
                                Linkedin
                            </a>

                            <p className="font-motiva text-lg lg:text-[20px] leading-[30px] font-light text-white/90">
                                {lawyer.bio}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
