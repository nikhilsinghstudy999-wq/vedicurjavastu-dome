import { NextResponse } from 'next/server';

const TEXTMEBOT_API_KEY = 'cG6HkZv36oAR';
const ACHARYA_PHONE = '+916261031710';

export async function POST(request: Request) {
  try {
    // 1. Get the message from the frontend request body
    const { messageText } = await request.json();

    if (!messageText) {
      return NextResponse.json(
        { error: 'Message text is required' },
        { status: 400 }
      );
    }

    // 2. Build the exact TextMeBot URL
    const encodedMessage = encodeURIComponent(messageText);
    const apiUrl = `http://api.textmebot.com/send.php?recipient=${encodeURIComponent(ACHARYA_PHONE)}&apikey=${TEXTMEBOT_API_KEY}&text=${encodedMessage}&json=yes`;

    // 3. Forward the request from our server (no CORS issues here)
    const response = await fetch(apiUrl, {
      method: 'GET',
    });

    // 4. Check if the request was successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error('TextMeBot API error:', response.status, errorText);
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: 500 }
      );
    }

    // 5. Parse the JSON response from TextMeBot
    const data = await response.json();

    // 6. Return the result to the frontend
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
