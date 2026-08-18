import { getProjects } from 'app/blog/utils'

export const baseUrl = 'https://jannikhoesch.com'

export default async function sitemap() {
  let blogs = getProjects().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = [
    '',
    '/blog',
    '/portfolio',
    '/chat',
    '/coords',
    '/coords/privacy',
    '/coords/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
