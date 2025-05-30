'use client'

import { useEffect } from 'react'
import { useAnalytics } from '../hooks/useAnalytics'

interface PostData {
  id: string
  title: string
  date: string
}

interface ClientPostViewInteractionsProps {
  post: PostData
  category: 'life' | 'tech'
  nextPost: PostData | null
  previousPost: PostData | null
}

export function ClientPostViewInteractions({ 
  post, 
  category, 
  nextPost, 
  previousPost 
}: ClientPostViewInteractionsProps) {
  const { trackEvent } = useAnalytics()

  // Track post view when component mounts
  useEffect(() => {
    trackEvent('post_view', {
      post_id: post.id,
      post_title: post.title,
      category: category,
      post_date: post.date
    })
  }, [post, category, trackEvent])

  useEffect(() => {
    // Track navigation clicks via event delegation
    const handleNavigationClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const linkElement = target.closest('a')
      
      if (!linkElement) return
      
      const href = linkElement.getAttribute('href')
      
      // Track back to list clicks
      if (href === `/${category}`) {
        trackEvent('back_to_list', {
          from_post_id: post.id,
          category: category
        })
      }
      
      // Track next/previous post navigation
      if (href?.includes(`/${category}/`)) {
        const targetPostId = href.split('/').pop()
        
        if (nextPost && targetPostId === nextPost.id) {
          trackEvent('post_navigation', {
            from_post_id: post.id,
            to_post_id: nextPost.id,
            direction: 'next',
            category: category
          })
        } else if (previousPost && targetPostId === previousPost.id) {
          trackEvent('post_navigation', {
            from_post_id: post.id,
            to_post_id: previousPost.id,
            direction: 'previous',
            category: category
          })
        }
      }
    }

    document.addEventListener('click', handleNavigationClick)

    return () => {
      document.removeEventListener('click', handleNavigationClick)
    }
  }, [post, category, nextPost, previousPost, trackEvent])

  return null
} 