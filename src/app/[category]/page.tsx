import { ServerPostList } from '../../components/ServerPostList'
import ServerBlogApp from '../../components/ServerBlogApp'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return [
    { category: 'tech' },
    { category: 'life' }
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  
  return {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} - Rashik's Blog`,
    description: `Browse ${category} posts on Rashik's blog`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  
  return (
    <ServerBlogApp>
      <ServerPostList category={category as 'life' | 'tech'} />
    </ServerBlogApp>
  )
} 