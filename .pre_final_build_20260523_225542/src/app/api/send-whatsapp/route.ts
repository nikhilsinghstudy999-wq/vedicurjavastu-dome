import { NextResponse } from 'next/server';

const TEXTMEBOT_API_KEY = 'cG6HkZv36oAR';
const ACHARYA_PHONE = '+916393570832';

export async function POST(request: Request) {
  try {
    const { messageText } = await request.json();
    if (!messageText) {
      return NextResponse.json({ error: 'Message text is required' }, { status: 400 });
    }

    const encoded = encodeURIComponent(messageText);
    const url = `http://api.textmebot.com/send.php?recipient=${encodeURIComponent(ACHARYA_PHONE)}&apikey=${TEXTMEBOT_API_KEY}&text=${encoded}&json=yes`;

    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: `API error: ${res.status}` }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
