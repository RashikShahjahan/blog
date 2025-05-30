'use client'

import { useRouter, useParams } from 'next/navigation'
import { posts } from '../posts/registry'
import { useEffect } from 'react'
import { useAnalytics } from '../hooks/useAnalytics'

export function PostView() {
  const router = useRouter()
  const params = useParams()
  const { trackEvent } = useAnalytics()
  const category = params?.category as 'life' | 'tech'
  const postId = params?.postId as string
  const post = posts[category as 'life' | 'tech'].find(p => p.id === postId)
  
  // Track post view when component mounts or post changes
  useEffect(() => {
    if (post) {
      trackEvent('post_view', {
        post_id: post.id,
        post_title: post.title,
        category: category,
        post_date: post.date
      })
    }
  }, [post, trackEvent, category])

  if (!post) {
    router.push('/')
    return null
  }

  const sortedPosts = posts[category as 'life' | 'tech'].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const currentIndex = sortedPosts.findIndex(p => p.id === post.id)
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null

  const handleNavigation = (targetPost: typeof post, direction: 'next' | 'previous') => {
    trackEvent('post_navigation', {
      from_post_id: post.id,
      to_post_id: targetPost.id,
      direction: direction,
      category: category
    })
    
    router.push(`/${category}/${targetPost.id}`)
  }

  const handleBackToList = () => {
    trackEvent('back_to_list', {
      from_post_id: post.id,
      category: category
    })
    
    router.push(`/${category}`)
  }

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        {/* Back to list button */}
        <div className="fixed z-10" style={{ 
          top: 'max(1.5rem, env(safe-area-inset-top, 0px) + 0.5rem)', 
          left: 'max(1.5rem, env(safe-area-inset-left, 0px) + 0.5rem)' 
        }}>
          <button 
            onClick={handleBackToList}
            className="group flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-black rounded-lg px-3 py-2 sm:px-4 sm:py-2 hover:bg-nous-beige hover:text-black transition-colors duration-300 shadow-lg touch-manipulation"
            aria-label="Back to post list"
          >
            <span className="text-lg">←</span>
            <span className="hidden sm:inline text-sm">Back to {category}</span>
          </button>
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
        
        <div className="fixed top-1/2 -translate-y-1/2 flex flex-col items-center z-10" style={{
          left: 'max(0.5rem, env(safe-area-inset-left, 0px) + 0.25rem)'
        }}>
          {previousPost && (
            <button 
              onClick={() => handleNavigation(previousPost, 'previous')}
              className="group flex flex-col items-center bg-white/90 backdrop-blur-sm border border-black rounded-full p-3 touch-manipulation"
              aria-label="Previous post"
            >
              <span className="text-2xl sm:text-xl text-black opacity-50 group-hover:opacity-100 transition-opacity duration-300">◂</span>
              <span className="hidden sm:block mt-2 text-sm text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 max-w-[150px] truncate">
                {previousPost.title}
              </span>
            </button>
          )}
        </div>

        <div className="fixed top-1/2 -translate-y-1/2 flex flex-col items-center z-10" style={{
          right: 'max(0.5rem, env(safe-area-inset-right, 0px) + 0.25rem)'
        }}>
          {nextPost && (
            <button 
              onClick={() => handleNavigation(nextPost, 'next')}
              className="group flex flex-col items-center bg-white/90 backdrop-blur-sm border border-black rounded-full p-3 touch-manipulation"
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