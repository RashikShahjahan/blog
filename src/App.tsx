import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { PostList } from './components/PostList'
import { PostView } from './components/PostView'
import NotFound  from './components/NotFound'
import { useAnalyticsTracker } from './utils/analytics'

function App() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)
  const location = useLocation()
  const { trackEvent } = useAnalyticsTracker()

  // Set the theme to 'nous' for the entire app
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nous');
  }, []);

  // Track page navigation
  useEffect(() => {
    const path = location.pathname
    const category = path.split('/')[1] || 'home'
    
    trackEvent('page_navigation', {
      path,
      category,
      has_selected_post: !!selectedPostId
    })
  }, [location.pathname, selectedPostId])

  // Enhanced setSelectedPostId with tracking
  const handlePostSelection = (postId: string | null) => {
    if (postId) {
      trackEvent('post_selected', {
        post_id: postId,
        from_path: location.pathname
      })
    }
    setSelectedPostId(postId)
  }

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
              onClick={() => trackEvent('external_link_click', {
                destination: 'main_site',
                link_text: 'Visit my main site →'
              })}
            >
              Visit my main site →
            </a>
          </div>
          {selectedPostId && (
            <Link 
              to="/" 
              className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors"
              onClick={() => {
                trackEvent('navigation_click', {
                  action: 'return_to_list',
                  from_post_id: selectedPostId
                })
                handlePostSelection(null)
              }}
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
                setSelectedPostId={handlePostSelection}
              />
            } 
          />
          <Route 
            path="/:category/:postId" 
            element={
              <PostView 
                setSelectedPostId={handlePostSelection}
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
