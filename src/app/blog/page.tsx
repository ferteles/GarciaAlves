import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import Navbar from "@/components/Navbar";
import BlogFooter from "@/components/BlogFooter";

export default function BlogListing() {
    const categories = ["Todos", "Inovação", "Regulação", "Políticas Públicas", "Tecnologia", "Inteligência Artificial", "Startups"];

    return (
        <main className="min-h-screen relative w-full overflow-x-hidden bg-background">
            <Navbar />

            {/* Blue Strip */}
            <div className="w-full bg-primary py-3 md:py-4 mt-[120px] lg:mt-[150px] px-6 lg:px-20 flex items-center shadow-md relative z-20">
                <p className="max-w-[1512px] mx-auto w-full font-motiva text-white/90 text-[11px] md:text-sm tracking-[0.2em] uppercase font-semibold">
                    Pensar. Conectar. <span className="text-accent font-bold">Resolver.</span>
                </p>
            </div>

            {/* Hero Section */}
            <section className="relative w-full pt-16 lg:pt-20 pb-20 px-6 lg:px-20 text-foreground bg-white">
                <div className="max-w-[1512px] mx-auto">
                    <div className="mb-8">
                        <span className="bg-primary px-3 py-1 text-sm font-bold tracking-widest uppercase text-black">garcia alves</span>
                    </div>
                    <div className="max-w-[1000px]">
                        <h1 className="font-handel text-5xl md:text-6xl lg:text-[80px] leading-[1.05] tracking-tight mb-12">
                            Insights que conectam direito, <br className="hidden lg:block" /> tecnologia e inovação
                        </h1>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {categories.map((cat, index) => (
                            <button
                                key={cat}
                                className={`font-motiva text-sm lg:text-base px-6 py-3 rounded-full border transition-colors ${index === 0
                                    ? "bg-primary border-primary text-black font-semibold"
                                    : "border-foreground/20 hover:border-primary text-foreground bg-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts List Section */}
            <section className="relative w-full text-foreground flex flex-col">
                <div className="w-full h-px bg-foreground/10" />
                {posts.map((post, index) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group block w-full py-16 lg:py-24 bg-white border-b border-foreground/10">
                        <div className="max-w-[1512px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                            {/* Image */}
                            <div className="relative w-full lg:w-[45%] aspect-[4/3] bg-gray-300 overflow-hidden shrink-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                <div className="flex flex-wrap items-center gap-2 md:gap-4 font-motiva text-xs md:text-sm lg:text-[15px] font-bold uppercase tracking-widest mb-4 lg:mb-6">
                                    <span className="text-black">{post.category?.[0] || 'Artigo'}</span>
                                    {post.date && (
                                        <>
                                            <span className="text-foreground/40 hidden md:block">•</span>
                                            <span className="text-foreground/40">{post.date}</span>
                                        </>
                                    )}
                                </div>
                                <h3 className="font-handel text-3xl md:text-4xl lg:text-[45px] leading-[1.1] mb-6 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="font-motiva text-lg lg:text-xl leading-relaxed text-foreground/80 mb-12 max-w-[600px]">
                                    {post.excerpt}
                                </p>
                                <div className="inline-flex flex-col gap-1 w-fit">
                                    <span className="font-motiva text-base lg:text-lg tracking-wide group-hover:text-primary transition-colors">
                                        Leia mais
                                    </span>
                                    <div className="w-full h-[2px] bg-foreground group-hover:bg-primary transition-colors" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>

            <BlogFooter />
        </main>
    );
}
