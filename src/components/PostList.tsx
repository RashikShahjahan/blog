import { useNavigate, useParams } from 'react-router-dom'
import { posts } from '../posts/registry'
import { Link } from 'react-router-dom'
import { useAnalyticsTracker } from '../utils/analytics'
import { useEffect } from 'react'

type PostListProps = {
  setSelectedPostId: (id: string | null) => void
}

export function PostList({ setSelectedPostId }: PostListProps) {
  const navigate = useNavigate()
  const { category } = useParams<{ category: 'life' | 'tech' }>()
  const activeTab = category as 'life' | 'tech'
  const { trackEvent } = useAnalyticsTracker()
  
  const sortedPosts = posts[activeTab].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Track list view and category
  useEffect(() => {
    trackEvent('list_view', {
      category: activeTab,
      post_count: sortedPosts.length
    })
  }, [activeTab, sortedPosts.length])

  return (
    <>
      <div className="flex gap-4 mb-8">
        <Link 
          to="/tech"
          onClick={() => {
            if (activeTab !== 'tech') {
              trackEvent('category_change', {
                from: activeTab,
                to: 'tech'
              })
            }
          }}
          className={`px-4 py-2 border-2 border-black ${
            activeTab === 'tech' ? 'bg-black text-white' : 'hover:bg-nous-beige hover:text-black'
          } transition-colors duration-300`}
        >
          Tech
        </Link>
        <Link 
          to="/life"
          onClick={() => {
            if (activeTab !== 'life') {
              trackEvent('category_change', {
                from: activeTab,
                to: 'life'
              })
            }
          }}
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
            onClick={() => {
              trackEvent('post_selected_from_list', {
                post_id: post.id,
                post_title: post.title,
                category: activeTab,
                position_in_list: sortedPosts.findIndex(p => p.id === post.id) + 1
              })
              setSelectedPostId(post.id)
              navigate(`/${activeTab}/${post.id}`)
            }}
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