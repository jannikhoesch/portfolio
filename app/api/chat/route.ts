import { streamText, UIMessage } from 'ai';
import { openai } from '@ai-sdk/openai';
import { readFileSync } from 'fs';
import { join } from 'path';

const behaviorContent: string = readFileSync(join(process.cwd(), '/app/api/chat/behavior.txt'), 'utf-8').trim();
const BEHAVIOR: UIMessage = {
    id: '0',
    role: 'system',
    content: behaviorContent,
    parts: [{ type: 'text', text: behaviorContent }]
};

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();
    const updatedMessages: UIMessage[] = [BEHAVIOR, ...messages];

    const result = streamText({
        model: openai('gpt-4o-mini'),
        messages: updatedMessages,
    });

    return result.toDataStreamResponse();
}

