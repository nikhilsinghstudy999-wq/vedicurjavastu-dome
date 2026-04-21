import { NextResponse } from 'next/server';

const TEXTMEBOT_API_KEY = 'cG6HkZv36oAR';
const ACHARYA_PHONE = '+916393570832';   // ← Updated number

export async function POST(request: Request) {
  try {
    const { messageText } = await request.json();

    if (!messageText) {
      return NextResponse.json(
        { error: 'Message text is required' },
        { status: 400 }
      );
    }

    const encodedMessage = encodeURIComponent(messageText);
    const apiUrl = `http://api.textmebot.com/send.php?recipient=${encodeURIComponent(ACHARYA_PHONE)}&apikey=${TEXTMEBOT_API_KEY}&text=${encodedMessage}&json=yes`;

    const response = await fetch(apiUrl, { method: 'GET' });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('TextMeBot API error:', response.status, errorText);
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}    // 5. Parse the JSON response from TextMeBot
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
