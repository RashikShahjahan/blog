import { useNavigate, useParams } from 'react-router-dom'
import { posts } from '../posts/registry'
import { useEffect } from 'react'
import { useAnalyticsTracker } from '../utils/analytics'

type PostViewProps = {
  postId: string | null
  setSelectedPostId: (id: string | null) => void
}

export function PostView({ setSelectedPostId }: Omit<PostViewProps, 'postId'>) {
  const navigate = useNavigate()
  const { category, postId } = useParams<{ category: 'life' | 'tech', postId: string }>()
  const post = posts[category as 'life' | 'tech'].find(p => p.id === postId)
  const { trackEvent } = useAnalyticsTracker()
  
  useEffect(() => {
    if (postId) {
      setSelectedPostId(postId)
    }
  }, [postId, setSelectedPostId])

  // Track post view on component mount
  useEffect(() => {
    if (post) {
      trackEvent('post_view', {
        post_id: post.id,
        post_title: post.title,
        category,
        date_published: post.date
      })
    }
  }, [post, category])

  if (!post) {
    navigate('/')
    return null
  }

  const sortedPosts = posts[category as 'life' | 'tech'].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const currentIndex = sortedPosts.findIndex(p => p.id === post.id)
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null


  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <div className="flex-grow px-12 sm:px-24">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 terminal-heading">{post.title}</h2>
            <span className="text-gray-600">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="max-w-4xl mx-auto terminal-content">
            <post.component />
          </div>
        </div>
        
        <div className="fixed top-1/2 left-2 sm:left-8 -translate-y-1/2 flex flex-col items-center">
          {previousPost && (
            <button 
              onClick={() => {
                trackEvent('post_navigation', {
                  action: 'previous',
                  from_post_id: post.id,
                  to_post_id: previousPost.id,
                  category
                })
                setSelectedPostId(previousPost.id)
                navigate(`/${category}/${previousPost.id}`)
              }}
              className="group flex flex-col items-center bg-white/80 backdrop-blur-sm border border-black rounded-full p-3"
              aria-label="Previous post"
            >
              <span className="text-2xl sm:text-xl text-black opacity-50 group-hover:opacity-100 transition-opacity duration-300">◂</span>
              <span className="hidden sm:block mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 max-w-[150px] truncate">
                {previousPost.title}
              </span>
            </button>
          )}
        </div>

        <div className="fixed top-1/2 right-2 sm:right-8 -translate-y-1/2 flex flex-col items-center">
          {nextPost && (
            <button 
              onClick={() => {
                trackEvent('post_navigation', {
                  action: 'next',
                  from_post_id: post.id,
                  to_post_id: nextPost.id,
                  category
                })
                setSelectedPostId(nextPost.id)
                navigate(`/${category}/${nextPost.id}`)
              }}
              className="group flex flex-col items-center bg-white/80 backdrop-blur-sm border border-black rounded-full p-3"
              aria-label="Next post"
            >
              <span className="text-2xl sm:text-xl text-black opacity-50 group-hover:opacity-100 transition-opacity duration-300">▸</span>
              <span className="hidden sm:block mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 max-w-[150px] truncate">
                {nextPost.title}
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  )
} 