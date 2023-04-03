export default function Curso({curso}) {
 
    const { contenido, imagen, titulo } = curso
    //console.log(imagen)
 
    return (
        <section className="curso">
            <style jsx="true">{`
                .curso {
                   background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(http://127.0.0.1:1337${imagen.data.attributes.url})
                }
            `}</style>
            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{titulo}</h2>
                    <p className="texto">{contenido}</p>
                </div>
            </div>
        </section>
    )
}