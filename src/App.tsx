import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { PostList } from './components/PostList'
import { PostView } from './components/PostView'
import { HelmetProvider } from 'react-helmet-async'

type Category = 'life' | 'tech'

function App() {
  const [activeTab, setActiveTab] = useState<Category>('tech')
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)
  const location = useLocation()

  // Sync states with URL parameters on mount and location changes
  useEffect(() => {
    const pathParts = location.pathname.split('/')
    if (pathParts.length === 3) {
      const category = pathParts[1] as Category
      const postId = pathParts[2]
      
      if (category === 'tech' || category === 'life') {
        setActiveTab(category)
      }
      setSelectedPostId(postId)
    }
  }, [location])

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  )
}

export default App
