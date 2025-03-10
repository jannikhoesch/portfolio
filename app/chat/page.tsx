'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect } from 'react';

export default function Page() {
    const { messages, input, setInput, append, setMessages } = useChat();

    useEffect(() => {
        // Set the initial message from Jannik
        setMessages([{ id: '0', content: "Hi! I'm Jannik. Want to have a chat?", role: 'assistant' }]);
    }, [setMessages]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Append the user message
        append({ content: input, role: 'user' });

        // Send the message to the backend to get a response
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: [...messages, { content: input, role: 'user' }] }),
        });

        const aiMessage = await response.text();
        append({ content: aiMessage, role: 'assistant' });
    };

    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Chat</h1>
            <div className="my-8 mb-16">
                <div className="">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-4 p-2 rounded-lg ${message.role === 'user' ? 'user-message' : 'ai-message'}`}>
                            {message.role === 'assistant' && (
                                <img src="/profile.png" alt="Jannik" className="mb-1 w-12 h-12 rounded-full" />
                            )}
                            <b className="block font-semibold">{message.role === 'user' ? 'You' : 'Jannik'}</b>
                            <div>
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="flex mt-4">
                    <input
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        onKeyDown={async event => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                append({ content: input, role: 'user' });
                                setInput('');
                            }
                        }}
                        className="flex-1 p-2 bg-transparent border-none outline-none focus:ring-0 text-black placeholder-gray-400"
                        placeholder="Ask me something..."
                        autoFocus
                    />
                </form>
            </div>
        </section>
    )
}
