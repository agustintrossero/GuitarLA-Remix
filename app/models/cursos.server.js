export async function getCursos (){
    const resultado = await fetch(`${process.env.API_URL}/api/curso?populate=imagen`)
    return await resultado.json()
}

