import { posts } from '../src/posts/registry'
import fs from 'fs/promises'
import path from 'path'

async function generateMetaTagFiles() {
  const categories = Object.keys(posts) as Array<keyof typeof posts>
  
  // Create dist directory if it doesn't exist
  await fs.mkdir('dist', { recursive: true })

  for (const category of categories) {
    // Create category directory
    await fs.mkdir(`dist/${category}`, { recursive: true })

    for (const post of posts[category]) {
      const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${post.title}</title>
    <meta name="description" content="${post.description || post.title} - Posted on ${formattedDate}">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://blog.rashik.sh/${category}/${post.id}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.description || post.title} - Posted on ${formattedDate}">
    <meta property="og:image" content="${post.image || 'https://blog.rashik.sh/default-image.jpg'}">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="blog.rashik.sh">
    <meta property="twitter:url" content="https://blog.rashik.sh/${category}/${post.id}">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.description || post.title} - Posted on ${formattedDate}">
    <meta name="twitter:image" content="${post.image || 'https://blog.rashik.sh/default-image.jpg'}">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/index.js"></script>
  </body>
</html>`

      // Write to category/post-id.html instead of meta directory
      await fs.writeFile(
        path.join('dist', category, `${post.id}.html`),
        html
      )
    }
  }
}

generateMetaTagFiles() 