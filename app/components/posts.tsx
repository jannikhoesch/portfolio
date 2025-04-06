import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getProjects } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getProjects()

  return (
    <div className="grid gap-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-4 group"
            href={`/blog/${post.slug}`}
          >
            {post.metadata.image && (
              <div className="relative w-full h-64 overflow-hidden rounded-xl">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-neutral-200 text-sm mb-2">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  <p className="text-white text-xl font-medium tracking-tight mb-2">
                    {post.metadata.title}
                  </p>
                  <p className="text-neutral-200 line-clamp-2">
                    {post.metadata.summary}
                  </p>
                </div>
              </div>
            )}
          </Link>
        ))}
    </div>
  )
}
