import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { GitHubLink } from 'app/components/github-link'
import { formatDate, getProjects } from 'app/portfolio/utils'
import { baseUrl } from 'app/sitemap'
import Image from 'next/image'
import {
  CONTENT_IMAGE_QUALITY,
  CONTENT_IMAGE_SIZES,
  getBlurDataURL,
} from 'app/lib/image'

export async function generateStaticParams() {
  let projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const projects = await getProjects()
  let project = projects.find((project) => project.slug === slug)
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/portfolio/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Projects({ params }) {
  const projects = await getProjects();
  const { slug } = await params
  let project = projects.find((project) => project.slug === slug)

  if (!project) {
    notFound();
  }

  const blurDataURL = project.metadata.image
    ? await getBlurDataURL(project.metadata.image)
    : undefined

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Projects',
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `${baseUrl}${project.metadata.image}`
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/portfolio/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      {project.metadata.image && (
        <div
          className={
            project.metadata.imageAspect === '1024/522'
              ? 'relative w-full aspect-[1024/522] mb-8 rounded-xl overflow-hidden'
              : 'relative w-full h-96 mb-8 rounded-xl overflow-hidden'
          }
        >
          <Image
            src={project.metadata.image}
            alt={project.metadata.title}
            fill
            className={[
              'object-cover',
              project.metadata.imagePosition === 'top'
                ? 'object-top'
                : project.metadata.imagePosition === 'bottom'
                  ? 'object-bottom'
                  : 'object-center',
            ].join(' ')}
            priority
            sizes={CONTENT_IMAGE_SIZES}
            quality={CONTENT_IMAGE_QUALITY}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <h1 className="title font-semibold text-4xl tracking-tighter text-white mb-2">
              {project.metadata.title}
            </h1>
            <p className="text-sm text-neutral-200 mb-4">
              {formatDate(project.metadata.publishedAt)}
            </p>
            <div className="flex items-start gap-2">
              <p className="text-neutral-200 flex-1">
                {project.metadata.summary}
              </p>
              {project.metadata.github && (
                <GitHubLink
                  href={project.metadata.github}
                  className="mt-1 shrink-0"
                />
              )}
            </div>
          </div>
        </div>
      )}
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}
