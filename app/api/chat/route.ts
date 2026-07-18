import { streamText, UIMessage } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { readFileSync } from 'fs';
import { join } from 'path';

const gateway = createOpenAI({
    apiKey: process.env.AI_GATEWAY_API_KEY,
    baseURL: 'https://ai-gateway.vercel.sh/v1',
});

/** Free-tier model — override with CHAT_MODEL (e.g. openai/gpt-4.1-mini). */
const CHAT_MODEL = process.env.CHAT_MODEL ?? 'google/gemini-2.5-flash-lite';

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
        model: gateway(CHAT_MODEL),
        messages: updatedMessages,
    });

    return result.toDataStreamResponse();
}
