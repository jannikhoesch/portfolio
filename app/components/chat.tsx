'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useRef } from 'react';

export default function Chat() {
    const { messages, input, setInput, append, setMessages } = useChat();

    useEffect(() => {
        // Set the initial message from Jannik
        setMessages([{ id: '0', content: "Hi! I'm Jannik. Want to have a chat? 😄", role: 'assistant' }]);
    }, [setMessages]);

    const playTTS = async (text: string) => {
        const res = await fetch("/api/tts", {
            method: "POST",
            body: JSON.stringify({ text }),
            headers: {
              "Content-Type": "application/json"
            }
          });
        
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
        
          const audio = new Audio(url);
          audio.play();
          audio.onended = () => URL.revokeObjectURL(url);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        append({ content: input, role: 'user' });
        setInput('');
    };

    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Chat</h1>
            <div className="my-8 mb-16">
                <div className="">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-4 p-2 rounded-lg ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                            {message.role === 'assistant' && (
                                <img src="/profile.png" alt="Jannik" className="mb-1 w-12 h-12 rounded-full" />
                            )}
                            <div className={`flex items-center gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <b className="font-semibold">{message.role === 'user' ? 'You' : 'Jannik'}</b>
                                {message.role === 'assistant' && (
                                    <button
                                        onClick={() => playTTS(message.content)}
                                        className="p-1.5 hover:bg-dark-50 dark:hover:bg-dark-900/30 rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-dark-500/40 dark:focus:ring-dark-400/40"
                                        title="Listen to message"
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="17" 
                                            height="17" 
                                            viewBox="0 0 24 24" 
                                            fill="currentColor"
                                            className="text-dark-500 dark:text-dark-400"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <div className={message.role === 'user' ? 'text-right' : 'text-left'}>
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="flex mt-4">
                    <textarea
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        onKeyDown={async event => {
                            if (event.key === 'Enter' && !event.shiftKey) {
                                event.preventDefault();
                                handleSubmit(event);
                            }
                        }}
                        className="flex-1 p-2 bg-transparent border-none outline-none focus:ring-0 placeholder-gray-400 text-right"
                        placeholder="Type a message..."
                        autoFocus
                        rows={1}
                    />
                </form>
            </div>
        </section>
    );
}
