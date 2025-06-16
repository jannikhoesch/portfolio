import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getProjects } from 'app/portfolio/utils'

export function Projects() {
  let allProjects = getProjects()

  return (
    <div className="grid gap-8">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-4 group"
            href={`/portfolio/${project.slug}`}
          >
            {project.metadata.image && (
                <div className="relative w-full h-64 overflow-hidden rounded-xl">
                  <Image
                      src={project.metadata.image}
                      alt={project.metadata.title}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <p className="text-neutral-200 text-sm mb-2">
                      {formatDate(project.metadata.publishedAt, false)}
                    </p>
                    <p className="text-white text-xl font-medium tracking-tight mb-2">
                      {project.metadata.title}
                    </p>
                    <p className="text-neutral-200 line-clamp-2">
                      {project.metadata.summary}
                    </p>
                  </div>
                </div>
            )}
          </Link>
        ))}
    </div>
  )
}

