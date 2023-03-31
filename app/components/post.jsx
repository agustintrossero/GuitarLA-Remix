
import {Link}from '@remix-run/react'
export default function post({post}) {
    const {titulo, contenido, imagen, URL, publishedAt} = post
    //console.log(URL)
  return (
    <article className='post'>
        <img clasName="imagen" src={`http://127.0.0.1:1337${imagen.data.attributes.formats.small.url}`} alt={`Imagen de Post ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{publishedAt}</p>
            <p className="resumen">{contenido}</p>
            <Link className='enlace' to={`/posts/${URL}`}>Leer Post</Link>
        </div>
    </article>
  )
}