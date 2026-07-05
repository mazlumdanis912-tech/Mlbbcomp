const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? '';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  reply: string;
  error?: string;
}

export async function sendChatMessage(
  messages: ChatMessage[],
  useWebSearch = false,
): Promise<ChatResponse> {
  try {
    const res = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, useWebSearch }),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({})) as { error?: string };
      return { reply: body.error ?? 'Sunucu hatası oluştu.', error: body.error };
    }
    const data = await res.json() as ChatResponse;
    return data;
  } catch {
    return { reply: 'Sunucuya bağlanılamıyor. İnternet bağlantınızı kontrol edin.', error: 'network' };
  }
}

export async function storeSolution(
  problemKeywords: string,
  problemSummary: string,
  solution: string,
): Promise<void> {
  try {
    await fetch(`${BASE_URL}/api/chat/solution`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ problemKeywords, problemSummary, solution }),
    });
  } catch {
    // Silently fail – non-critical
  }
}
