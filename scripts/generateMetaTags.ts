import { posts } from '../src/posts/registry'
import fs from 'fs/promises'
import path from 'path'

async function generateMetaTagFiles() {
  const categories = Object.keys(posts) as Array<keyof typeof posts>
  
  // Create dist directory if it doesn't exist
  await fs.mkdir('dist/meta', { recursive: true })

  for (const category of categories) {
    for (const post of posts[category]) {
      const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${post.title}</title>
    <meta name="description" content="${post.title} - Posted on ${formattedDate}">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://blog.rashik.sh/${category}/${post.id}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.title} - Posted on ${formattedDate}">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="blog.rashik.sh">
    <meta property="twitter:url" content="https://blog.rashik.sh/${category}/${post.id}">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.title} - Posted on ${formattedDate}">

    <meta http-equiv="refresh" content="0;url=https://blog.rashik.sh/${category}/${post.id}">
  </head>
  <body>
    <p>Redirecting to <a href="https://blog.rashik.sh/${category}/${post.id}">https://blog.rashik.sh/${category}/${post.id}</a>...</p>
  </body>
</html>`

      await fs.writeFile(
        path.join('dist/meta', `${category}-${post.id}.html`),
        html
      )
    }
  }
}

generateMetaTagFiles() 