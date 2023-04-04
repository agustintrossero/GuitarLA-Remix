import {useLoaderData} from '@remix-run/react'
import { getPost } from '~/models/posts.server.js'
import { formatearFecha } from '~/utils/helpers'

export function meta({data}){
  //console.log(data.data[0].attributes.titulo)
  //console.log(data)
  if(!data){
    return{
      title: 'GuitarLA - Entrada No Encontrada',
      description: "Nuestra seleccion de Blogs, Blogs, Entrada No Encontrada"
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Nuestra seleccion de Blogs, Blog ${data.data[0].attributes.titulo}`
  }
}

export async function loader({params}){
    const {postUrl} = params
    const post = await getPost(postUrl)
    //console.log(post)
    if(post.data.length === 0){
      throw new Response('',{
        status: 404,
        statusText:'Entrada No Encontrada'
      })
    }
    return post
    }
  
export default function Post() {
  const post = useLoaderData()
  //console.log(post.data[0].attributes)
  const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes
  return (
  
    <article className="post mt-3">
      <img className="imagen" src={`http://127.0.0.1:1337${imagen?.data?.attributes?.url}`} alt={`Imagen de Post ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

