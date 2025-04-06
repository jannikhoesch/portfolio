import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Check out my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
        <p className="mb-16 text-left">
            {`Here are some of my favourite projects I have worked on.  `}
        </p>
        <p className="mb-16 text-left font-bold">
            {`-- This page is still under construction. --`}
        </p>
        <div className="my-8 mb-16">
            <Projects />
        </div>
    </section>
  )
}
