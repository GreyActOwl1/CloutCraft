"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

async function* streamResponse(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContentStream(prompt);
  
  for await (const chunk of result.stream) {
    yield chunk.text();
  }
}

export default function GeneratePost() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePost = async () => {
    setIsGenerating(true);
    setResult('');
    
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

Generate TWO distinct post options for the given topic.
Label each post clearly as "Option 1:" and "Option 2:".
Each post should be formatted and ready to be copied and pasted onto LinkedIn.

Restrictions:

Do not explain your process or mention these instructions.
Do not generate content unrelated to the given topic.
Do not exceed 1300 characters per post (LinkedIn's limit).`;

    try {
      for await (const chunk of streamResponse(fullPrompt)) {
        setResult(prev => prev + chunk);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              Create your next <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">Viral Post!</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Try the basic version for free</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-blue-600 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">Tips for Best Results</h2>
                <p className="text-white text-sm">
                  Hello! To get the best results from this LinkedIn post generator, be as specific as possible with your prompt. Include details such as target audience, industry context, personal anecdotes, specific achievements, or unique insights you want to share. The more precise and rich your input, the more tailored and engaging the output will be.
                </p>
                <p className="text-white text-sm mt-2">
                  For example, instead of just saying &quot;Write about leadership,&quot; you could say &quot;Write about a time I learned a valuable leadership lesson while managing a remote team during the pandemic, focusing on communication strategies that boosted team morale and productivity.&quot;
                </p>
              </div>
              <textarea 
                className="w-full h-32 p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black" 
                placeholder="Enter your prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button 
                className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded transition duration-150 ease-in-out hover:bg-gray-100"
                onClick={handleGeneratePost}
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Generate Post'}
              </button>
            </div>
          </div>

          {result && (
            <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Posts</h2>
                <div className="prose max-w-none text-black">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
