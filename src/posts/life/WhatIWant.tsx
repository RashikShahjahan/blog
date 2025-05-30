'use client'

import { useEffect } from 'react';

function WhatIWant() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <article className="prose prose-lg max-w-4xl px-4 md:px-8 py-12 mx-auto">
      <p className="text-gray-700 leading-relaxed mb-6">
        Growing up, I was handed a giant guidebook full of customs, rules, values, and beliefs. 
        However, like many of my peers, I found this guidebook increasingly unhelpful and, at times, 
        even harmful. Thankfully, Uncle Iroh came to the rescue:
      </p>

      <blockquote 
        className="instagram-media w-full max-w-3xl mx-auto my-8" 
        data-instgrm-permalink="https://www.instagram.com/reel/DC167susRQw/"
        data-instgrm-version="14"
      >
        <div>
          <a href="https://www.instagram.com/reel/DC167susRQw/">
            View this post on Instagram
          </a>
        </div>
      </blockquote>

      <p className="text-gray-700 leading-relaxed mb-8">
        This inspiration led me to look inward. I realized that my life had been optimized for achieving 
        external goals—not things I genuinely wanted to do, but things I believed I should do. This 
        realization didn't happen overnight; it has been a bumpy journey spanning my teenage years to 
        my late twenties. More recently, I've learned to articulate these ideas more clearly. Here's a 
        list of the things I've discovered I truly want in life:
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            1. I don't want to suffer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Suffering can be both physical and mental. Examples include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Injuries</li>
            <li>Health problems</li>
            <li>Emotional stress</li>
            <li>Lack of sleep</li>
            <li>Hunger and thirst</li>
            <li>Poor living conditions</li>
            <li>Living in fear or uncertainty</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To alleviate suffering, financial stability is crucial. A traditional capitalist mindset can be 
            helpful in securing resources to meet these basic needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            2. I want to feel good
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Feeling good includes immediate sources of well-being, such as entertainment, comfort, and pleasure. 
            While money is an important factor, diverse skills and strong social connections also play a 
            significant role in enhancing one's quality of life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            3. I want to love and be loved
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Being loved means having people who genuinely care about and support me through life's challenges. 
            This support can come from family, friends, and the broader community. To love others means 
            offering that same care and support in return.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            4. I want to be free
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Freedom, for me, is about having control over my life. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Freedom of thought and expression</li>
            <li>Access to education and training</li>
            <li>Access to transportation and mobility</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Such freedoms often rely on supportive systems and governance. Unfortunately, those living under 
            poor infrastructure or authoritarian regimes face significant barriers to achieving these freedoms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            5. I want to accomplish
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Once I am happy and free, I aspire to work toward long-term achievements. These could include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Winning a prestigious award</li>
            <li>Holding a position of influence</li>
            <li>Making a discovery</li>
            <li>Building something impactful</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            6. I want to grow
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Once my basic needs are met, I've found fulfillment in thinking beyond myself. By this, I don't 
            mean seeking power or influence to manipulate others for personal gain. Instead, I mean forming 
            meaningful connections and striving to help others in a genuine way.
          </p>
        </section>
      </div>
    </article>
  )
}

export default WhatIWant