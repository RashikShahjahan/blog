import { Link, useLocation } from 'react-router-dom'
import { useAnalyticsTracker } from '../utils/analytics'
import { useEffect } from 'react'

function NotFound() {
  const { trackEvent } = useAnalyticsTracker()
  const location = useLocation()
  
  // Track 404 error
  useEffect(() => {
    trackEvent('error_404', {
      path: location.pathname,
      referrer: document.referrer || 'direct'
    })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-4 terminal-heading text-glitch" data-text="404">404</h1>
      <h2 className="text-2xl font-semibold mb-6 terminal-heading">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md terminal-content">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        onClick={() => trackEvent('navigate_from_404', {
          destination: 'home',
          from_path: location.pathname
        })}
        className="px-6 py-3 border-2 border-black rounded hover:bg-black hover:text-white transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound 