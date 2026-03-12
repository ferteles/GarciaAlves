import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BlogFooter from "@/components/BlogFooter";
import { getPayload } from "payload"
import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    
    const payload = await getPayload({ config: configPromise })
    
    const postsData = await payload.find({
        collection: 'posts' as any,
        where: {
            slug: {
                equals: resolvedParams.slug
            }
        },
        limit: 1
    })

    const post: any = postsData.docs[0];

    if (!post) {
        return (
            <main className="min-h-screen relative w-full overflow-x-hidden flex items-center justify-center bg-background text-foreground">
                <div className="text-center">
                    <h1 className="font-handel text-4xl mb-4">Post não encontrado</h1>
                    <Link href="/blog" className="font-motiva text-primary hover:underline">
                        Voltar para o blog
                    </Link>
                </div>
            </main>
        );
    }

    const relatedData = await payload.find({
        collection: 'posts' as any,
        where: {
            slug: {
                not_equals: post.slug
            }
        },
        sort: '-date',
        limit: 3
    })
    const relatedPosts: any[] = relatedData.docs;

    return (
        <main className="min-h-screen relative w-full overflow-x-hidden bg-background">
            <Navbar />

            {/* Blue Strip */}
            <div className="w-full bg-primary py-3 md:py-4 mt-[120px] lg:mt-[150px] px-6 lg:px-20 flex items-center shadow-md relative z-20">
                <p className="max-w-[1512px] mx-auto w-full font-motiva text-white/90 text-[11px] md:text-sm tracking-[0.2em] uppercase font-semibold">
                    Pensar. Conectar. <span className="text-accent font-bold">Resolver.</span>
                </p>
            </div>

            {/* Post Hero Image */}
            <div className="max-w-[1512px] mx-auto px-6 lg:px-20 pt-16">
                <div className="relative w-full h-[40vh] md:h-[60vh] bg-[#f1f1f1] overflow-hidden">
                    {post.image && typeof post.image === 'object' && post.image.url && (
                        <Image
                            src={post.image.url}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                </div>
            </div>

            {/* Post Content */}
            <article className="max-w-[1512px] mx-auto px-6 lg:px-20 py-16 text-foreground flex flex-col md:flex-row gap-16">

                {/* Left Offset Column (Empty or metadata) */}
                <div className="hidden lg:block w-[15%] shrink-0">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-motiva text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                    >
                        <span>&larr;</span> Voltar
                    </Link>
                </div>

                {/* Main Article Content */}
                <div className="flex-1 max-w-[900px]">

                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-motiva text-sm uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors mb-12"
                    >
                        <span>&larr;</span> Voltar para publicações
                    </Link>

                    {/* Header Content */}
                    <div className="mb-16">
                        <div className="flex flex-wrap items-center gap-4 font-motiva text-sm font-bold uppercase tracking-widest mb-6">
                            <span className="text-black">{post.category && post.category.length > 0 ? post.category.join(" • ") : 'Artigo'}</span>
                            {post.date && (
                                <>
                                    <span className="text-foreground/40">•</span>
                                    <span className="text-foreground/40">{new Date(post.date).toLocaleDateString("pt-BR", { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                </>
                            )}
                        </div>

                        <h1 className="font-handel text-4xl md:text-5xl lg:text-[70px] leading-[1.05] tracking-tight mb-10 text-black">
                            {post.title}
                        </h1>

                        {post.date && (
                            <div className="font-motiva text-sm text-foreground/40 font-bold uppercase tracking-widest">
                                {new Date(post.date).toLocaleDateString("pt-BR", { day: '2-digit', month: 'short', year: 'numeric' })}
                            </div>
                        )}
                    </div>

                    {/* Article Body */}
                    <div className="font-motiva text-lg lg:text-xl leading-relaxed text-black/80 mb-24 payload-richtext">
                        {post.content && typeof post.content === 'object' ? (
                            <RichText data={post.content} />
                        ) : (
                            <div className="whitespace-pre-wrap">{post.content}</div>
                        )}
                    </div>

                    {/* Related Articles Section */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-24 mb-10">
                            <h3 className="font-motiva text-sm font-bold tracking-widest uppercase mb-4 text-black">
                                artigos similares
                            </h3>
                            <div className="w-full h-px bg-black mb-8" />
                            <div className="flex flex-col">
                                {relatedPosts.map(related => (
                                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group flex flex-col py-6 border-b border-foreground/10 last:border-b-0">
                                        <h4 className="font-handel text-xl md:text-2xl lg:text-[28px] leading-tight text-black group-hover:text-primary transition-colors">
                                            {related.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            <BlogFooter />
        </main>
    );
}
