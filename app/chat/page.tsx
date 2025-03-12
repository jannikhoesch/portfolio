import Chat from 'app/components/chat';

export const metadata = {
    title: 'Chat',
    description: 'Chat with me.',
}

export default function Page() {
    return (
        <section>
            <Chat />
        </section>
    )
}
