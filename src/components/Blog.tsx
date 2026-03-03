import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    const posts = [
        {
            title: "Liderança em políticas digitais",
            excerpt: "Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.",
            image: "/assets/92b7e35d29404d2522ca019474ce18914a35b4c7.png",
            link: "#"
        },
        {
            title: "Liderança em políticas digitais",
            excerpt: "Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.",
            image: "/assets/92b7e35d29404d2522ca019474ce18914a35b4c7.png",
            link: "#"
        },
        {
            title: "Liderança em políticas digitais",
            excerpt: "Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.",
            image: "/assets/92b7e35d29404d2522ca019474ce18914a35b4c7.png",
            link: "#"
        },
        {
            title: "Liderança em políticas digitais",
            excerpt: "Participação ativa na formulação de políticas públicas digitais e atuação como Policy Manager no Brasil pela ALAI (Latin American Internet Association), unindo inovação, regulação e prática jurídica tradicional.",
            image: "/assets/92b7e35d29404d2522ca019474ce18914a35b4c7.png",
            link: "#"
        }
    ];

    return (
        <section id="blog" className="relative w-full py-32 lg:py-48 bg-background text-foreground">
            <div className="max-w-[1512px] mx-auto px-10 lg:px-20">

                {/* Header */}
                <h2 className="font-handel text-4xl lg:text-[50px] leading-[1.1] mb-20">
                    Confira nossas <br className="hidden lg:block" /> publicações
                </h2>

                {/* Blog List List - alternating grid style similar to figma */}
                <div className="flex flex-col gap-20 max-w-[1169px] mx-auto">
                    {posts.map((post, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start group">

                            {/* Image Container */}
                            <div className="relative w-full lg:w-[527px] h-[230px] bg-[#d9d9d9] overflow-hidden flex-shrink-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="flex flex-col flex-1 lg:mt-6">
                                <h3 className="font-handel text-2xl md:text-3xl lg:text-[33.172px] leading-tight mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>

                                <p className="font-motiva text-base lg:text-[14.587px] leading-[21.88px] text-foreground/80 mb-6 lg:mb-10 max-w-[548px]">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-[67px] h-px bg-[#d9d9d9] group-hover:bg-primary transition-colors" />
                                    <Link href={post.link} className="font-motiva text-[14.587px] uppercase tracking-wider text-foreground hover:text-primary transition-colors">
                                        Leia mais
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* View All Publications */}
                <div className="mt-32 w-full flex flex-col items-center">
                    <Link href="/blog" className="font-handel text-2xl lg:text-[35px] text-foreground hover:text-primary transition-colors mb-6 text-center">
                        Confira todas as publicações
                    </Link>
                    <div className="w-full max-w-[478px] h-px bg-current opacity-30" />
                </div>

            </div>
        </section>
    );
}
