import {getGuitarras} from '~/models/guitarras.server'

export async function loader(){
  //console.log('desde loader')
  const guitarras = await getGuitarras()
  return guitarras
}

function Tienda() {
  return (
    <div>
      Tienda
    </div>
  )
}

export default Tienda
