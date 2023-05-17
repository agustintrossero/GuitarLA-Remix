
import { useState } from 'react'
import { useLoaderData} from '@remix-run/react'
import {getGuitarra} from '~/models/guitarras.server'

export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)
  //console.log(guitarra)
  if(guitarra.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText:'Guitarra No Encontrada'
    })
  }
  return guitarra
}

export function meta({data}){
  //console.log(data.data[0].attributes.nombre)
  //console.log(data)
  if(!data){
    return{
      title: 'GuitarLA - Guitarra No Encontrada',
      description: "Guitarras, venta de guitarras, Guitarra No Encontrada"
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  }
}

function Guitarra   () {

  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData()
  const {imagen, nombre, descripcion, precio} = guitarra.data[0].attributes
  
  const handleSubmit = e =>{
    e.preventDefault();
    if(cantidad < 1){
      alert("Debes seleccionar una cantidad");
      return
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: `http://127.0.0.1:1337${imagen?.data?.attributes?.url}`,
      nombre,
      precio,
      cantidad
    }
    console.log(guitarraSeleccionada)
  }
  
  return (
      <div className="guitarra">
        <img src={`http://127.0.0.1:1337${imagen?.data?.attributes?.url}`} alt={`Imagen de Guitarra ${nombre}`} className="imagen" />
        <div className="contenido">
          <h3>{nombre}</h3>
          <p className="texto">{descripcion}</p>
          <p className="precio">{precio}</p>

          <form onSubmit={handleSubmit} className="formulario">
            <label htmlFor='cantidad'>Cantidad</label>
            <select
              onChange={ e => setCantidad(parseInt(e.target.value))}
              id="cantidad"
             >
              <option value="">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
  )
}

export default Guitarra
