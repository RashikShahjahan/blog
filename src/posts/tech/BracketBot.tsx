"use client";

import { useEffect } from 'react';

// Declare Twitter widget types
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

function BracketBot() {
  useEffect(() => {
    // Load Twitter widget script if not already loaded
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.head.appendChild(script);
      
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      };
    } else if (window.twttr && window.twttr.widgets) {
      // If script is already loaded, just reload widgets
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <article className="prose prose-lg max-w-none px-4 py-8 mx-auto">
      <p className="text-gray-700 leading-relaxed mb-6">
        I made a self programming robot which takes in voice commands and writes python code for motor control based on those commands.
      </p>

      <div className="mb-6 flex justify-center">
        <div className="max-w-lg">
          <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
            <p lang="en" dir="ltr">
              <a href="https://twitter.com/abhijain2706?ref_src=twsrc%5Etfw">@abhijain2706</a>{' '}
              <a href="https://twitter.com/onlychans1?ref_src=twsrc%5Etfw">@onlychans1</a> and<br />
              I spent the last weekend building a{' '}
              <a href="https://twitter.com/hashtag/bracketbot?src=hash&amp;ref_src=twsrc%5Etfw">#bracketbot</a>
              <br />
              <br />
              Thank you,{' '}
              <a href="https://twitter.com/sincethestudy?ref_src=twsrc%5Etfw">@sincethestudy</a>{' '}
              for hosting the coolest hackathon ever{' '}
              <a href="https://t.co/HW4sh8BGuG">pic.twitter.com/HW4sh8BGuG</a>
            </p>
            &mdash; Rashik Shahjahan (@RashikShahjahan){' '}
            <a href="https://twitter.com/RashikShahjahan/status/1889340401384915446?ref_src=twsrc%5Etfw">
              February 11, 2025
            </a>
          </blockquote>
          
          {/* Fallback link in case embed doesn't load */}
          <div className="mt-4 text-center">
            <a 
              href="https://twitter.com/RashikShahjahan/status/1889340401384915446" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              View Tweet on Twitter →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BracketBot; 