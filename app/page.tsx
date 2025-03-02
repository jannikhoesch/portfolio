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
        {`I’m a machine learning enthusiast and outdoor athlete, 
        finding unmatched satisfaction in optimizing both neural networks 
        and my own performance. Whether it’s fine-tuning hyperparameters 
        or shaving seconds off my 10K run, I thrive on continuous improvement. 
        When I’m not debugging models, you’ll likely find me swimming, biking, 
        or planning my next adventure — whether it’s a bikepacking trip to the north cape, 
        or a deep dive into genAI.`}
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
