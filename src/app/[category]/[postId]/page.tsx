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

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const description = `${post.description || post.title} - Posted on ${formattedDate}`
  const url = `https://blog.rashik.sh/${category}/${postId}`
  const imageUrl = post.image || 'https://blog.rashik.sh/image.png'
  
  return {
    title: `${post.title} - Rashik's Blog`,
    description,
    openGraph: {
      title: post.title,
      description,
      url,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Rashik's Blog",
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [imageUrl],
      site: '@rashik_sh',
      creator: '@rashik_sh',
    },
    alternates: {
      canonical: url,
    },
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