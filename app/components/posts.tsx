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
              <div className="relative w-full h-48 overflow-hidden rounded-xl">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            )}
            <div className="w-full flex flex-col space-y-1">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 text-xl font-medium tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
