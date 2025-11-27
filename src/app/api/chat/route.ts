import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    const botUrl = process.env.BOT_URL || 'https://bot-oei9.onrender.com';
    console.log('Calling bot at:', `${botUrl}/api/chat`);
    console.log('Message:', message);
    
    const response = await fetch(`${botUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
      signal: AbortSignal.timeout(60000), // 60 second timeout for Render cold starts
    });
    
    console.log('Bot response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Bot error response:', errorText);
      return NextResponse.json(
        { success: false, error: 'Bot server returned an error' },
        { status: response.status }
      );
    }
    
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Bot returned non-JSON:', text.substring(0, 500));
      return NextResponse.json(
        { success: false, error: 'Bot server is starting up. Please wait and try again.' },
        { status: 500 }
      );
    }
    
    const data = await response.json();
    console.log('Bot response:', data);
    
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Chat API error:', error);
    
    if (error.name === 'TimeoutError') {
      return NextResponse.json(
        { success: false, error: 'Bot server is waking up from sleep. Please try again in 30 seconds.' },
        { status: 504 }
      );
    }
    
    if (error.message?.includes('fetch failed') || error.code === 'ECONNREFUSED') {
      return NextResponse.json(
        { success: false, error: 'Cannot connect to bot server. It may be starting up, please wait a moment.' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: error.message || 'Unknown error occurred' },
      { status: 500 }
    );
  }
}
