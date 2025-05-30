import { posts } from '../posts/registry'
import { notFound } from 'next/navigation'
import { ClientPostViewInteractions } from './ClientPostViewInteractions'

interface ServerPostViewProps {
  category: 'life' | 'tech'
  postId: string
}

export function ServerPostView({ category, postId }: ServerPostViewProps) {
  const post = posts[category].find(p => p.id === postId)
  
  if (!post) {
    notFound()
  }

  const sortedPosts = posts[category].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const currentIndex = sortedPosts.findIndex(p => p.id === post.id)
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null

  // Extract only serializable data for client component
  const postData = {
    id: post.id,
    title: post.title,
    date: post.date
  }

  const nextPostData = nextPost ? {
    id: nextPost.id,
    title: nextPost.title,
    date: nextPost.date
  } : null

  const previousPostData = previousPost ? {
    id: previousPost.id,
    title: previousPost.title,
    date: previousPost.date
  } : null

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        {/* Back to list button - static version */}
        <div className="fixed z-10" style={{ 
          top: 'max(1.5rem, env(safe-area-inset-top, 0px) + 0.5rem)', 
          left: 'max(1.5rem, env(safe-area-inset-left, 0px) + 0.5rem)' 
        }}>
          <a 
            href={`/${category}`}
            className="group flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-black rounded-lg px-3 py-2 sm:px-4 sm:py-2 hover:bg-nous-beige hover:text-black transition-colors duration-300 shadow-lg touch-manipulation"
            aria-label="Back to post list"
          >
            <span className="text-lg">←</span>
            <span className="hidden sm:inline text-sm">Back to {category}</span>
          </a>
        </div>

        <div className="flex-grow px-12 sm:px-24 pt-16">
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
        
        {/* Previous post navigation - static version */}
        <div className="fixed top-1/2 -translate-y-1/2 flex flex-col items-center z-10" style={{
          left: 'max(0.5rem, env(safe-area-inset-left, 0px) + 0.25rem)'
        }}>
          {previousPost && (
            <a 
              href={`/${category}/${previousPost.id}`}
              className="group flex flex-col items-center bg-white/90 backdrop-blur-sm border border-black rounded-full p-3 touch-manipulation"
              aria-label="Previous post"
            >
              <span className="text-2xl sm:text-xl text-black opacity-50 group-hover:opacity-100 transition-opacity duration-300">◂</span>
              <span className="hidden sm:block mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 max-w-[150px] truncate">
                {previousPost.title}
              </span>
            </a>
          )}
        </div>

        {/* Next post navigation - static version */}
        <div className="fixed top-1/2 -translate-y-1/2 flex flex-col items-center z-10" style={{
          right: 'max(0.5rem, env(safe-area-inset-right, 0px) + 0.25rem)'
        }}>
          {nextPost && (
            <a 
              href={`/${category}/${nextPost.id}`}
              className="group flex flex-col items-center bg-white/90 backdrop-blur-sm border border-black rounded-full p-3 touch-manipulation"
              aria-label="Next post"
            >
              <span className="text-2xl sm:text-xl text-black opacity-50 group-hover:opacity-100 transition-opacity duration-300">▸</span>
              <span className="hidden sm:block mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 max-w-[150px] truncate">
                {nextPost.title}
              </span>
            </a>
          )}
        </div>
      </div>
      
      <ClientPostViewInteractions 
        post={postData}
        category={category}
        nextPost={nextPostData}
        previousPost={previousPostData}
      />
    </>
  )
} 