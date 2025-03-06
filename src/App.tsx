import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { PostList } from './components/PostList'
import { PostView } from './components/PostView'
import NotFound  from './components/NotFound'

function App() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

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
                setSelectedPostId={setSelectedPostId}
              />
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
