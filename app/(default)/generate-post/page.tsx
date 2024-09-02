"use client"

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

async function run(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  
  return text;
}

export default function GeneratePost() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleGeneratePost = async () => {
    try {
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
      const generatedText = await run(fullPrompt);
      setResult(generatedText);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred. Please try again.');
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true">
          <svg className="max-w-full" width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG content */}
          </svg>
        </div>

        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">Generate a Post!</h1>
            <p className="text-xl text-gray-400 mb-8">Input a Prompt</p>
            
            <div className="flex justify-between">
              <div className="w-1/3 bg-gray-800 p-4 rounded-lg shadow-md text-gray-200 font-sans">
                <h2 className="text-lg font-semibold mb-4 text-purple-400">Trending Tech Topics</h2>
                <ul className="text-sm text-purple-400 space-y-2">
                  <li>#tech</li>
                  <li>#AI</li>
                  <li>#MachineLearning</li>
                  <li>#Blockchain</li>
                  <li>#Cybersecurity</li>
                  <li>#CloudComputing</li>
                  <li>#DataScience</li>
                  <li>#IoT</li>
                  <li>#BigData</li>
                  <li>#ARVR</li>
                  <li>#DevOps</li>
                  <li>#Robotics</li>
                  <li>#QuantumComputing</li>
                  <li>#5G</li>
                  <li>#EdgeComputing</li>
                  <li>#Biometrics</li>
                  <li>#FinTech</li>
                  <li>#GreenTech</li>
                </ul>
              </div>
              
              <div className="w-2/3 mx-4 bg-gray-700 p-4 rounded-lg shadow-md font-sans">
                <textarea 
                  className="w-full h-32 p-2 border border-gray-500 rounded-md mb-4 bg-gray-600 text-gray-200" 
                  placeholder="Enter your prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                ></textarea>
                <button 
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                  onClick={handleGeneratePost}
                >
                  Generate your post!
                </button>

                <div className="mt-8 bg-gray-300 p-4 rounded-lg shadow-md w-full">
                  <p className="text-gray-800 whitespace-pre-wrap"><ReactMarkdown>{result}</ReactMarkdown></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
