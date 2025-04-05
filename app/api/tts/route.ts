import { ElevenLabsClient } from "elevenlabs";

export async function POST(req: Request) {
    const { text } = await req.json();
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    const VOICE_ID = process.env.VOICE_ID;

    if (!VOICE_ID) throw new Error('Voice ID is required');

    const client = new ElevenLabsClient({
        apiKey: ELEVENLABS_API_KEY!
    });
      
    const audio = await client.textToSpeech.convert(
        VOICE_ID,
        {
            text: text,
            model_id: "eleven_multilingual_v2",
            output_format: "mp3_44100_128"
        }
    );

    // Convert the readable stream to a Response
    const stream = new ReadableStream({
        async start(controller) {
            for await (const chunk of audio) {
                controller.enqueue(chunk);
            }
            controller.close();
        },
    });

    return new Response(stream, {
        headers: {
            "Content-Type": "audio/mpeg",
        },
    });
} 