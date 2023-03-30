
import { useLoaderData} from '@remix-run/react'
import {getGuitarra} from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}
export function meta({data}){
  //console.log(data.data[0].attributes.nombre)
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  }
}


export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)
  return guitarra
}

function Guitarra   () {
  const guitarra = useLoaderData()
  const {imagen, nombre, descripcion, precio} = guitarra.data[0].attributes
  return (
    <div>
      <main className="contenedor guitarra">
        <img src={`http://127.0.0.1:1337${imagen.data.attributes.url}`} alt={`Imagen de Guitarra ${nombre}`} className="imagen" />
        <div className="contenido">
          <h3>{nombre}</h3>
          <p className="texto">{descripcion}</p>
          <p className="precio">{precio}</p>
        </div>
      </main>
    </div>
  )
}

export default Guitarra
