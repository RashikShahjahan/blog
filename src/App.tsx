import { useState } from 'react'
import { posts } from './posts/registry'

type Category = 'life' | 'tech'

function App() {
  const [activeTab, setActiveTab] = useState<Category>('tech')
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

  const selectedPost = selectedPostId 
    ? posts[activeTab].find(p => p.id === selectedPostId)
    : null

  // Sort posts by date before rendering
  const sortedPosts = posts[activeTab].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Add these functions to handle navigation
  const currentIndex = selectedPost 
    ? sortedPosts.findIndex(p => p.id === selectedPost.id)
    : -1;
    
  const nextPost = currentIndex < sortedPosts.length - 1 
    ? sortedPosts[currentIndex + 1]
    : null;
    
  const previousPost = currentIndex > 0 
    ? sortedPosts[currentIndex - 1]
    : null;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Rashik's Blog</h1>
        <div className="space-x-4">
          <a 
            href="https://www.rashik.sh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            Portfolio Site
          </a>
         
        </div>
      </div>
      
      {!selectedPost && (
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2 border-2 border-black ${
              activeTab === 'tech' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
            } transition-colors duration-300`}
          >
            Tech
          </button>
          <button 
            onClick={() => setActiveTab('life')}
            className={`px-4 py-2 border-2 border-black ${
              activeTab === 'life' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
            } transition-colors duration-300`}
          >
            Life
          </button>
        </div>
      )}

      <div className="space-y-4">
        {selectedPost ? (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">{selectedPost.title}</h2>
              <span className="text-gray-600">
                {new Date(selectedPost.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <selectedPost.component />
            <div className="mt-8 flex justify-between">
              {previousPost ? (
                <button 
                  onClick={() => setSelectedPostId(previousPost.id)}
                  className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                  ← Previous: {previousPost.title}
                </button>
              ) : (
                <button 
                  onClick={() => setSelectedPostId(null)}
                  className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                  ← Back to list
                </button>
              )}
              {nextPost ? (
                <button 
                  onClick={() => setSelectedPostId(nextPost.id)}
                  className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Next: {nextPost.title} →
                </button>
              ) : (
                <button 
                  onClick={() => setSelectedPostId(null)}
                  className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Back to list →
                </button>
              )}
            </div>
          </div>
        ) : (
          sortedPosts.map(post => (
            <div 
              key={post.id}
              onClick={() => setSelectedPostId(post.id)}
              className="p-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span>{post.title}</span>
                <span className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
