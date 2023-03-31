export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/api/posts?populate=imagen`)
    return await respuesta.json()
  }