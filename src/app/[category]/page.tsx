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
  
  const title = `${category.charAt(0).toUpperCase() + category.slice(1)} - Rashik's Blog`
  const description = `Browse ${category} posts on Rashik's blog`
  const url = `https://blog.rashik.sh/${category}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: 'https://blog.rashik.sh/image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Rashik's Blog",
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://blog.rashik.sh/image.png'],
      site: '@rashik_sh',
      creator: '@rashik_sh',
    },
    alternates: {
      canonical: url,
    },
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