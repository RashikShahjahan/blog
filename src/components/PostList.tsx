import { useNavigate } from 'react-router-dom'
import { posts } from '../posts/registry'

type PostListProps = {
  activeTab: 'life' | 'tech'
  setActiveTab: (tab: 'life' | 'tech') => void
  setSelectedPostId: (id: string | null) => void
}

export function PostList({ activeTab, setActiveTab, setSelectedPostId }: PostListProps) {
  const navigate = useNavigate()
  
  const sortedPosts = posts[activeTab].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('tech')}
          className={`px-4 py-2 border-2 border-black ${
            activeTab === 'tech' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
          } transition-colors duration-300`}
        >
          Tech
        </button>
        <button 
          onClick={() => setActiveTab('life')}
          className={`px-4 py-2 border-2 border-black ${
            activeTab === 'life' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
          } transition-colors duration-300`}
        >
          Life
        </button>
      </div>

      <div className="space-y-4">
        {sortedPosts.map(post => (
          <div 
            key={post.id}
            onClick={() => {
              setSelectedPostId(post.id)
              navigate(`/${activeTab}/${post.id}`)
            }}
            className="p-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <span>{post.title}</span>
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