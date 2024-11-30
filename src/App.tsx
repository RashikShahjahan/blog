import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PostList } from './components/PostList'
import { PostView } from './components/PostView'

type Category = 'life' | 'tech'

function App() {
  const [activeTab, setActiveTab] = useState<Category>('tech')
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

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

      <Routes>
        <Route 
          path="/" 
          element={
            <PostList 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              setSelectedPostId={setSelectedPostId}
            />
          } 
        />
        <Route 
          path="/:category/:postId" 
          element={
            <PostView 
              category={activeTab}
              postId={selectedPostId}
              setSelectedPostId={setSelectedPostId}
            />
          } 
        />
      </Routes>
    </div>
  )
}

export default App
