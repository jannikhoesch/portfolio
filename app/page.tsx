import { BlogPosts } from 'app/components/posts'
import { Projects } from 'app/components/projects'

export default function Page() {
  return (
    <section>
        <img
            src="/profile.png"
            alt="Profile Image"
            className="mb-8 w-32 h-32 rounded-full"
        />
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Jannik Hösch
        </h1>
        <p className="mb-16 text-left">
        {`
        I’m Jannik Hösch — a machine learning enthusiast, outdoor athlete, and part-time overachiever who thrives on optimizing both neural networks and my own endurance. Whether I’m fine-tuning hyperparameters or shaving seconds off my 10K, I’m always chasing continuous improvement.

When I’m not debugging AI models that may or may not take over the world, you’ll likely find me swimming, biking, or planning my next adventure—be it a bikepacking trip to the North Cape, an Ironman attempt, or a deep dive into generative AI. I also live in Sweden now, which means I spend an unreasonable amount on coffee and pretend to understand Swedish.
        
        `}
        </p>
        <h2 className="text-xl font-semibold">My Projects</h2>
        <div className="my-8 mb-16">
            <Projects />
        </div>
        <h2 className="text-xl font-semibold">My Blog</h2>
        <div className="my-8 mb-16">
            <BlogPosts />
        </div>
    </section>
  )
}
