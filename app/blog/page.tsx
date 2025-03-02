import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <p className="mb-16 text-left">
            {`Welcome to my blog! Here I share some personal stories about topics that interest me.`}
        </p>
        <div className="my-8 mb-16">
            <BlogPosts />
        </div>
    </section>
  )
}
