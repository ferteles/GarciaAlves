import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { posts as staticPosts } from "@/data/posts";

export default async function Blog({ locale = "pt" }: { locale?: string }) {
    let posts: any[] = [];

    try {
        const payload = await getPayload({ config: configPromise });
        const result = await payload.find({
            collection: "posts" as any,
            sort: "-date",
            limit: 4,
            locale: locale as any,
            fallbackLocale: "pt" as any,
        });
        posts = result.docs;
    } catch {
        // sem posts do CMS, usa dados estáticos
    }

    // Fallback para dados estáticos se o CMS não tiver posts
    const displayPosts = posts.length > 0 ? posts : staticPosts;

    return (
        <section id="blog" className="relative w-full py-32 lg:py-48 bg-background text-foreground">
            <div className="max-w-[1512px] mx-auto px-10 lg:px-20">

                {/* Header */}
                <h2 className="font-handel text-4xl lg:text-[50px] leading-[1.1] mb-20">
                    Confira nossas <br className="hidden lg:block" /> publicações
                </h2>

                {/* Blog List */}
                <div className="flex flex-col gap-20 max-w-[1169px] mx-auto">
                    {displayPosts.map((post: any, index: number) => {
                        const imageUrl =
                            post.image && typeof post.image === "object" && post.image.url
                                ? post.image.url
                                : typeof post.image === "string"
                                ? post.image
                                : null;

                        return (
                            <div key={post.slug || index} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start group">

                                {/* Image */}
                                <div className="relative w-full lg:w-[527px] h-[230px] bg-[#d9d9d9] overflow-hidden flex-shrink-0">
                                    {imageUrl && (
                                        <Image
                                            src={imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 lg:mt-6">
                                    <h3 className="font-handel text-2xl md:text-3xl lg:text-[33.172px] leading-tight mb-4 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="font-motiva text-base lg:text-[14.587px] leading-[21.88px] text-foreground/80 mb-6 lg:mb-10 max-w-[548px]">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-[67px] h-px bg-[#d9d9d9] group-hover:bg-primary transition-colors" />
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="font-motiva text-[14.587px] uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                                        >
                                            Leia mais
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* Ver todas */}
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

