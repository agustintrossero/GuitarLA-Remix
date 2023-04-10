import { useLoaderData } from '@remix-run/react'
import {getPosts} from '~/models/posts.server.js'
import ListadoPosts from '~/components/listado-posts'

export function meta(){
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'Nuestra seleccion de Blogs'
  }
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
      <ListadoPosts
        posts = {posts}
      />
  )
}

export default Blog
