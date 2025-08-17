import {AssemblyAi} from 'assemblyai';

export async function POST(req) {
    try {
        const { audioUrl } = await req.json();
        console.log(audioUrl);

        const assemblyai = new AssemblyAi(process.env.ASSEMBLYAI_API_KEY);
        const transcript = await assemblyai.transcript.create({
            audio_url: audioUrl,
            language_model: 'assemblyai/whisper-1',
            auto_chapters: true,
            auto_highlights: true,
        });

        console.log(transcript);
        return NextResponse.json({ 'transcript': transcript });
    } catch (e) {
        return NextResponse.json({ 'Error': e.message }, { status: 500 });
    }
}