import { useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { PostList } from './components/PostList'
import { PostView } from './components/PostView'

function App() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Rashik's Blog</h1>
          <a 
            href="https://www.rashik.sh" 
            className="text-gray-600 hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my main site →
          </a>
        </div>
        {selectedPostId && (
          <Link 
            to="/" 
            className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors"
            onClick={() => setSelectedPostId(null)}
          >
            Back to List
          </Link>
        )}
      </div>

      <Routes>
        <Route 
          path="/" 
          element={
            <Navigate to="/tech" replace />
          } 
        />
        <Route 
          path="/:category" 
          element={
            <PostList 
              setSelectedPostId={setSelectedPostId}
            />
          } 
        />
        <Route 
          path="/:category/:postId" 
          element={
            <PostView 
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
