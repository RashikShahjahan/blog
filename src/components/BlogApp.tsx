'use client'

import { useEffect } from 'react'

export default function BlogApp({ children }: { children: React.ReactNode }) {
  // Set the theme to 'nous' for the entire app
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nous');
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold terminal-heading">Rashik's Blog</h1>
          <a 
            href="https://www.rashik.sh" 
            className="text-black hover:opacity-70 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my main site →
          </a>
        </div>
        
        {children}
      </div>
    </div>
  )
} 