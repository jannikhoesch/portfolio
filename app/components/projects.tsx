import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getProjects } from 'app/portfolio/utils'
import {
  CONTENT_IMAGE_QUALITY,
  CONTENT_IMAGE_SIZES,
  getBlurDataURL,
} from 'app/lib/image'
import { GitHubLink } from './github-link'

function cardImageClass(imagePosition?: string) {
  const position =
    imagePosition === 'top'
      ? 'object-top'
      : imagePosition === 'bottom'
        ? 'object-bottom'
        : 'object-center'
  return `object-cover transition-transform duration-200 group-hover:scale-105 ${position}`
}

export async function Projects() {
  const allProjects = getProjects().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  const blurs = await Promise.all(
    allProjects.map((project) => getBlurDataURL(project.metadata.image))
  )

  return (
    <div className="grid gap-12">
      {allProjects.map((project, index) => (
        <div key={project.slug} className="group relative overflow-hidden rounded-xl">
          <Link
            className="block"
            href={`/portfolio/${project.slug}`}
          >
            {project.metadata.image && (
              <div
                className={
                  project.metadata.imageAspect === '1024/522'
                    ? 'relative w-full aspect-[1024/522]'
                    : 'relative w-full h-64'
                }
              >
                <Image
                  src={project.metadata.image}
                  alt={project.metadata.title}
                  fill
                  className={cardImageClass(project.metadata.imagePosition)}
                  sizes={CONTENT_IMAGE_SIZES}
                  quality={CONTENT_IMAGE_QUALITY}
                  priority={index < 2}
                  placeholder="blur"
                  blurDataURL={blurs[index]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            )}
          </Link>
          <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
            <p className="text-neutral-200 text-sm mb-2">
              {formatDate(project.metadata.publishedAt, false)}
            </p>
            <Link
              href={`/portfolio/${project.slug}`}
              className="text-white text-xl font-medium tracking-tight mb-2 pointer-events-auto block"
            >
              {project.metadata.title}
            </Link>
            <div className="flex items-start gap-2 pointer-events-auto">
              <Link href={`/portfolio/${project.slug}`} className="min-w-0 flex-1">
                <p className="text-neutral-200 line-clamp-2">
                  {project.metadata.summary}
                </p>
              </Link>
              {project.metadata.github && (
                <GitHubLink href={project.metadata.github} className="mt-0.5 shrink-0" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
