import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getSortedPostsData() {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    // Get file names under /content/blog
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map((fileName) => {
        // Remove ".mdx" from file name to get id
        const id = fileName.replace(/\.mdx$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
          id,
          ...matterResult.data,
        }
      })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.warn('Error reading blog posts:', error.message)
    return []
  }
}

export function getAllPostIds() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map((fileName) => {
        return {
          params: {
            slug: fileName.replace(/\.mdx$/, ''),
          },
        }
      })
  } catch (error) {
    console.warn('Error getting post IDs:', error.message)
    return []
  }
}

export async function getPostData(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Post not found: ${slug}`)
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Convert markdown to HTML for simple rendering
    const content = matterResult.content
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/\n\n/gim, '</p><p>')
      .replace(/^/gim, '<p>')
      .replace(/$/gim, '</p>')
      .replace(/<p><\/p>/gim, '')
      .replace(/<p><h/gim, '<h')
      .replace(/<\/h[1-6]><\/p>/gim, '</h$1>')

    // Combine the data with the slug
    return {
      slug,
      content: content,
      ...matterResult.data,
    }
  } catch (error) {
    console.warn('Error reading post data:', error.message)
    throw error
  }
} 