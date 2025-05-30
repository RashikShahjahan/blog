'use client'

import { useRouter, useParams } from 'next/navigation'
import { posts } from '../posts/registry'
import Link from 'next/link'
import { useAnalytics } from '../hooks/useAnalytics'

type PostListProps = {
  setSelectedPostId?: (id: string | null) => void
}

export function PostList({ setSelectedPostId }: PostListProps) {
  const router = useRouter()
  const params = useParams()
  const { trackEvent } = useAnalytics()
  const category = params?.category as 'life' | 'tech'
  const activeTab = category as 'life' | 'tech'
  
  const sortedPosts = posts[activeTab].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const handlePostClick = (post: typeof sortedPosts[0]) => {
    trackEvent('post_click', {
      post_id: post.id,
      post_title: post.title,
      category: activeTab,
      post_date: post.date,
      source: 'post_list'
    })
    
    setSelectedPostId?.(post.id)
    router.push(`/${activeTab}/${post.id}`)
  }

  const handleCategoryClick = (newCategory: 'tech' | 'life') => {
    if (newCategory !== activeTab) {
      trackEvent('category_navigation', {
        from_category: activeTab,
        to_category: newCategory
      })
    }
  }

  return (
    <>
      <div className="flex gap-4 mb-8">
        <Link 
          href="/tech"
          onClick={() => handleCategoryClick('tech')}
          className={`px-4 py-2 border-2 border-black ${
            activeTab === 'tech' ? 'bg-black text-white' : 'hover:bg-nous-beige hover:text-black'
          } transition-colors duration-300`}
        >
          Tech
        </Link>
        <Link 
          href="/life"
          onClick={() => handleCategoryClick('life')}
          className={`px-4 py-2 border-2 border-black ${
            activeTab === 'life' ? 'bg-black text-white' : 'hover:bg-nous-beige hover:text-black'
          } transition-colors duration-300`}
        >
          Life
        </Link>
      </div>

      <div className="space-y-4">
        {sortedPosts.map(post => (
          <div 
            key={post.id}
            onClick={() => handlePostClick(post)}
            className={`p-4 border-2 border-black hover:bg-nous-beige hover:text-black transition-colors duration-300 cursor-pointer`}
          >
            <div className="flex justify-between items-center">
              <span className="terminal-content">{post.title}</span>
              <span className="text-sm text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
} 