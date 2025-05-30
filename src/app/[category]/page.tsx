import { PostList } from '../../components/PostList'
import BlogApp from '../../components/BlogApp'

export async function generateStaticParams() {
  return [
    { category: 'tech' },
    { category: 'life' }
  ]
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  // We await params to satisfy Next.js requirements but don't need the values
  await params
  
  return (
    <BlogApp>
      <PostList />
    </BlogApp>
  )
} 