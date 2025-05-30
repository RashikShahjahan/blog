import { posts } from '../posts/registry'
import Link from 'next/link'
import { ClientPostListInteractions } from './ClientPostListInteractions'

interface ServerPostListProps {
  category: 'life' | 'tech'
}

export function ServerPostList({ category }: ServerPostListProps) {
  const sortedPosts = posts[category].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Extract only serializable data for client component
  const postsData = sortedPosts.map(post => ({
    id: post.id,
    title: post.title,
    date: post.date
  }))

  return (
    <>
      <div className="flex gap-4 mb-8">
        <Link 
          href="/tech"
          className={`px-4 py-2 border-2 border-black ${
            category === 'tech' ? 'bg-black text-white' : 'hover:bg-nous-beige hover:text-black'
          } transition-colors duration-300`}
        >
          Tech
        </Link>
        <Link 
          href="/life"
          className={`px-4 py-2 border-2 border-black ${
            category === 'life' ? 'bg-black text-white' : 'hover:bg-nous-beige hover:text-black'
          } transition-colors duration-300`}
        >
          Life
        </Link>
      </div>

      <div className="space-y-4">
        {sortedPosts.map(post => (
          <Link
            key={post.id}
            href={`/${category}/${post.id}`}
            className={`block p-4 border-2 border-black hover:bg-nous-beige hover:text-black transition-colors duration-300`}
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
          </Link>
        ))}
      </div>
      
      <ClientPostListInteractions category={category} posts={postsData} />
    </>
  )
} 