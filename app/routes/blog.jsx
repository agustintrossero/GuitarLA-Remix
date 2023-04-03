import { useLoaderData } from '@remix-run/react'
import {getPosts} from '~/models/posts.server.js'
import ListadoPosts from '../components/listado-posts'
import styles from '~/styles/blog.css'

export function meta(){
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'Nuestra seleccion de Blogs'
  }
}

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
      <ListadoPosts
        posts = {posts}
      />
    </main>
  )
}

export default Blog
