import { BlogPosts } from 'app/components/posts';
import { Projects } from 'app/components/projects';

export default function Page() {
    return (
        <section>
            <div className="relative mb-8 w-32 h-32">
                <img
                    src="/profile.png"
                    alt="Profile Image"
                    className="profile-image w-full h-full rounded-full"
                />
                <img
                    src="/profile-hover.png"
                    alt="Profile Hover Image"
                    className="profile-image-hover w-full h-full rounded-full"
                />
            </div>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Jannik Hösch
            </h1>
            <p className="mb-16 text-left">
                {`
                I’m Jannik Hösch, a machine learning enthusiast with a passion for outdoor activities and continuous learning. Whether I’m working on neural networks or improving my endurance, I always strive to get a little bit better. When I’m not experimenting with AI models, you can usually find me swimming, biking, or planning my next adventure—whether that’s a bikepacking trip, a race, or exploring new topics in generative AI. I’ve recently moved to Sweden, where I’m still getting used to the coffee culture and learning Swedish along the way.
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
    );
}