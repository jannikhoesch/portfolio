import { BlogPosts } from 'app/components/posts';
import { Projects } from 'app/components/projects';
import Link from 'next/link';

export default function Page() {
    return (
        <section>
            <div className="relative mb-8 w-32 h-32">
                <img
                    src="/picofme.png"
                    alt="Profile Image"
                    className="profile-image w-full h-full rounded-full"
                />
                <img
                    src="/picofme-hover.png"
                    alt="Profile Hover Image"
                    className="profile-image-hover w-full h-full rounded-full"
                />
            </div>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Jannik Hösch
            </h1>
            <p className="mb-16 text-left">
                {`Hej!`}<br /><br />
                {`
                Welcome to my little corner of the internet.
                
                I’m Jannik, a computer science student at KTH Stockholm specializing in machine learning (yes, I let AI do most of the thinking for me).  
                  
                When I’m not debugging code, you’ll probably find me cycling ridiculous distances, studying to be fluent in swedish, or you won’t find me at all because I’m lost in the woods.
                                
                Feel free to check out my projects, read my blog, or even have a conversation with `}
                <Link href="/chat" className="font-bold hover:underline">
                    my AI-twin
                </Link>
                {`, who does a surprisingly good job of pretending to be me.`}
                <br /><br />{`Enjoy your stay :)`}
            </p>

            {/*
            <h2 className="text-xl font-semibold">My Projects</h2>
            <div className="my-8 mb-16">
                <Projects />
            </div>
            <h2 className="text-xl font-semibold">My Blog</h2>
            <div className="my-8 mb-16">
                <BlogPosts />
            </div>
            */}
        </section>
    );
}