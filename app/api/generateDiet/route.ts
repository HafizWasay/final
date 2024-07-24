import { NextRequest, NextResponse } from 'next/server';
import { getGroqChatCompletion, ChatCompletionMessageParam } from '../../../lib/groq';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    const requiredFields = ['name', 'age', 'gender', 'weight', 'height', 'activityLevel', 'dietaryGoals'];
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        return NextResponse.json({ error: `${field} is required and cannot be empty.` }, { status: 400 });
      }
    }

    const messages: ChatCompletionMessageParam[] = [
      { role: 'user', content: `Create a personalized diet plan using the following information: ${JSON.stringify(formData)}` },
    ];
    const model = "llama3-8b-8192"; // Replace with the appropriate model
    const response = await getGroqChatCompletion(messages, model);

    return NextResponse.json({ dietPlan: response.choices[0]?.message?.content || "No diet plan generated." });
  } catch (error) {
    console.error('Error generating diet plan:', error);
    return NextResponse.json({ error: "Failed to generate diet plan." }, { status: 500 });
  }
}
