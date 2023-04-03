import { useLoaderData } from '@remix-run/react'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesBlog from '~/styles/blog.css'
import { getGuitarras } from '~/models/guitarras.server.js'
import { getPosts } from '~/models/posts.server.js'
import ListadoGuitarras from '../components/listado-guitarras'
import ListadoPosts from '../components/listado-posts'

export function meta (){

}
export function links (){
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    }
  ]
}

export async function loader(){
  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])
  return{
    guitarras: guitarras.data, 
    posts: posts.data
  }
}

function Index() {
  const {guitarras, posts} = useLoaderData()
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
        guitarras = {guitarras}
        />
      </main>
      <section className='contenedor'>
        <ListadoPosts
            posts = {posts}
          />
      </section>
    </>
  )
}

export default Index
