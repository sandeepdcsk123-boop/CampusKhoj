
export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type StudentProfile = {
  course?: string;
  budget?: string;
  location?: string;
  marks?: string;
};

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:4000"
).replace(/\/$/, "");

export async function askCampusKhojAI(
  messages: ChatMessage[],
  profile?: StudentProfile
): Promise<string> {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages, profile }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "AI se connect nahi ho paaya.");
  }

  return data.reply;
}
