import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const siteUrl = 'https://garciaalves.adv.br'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Dynamic blog post routes
  try {
    const payload = await getPayload({ config: configPromise })
    const postsData = await payload.find({
      collection: 'posts' as any,
      limit: 1000,
    })

    const postRoutes: MetadataRoute.Sitemap = postsData.docs.map((post: any) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.date || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    return [...staticRoutes, ...postRoutes]
  } catch (err) {
    console.error('Sitemap: erro ao buscar posts', err)
    return staticRoutes
  }
}
