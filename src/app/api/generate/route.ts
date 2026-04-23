import { NextResponse } from 'next/server';
import { PresentationArchitect } from '@/lib/slid1st/architect-agent';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, pages } = body;

    if (!topic) {
      return NextResponse.json(
        { success: false, error: 'Topic is required.' },
        { status: 400 }
      );
    }

    console.log(`[API] Received generation request for topic: ${topic}`);
    
    // Call the Architect Agent (Adoption from BERNAS Transmutator Protocol)
    const result = await PresentationArchitect.generate(topic, pages || 10);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.agentFeedback },
        { status: 500 }
      );
    }

    return NextResponse.json(result);

  } catch (error: any) {
    console.error('[API ROUTE ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
