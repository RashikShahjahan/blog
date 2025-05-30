import { ServerPostView } from '../../../components/ServerPostView'
import ServerBlogApp from '../../../components/ServerBlogApp'
import { posts } from '../../../posts/registry'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const params = []
  
  // Generate params for tech posts
  for (const post of posts.tech) {
    params.push({
      category: 'tech',
      postId: post.id
    })
  }
  
  // Generate params for life posts
  for (const post of posts.life) {
    params.push({
      category: 'life',
      postId: post.id
    })
  }
  
  return params
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string; postId: string }> 
}): Promise<Metadata> {
  const { category, postId } = await params
  const post = posts[category as 'life' | 'tech'].find(p => p.id === postId)
  
  if (!post) {
    return {
      title: 'Post Not Found - Rashik\'s Blog',
      description: 'The requested post could not be found.',
    }
  }
  
  return {
    title: `${post.title} - Rashik's Blog`,
    description: `Read "${post.title}" on Rashik's blog. Published on ${new Date(post.date).toLocaleDateString()}.`,
  }
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ category: string; postId: string }> 
}) {
  const { category, postId } = await params
  
  return (
    <ServerBlogApp>
      <ServerPostView category={category as 'life' | 'tech'} postId={postId} />
    </ServerBlogApp>
  )
} 