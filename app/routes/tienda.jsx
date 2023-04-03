import { useLoaderData } from '@remix-run/react'
import {getGuitarras} from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import styles from '~/styles/guitarras.css'

export function meta(){
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'Nuestra coleccion de Guitarras'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  //console.log('desde loader')
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()
  //console.log(guitarras)
  return (
    <main className='contenedor'>
      <ListadoGuitarras
        guitarras = {guitarras}
      />
    </main>
  )
}

export default Tienda
