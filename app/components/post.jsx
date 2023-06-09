import { Link }from '@remix-run/react'
import { formatearFecha } from '~/utils/helpers'

export default function post({post}) {
    const {titulo, contenido, imagen, URL, publishedAt} = post
    //console.log(URL)
  return (
    <article className='post'>
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen de Post ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className='enlace' to={`/blog/${URL}`}>Leer Post</Link>
        </div>
    </article>
  )
}