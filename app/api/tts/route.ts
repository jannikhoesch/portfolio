import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import "dotenv/config";

export async function POST(req: Request) {
    const { text } = await req.json();
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    const VOICE_ID = process.env.VOICE_ID;

    if (!ELEVENLABS_API_KEY) throw new Error("ELEVENLABS_API_KEY is missing");
    if (!VOICE_ID) throw new Error("VOICE_ID is missing");

    const client = new ElevenLabsClient();

    const audio = await client.textToSpeech.convert(
        VOICE_ID,
        {
            text: text,
            modelId: "eleven_flash_v2_5",
            outputFormat: "mp3_44100_128"
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