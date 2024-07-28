import Link from 'next/link';
import React from 'react';

export default function GeneratePost() {
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

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <input type="file" accept=".pdf" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" />
            </div>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-8">
              <Link href="/default" legacyBehavior>
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">Back to Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
