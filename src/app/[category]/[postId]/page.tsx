import { PostView } from '../../../components/PostView'
import BlogApp from '../../../components/BlogApp'
import { posts } from '../../../posts/registry'

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

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ category: string; postId: string }> 
}) {
  const { category, postId } = await params
  
  return (
    <BlogApp>
      <PostView />
    </BlogApp>
  )
} 