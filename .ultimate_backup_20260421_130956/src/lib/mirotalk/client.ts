const MIROTALK_URL = process.env.NEXT_PUBLIC_MIROTALK_URL || 'https://p2p.mirotalk.com';
const API_KEY_SECRET = process.env.NEXT_PUBLIC_MIROTALK_API_KEY || 'mirotalkp2p_default_secret';

export interface MiroTalkMeetingOptions {
  room?: string;
  name?: string;
  avatar?: string;
  audio?: boolean;
  video?: boolean;
  screen?: boolean;
  hide?: boolean;
  notify?: boolean;
  token?: string;
}

export async function createMiroTalkMeeting(options: MiroTalkMeetingOptions = {}): Promise<string> {
  const body: Record<string, unknown> = {};
  if (options.room) body.room = options.room;
  if (options.name) body.name = options.name;
  if (options.avatar !== undefined) body.avatar = options.avatar;
  if (options.audio !== undefined) body.audio = options.audio;
  if (options.video !== undefined) body.video = options.video;
  if (options.screen !== undefined) body.screen = options.screen;
  if (options.hide !== undefined) body.hide = options.hide;
  if (options.notify !== undefined) body.notify = options.notify;
  if (options.token) body.token = options.token;

  const response = await fetch(`${MIROTALK_URL}/api/v1/meeting`, {
    method: 'POST',
    headers: {
      // CRITICAL: MiroTalk expects lowercase 'authorization'
      'authorization': API_KEY_SECRET,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('MiroTalk authorization failed (403 Forbidden). Check your API key.');
    }
    const errorText = await response.text();
    throw new Error(`MiroTalk API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  if (!data.meeting) {
    throw new Error('MiroTalk API returned unexpected response: missing "meeting" field');
  }
  return data.meeting as string;
}
