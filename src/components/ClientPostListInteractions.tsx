'use client'

import { useEffect } from 'react'
import { useAnalytics } from '../hooks/useAnalytics'

interface PostData {
  id: string
  title: string
  date: string
}

interface ClientPostListInteractionsProps {
  category: 'life' | 'tech'
  posts: PostData[]
}

export function ClientPostListInteractions({ category, posts }: ClientPostListInteractionsProps) {
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    // Track category page view
    trackEvent('category_page_view', {
      category: category,
      posts_count: posts.length
    })
  }, [category, posts.length, trackEvent])

  useEffect(() => {
    // Track post clicks via event delegation
    const handlePostClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const linkElement = target.closest('a[href*="/' + category + '/"]')
      
      if (linkElement) {
        const href = linkElement.getAttribute('href')
        const postId = href?.split('/').pop()
        const post = posts.find(p => p.id === postId)
        
        if (post) {
          trackEvent('post_click', {
            post_id: post.id,
            post_title: post.title,
            category: category,
            post_date: post.date,
            source: 'post_list'
          })
        }
      }
    }

    // Track category navigation clicks
    const handleCategoryClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const linkElement = target.closest('a[href="/tech"], a[href="/life"]')
      
      if (linkElement) {
        const href = linkElement.getAttribute('href')
        const newCategory = href?.substring(1) as 'tech' | 'life'
        
        if (newCategory && newCategory !== category) {
          trackEvent('category_navigation', {
            from_category: category,
            to_category: newCategory
          })
        }
      }
    }

    document.addEventListener('click', handlePostClick)
    document.addEventListener('click', handleCategoryClick)

    return () => {
      document.removeEventListener('click', handlePostClick)
      document.removeEventListener('click', handleCategoryClick)
    }
  }, [category, posts, trackEvent])

  return null
} 