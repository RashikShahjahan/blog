import { ReactNode } from 'react'
import { ClientThemeProvider } from './ClientThemeProvider'

interface ServerBlogAppProps {
  children: ReactNode
}

export default function ServerBlogApp({ children }: ServerBlogAppProps) {
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
      <ClientThemeProvider />
    </div>
  )
} 