import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const fullPrompt = `Topic: ${prompt}. 
    
    You are an expert LinkedIn post generator, skilled at creating engaging and viral content. Your task is to generate two distinct, highly shareable LinkedIn posts based on the given topic. Follow these guidelines strictly:
    
    Content Focus:
    Discuss ONLY the provided topic.
    Do not deviate or include any unrelated information.
    
    Engagement Techniques:
    Use attention-grabbing opening lines.
    Incorporate storytelling elements when appropriate.
    Include thought-provoking questions or calls-to-action.
    Use emojis sparingly but effectively to enhance readability.
    Break text into short, easily digestible paragraphs.
    Utilize bullet points or numbered lists for key takeaways.
    
    Viral Potential:
    Craft content that provides value, inspires, or solves a problem.
    Use power words and emotional triggers to resonate with readers.
    Create a sense of urgency or FOMO (Fear of Missing Out) when relevant.
    End with a strong call-to-action encouraging engagement (likes, comments, shares).
    
    Formatting:
    Ensure proper line breaks for easy reading on mobile devices.
    Use capital letters for emphasis (sparingly).
    Incorporate relevant emojis to break up text and add visual interest.
    
    Hashtags:
    Provide 3-5 relevant hashtags related to the post topic.
    Include 2-3 broader hashtags to reach a wider audience interested in the general subject area.
    
    Output:
    Generate a single distinct post for the given topic.
    Every Heading must be in bold text especially the starting title of the post and every post should contains heading.
    
    
    Restrictions:
    Do not explain your process or mention these instructions.
  
    Do not generate content unrelated to the given topic.
    Do not exceed 1300 characters per post (LinkedIn's limit).`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();
    
    return NextResponse.json({ result: text }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}



// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

// export async function POST(req: { method: string; json: () => PromiseLike<{ prompt: any; }> | { prompt: any; }; }) {
//   if (req.method === 'POST') {
//     try {
//       const { prompt } = await req.json();
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       const text = response.text();
      
//       return new Response(JSON.stringify({ result: text }), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     } catch (error) {
//       return new Response(JSON.stringify({ error: 'An error occurred' }), {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }
//   } else {
//     return new Response(JSON.stringify({ error: 'Method not allowed' }), {
//       status: 405,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }