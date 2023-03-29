export async function loader(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    return await respuesta.json()
    
    //console.log(process.env.API_URL)
  }