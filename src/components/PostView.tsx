import { useNavigate } from 'react-router-dom'
import { posts } from '../posts/registry'

type PostViewProps = {
  category: 'life' | 'tech'
  postId: string | null
  setSelectedPostId: (id: string | null) => void
}

export function PostView({ category, postId, setSelectedPostId }: PostViewProps) {
  const navigate = useNavigate()
  const post = posts[category].find(p => p.id === postId)
  
  if (!post) {
    navigate('/')
    return null
  }

  const sortedPosts = posts[category].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const currentIndex = sortedPosts.findIndex(p => p.id === post.id)
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-grow">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
          <span className="text-gray-600">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        <post.component />
      </div>
      
      <div className="fixed top-1/2 left-8 -translate-y-1/2 flex flex-col items-center">
        {previousPost ? (
          <button 
            onClick={() => {
              setSelectedPostId(previousPost.id)
              navigate(`/${category}/${previousPost.id}`)
            }}
            className="group flex flex-col items-center"
            aria-label="Previous post"
          >
            <span className="text-6xl text-gray-800 opacity-50 group-hover:opacity-100 transition-opacity duration-300">←</span>
            <span className="mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 max-w-[150px] truncate">
              {previousPost.title}
            </span>
          </button>
        ) : (
          <button 
            onClick={() => {
              setSelectedPostId(null)
              navigate('/')
            }}
            className="group flex flex-col items-center"
            aria-label="Back to list"
          >
            <span className="text-6xl text-gray-800 opacity-50 group-hover:opacity-100 transition-opacity duration-300">←</span>
            <span className="mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              Back to list
            </span>
          </button>
        )}
      </div>

      <div className="fixed top-1/2 right-8 -translate-y-1/2 flex flex-col items-center">
        {nextPost ? (
          <button 
            onClick={() => {
              setSelectedPostId(nextPost.id)
              navigate(`/${category}/${nextPost.id}`)
            }}
            className="group flex flex-col items-center"
            aria-label="Next post"
          >
            <span className="text-6xl text-gray-800 opacity-50 group-hover:opacity-100 transition-opacity duration-300">→</span>
            <span className="mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 max-w-[150px] truncate">
              {nextPost.title}
            </span>
          </button>
        ) : (
          <button 
            onClick={() => {
              setSelectedPostId(null)
              navigate('/')
            }}
            className="group flex flex-col items-center"
            aria-label="Back to list"
          >
            <span className="text-6xl text-gray-800 opacity-50 group-hover:opacity-100 transition-opacity duration-300">→</span>
            <span className="mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              Back to list
            </span>
          </button>
        )}
      </div>
    </div>
  )
} 