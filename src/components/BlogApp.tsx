'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BlogApp({ children }: { children: React.ReactNode }) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)
  const pathname = usePathname()

  // Set the theme to 'nous' for the entire app
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nous');
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
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
          {selectedPostId && (
            <Link 
              href="/" 
              className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors"
              onClick={() => {
                setSelectedPostId(null)
              }}
            >
              Back to List
            </Link>
          )}
        </div>
        {children}
      </div>
    </div>
  )
} 