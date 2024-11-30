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
    <div>
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
      <div className="mt-8 flex justify-between">
        {previousPost ? (
          <button 
            onClick={() => {
              setSelectedPostId(previousPost.id)
              navigate(`/${category}/${previousPost.id}`)
            }}
            className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            ← Previous: {previousPost.title}
          </button>
        ) : (
          <button 
            onClick={() => {
              setSelectedPostId(null)
              navigate('/')
            }}
            className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            ← Back to list
          </button>
        )}
        {nextPost ? (
          <button 
            onClick={() => {
              setSelectedPostId(nextPost.id)
              navigate(`/${category}/${nextPost.id}`)
            }}
            className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            Next: {nextPost.title} →
          </button>
        ) : (
          <button 
            onClick={() => {
              setSelectedPostId(null)
              navigate('/')
            }}
            className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            Back to list →
          </button>
        )}
      </div>
    </div>
  )
} 