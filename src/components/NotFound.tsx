import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-4 terminal-heading text-glitch" data-text="404">404</h1>
      <h2 className="text-2xl font-semibold mb-6 terminal-heading">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md terminal-content">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 border-2 border-black rounded hover:bg-black hover:text-white transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound 