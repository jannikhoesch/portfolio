import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getProjects } from 'app/portfolio/utils'
import { GitHubLink } from './github-link'

export function Projects() {
  let allProjects = getProjects()

  return (
    <div className="grid gap-12">
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
          <div key={project.slug} className="group relative overflow-hidden rounded-xl">
            <Link
              className="block"
              href={`/portfolio/${project.slug}`}
            >
              {project.metadata.image && (
                <div className="relative w-full h-64">
                  <Image
                    src={project.metadata.image}
                    alt={project.metadata.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              )}
            </Link>
            <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
              <p className="text-neutral-200 text-sm mb-2">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <div className="flex items-center gap-2 mb-2 pointer-events-auto">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-white text-xl font-medium tracking-tight"
                >
                  {project.metadata.title}
                </Link>
                {project.metadata.github && (
                  <GitHubLink href={project.metadata.github} />
                )}
              </div>
              <Link
                href={`/portfolio/${project.slug}`}
                className="pointer-events-auto block"
              >
                <p className="text-neutral-200 line-clamp-2">
                  {project.metadata.summary}
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}
