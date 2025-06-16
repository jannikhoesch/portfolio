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
            {`Below are some of my favourite projects that I’ve worked on.`}
        </p>
        <div className="my-8 mb-16">
            <Projects />
        </div>
    </section>
  )
}
