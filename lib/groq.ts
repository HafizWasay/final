import Groq from 'groq-sdk';

const apiKey = process.env.GROQ_API_KEY;
if (!apiKey) {
  throw new Error('The GROQ_API_KEY environment variable is missing or empty.');
}

const groq = new Groq({ apiKey });

// Define the message type expected by the SDK
interface ChatCompletionMessageParam {
  role: 'user' | 'assistant' | 'system';
  content: string;
  name?: string; // Include any additional properties required by the SDK
}

// Export the function and the type
export async function getGroqChatCompletion(messages: ChatCompletionMessageParam[], model: string) {
  try {
    const response = await groq.chat.completions.create({
      messages,
      model,
    });
    return response;
  } catch (error) {
    console.error("Error fetching completion from Groq:", error);
    throw new Error('Failed to fetch completion from Groq.');
  }
}

export type { ChatCompletionMessageParam }; // Export the type for external usage
