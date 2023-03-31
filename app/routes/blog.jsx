import { useLoaderData } from '@remix-run/react'
import {getPosts} from '~/models/posts.server.js'
import Post from  '~/components/Post'
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const posts = await getPosts()
  //console.log(posts.data)
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  //console.log(posts)
  return (
    <main className='contenedor'>
      <h2 className="heading">Blog</h2>
      <div className="blog">
          <div className="blog-grid">
            {posts.map(post => (
              <Post
              key={post.id}
              post={post.attributes}
              />
            ))}
          </div>
      </div>
    </main>
  )
}

export default Blog
