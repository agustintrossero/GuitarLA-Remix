export async function getGuitarras(){
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?populate=imagen`)
    return await respuesta.json()
    
    //console.log(process.env.API_URL)
  }
