import {Link} from  "@remix-run/react"

export default function Guitarra({guitarra}) {
    const {nombre, descripcion, imagen, precio, URL} = guitarra
    //console.log(URL)
  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen de Guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{guitarra.nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">{precio}</p>
            <Link className="enlace" to={`/guitarras/${URL}`}>Ver Producto</Link>
        </div>
    </div>
  )
}

