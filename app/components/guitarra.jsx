

export default function Guitarra({guitarra}) {
    const {nombre, descripcion, imagen, precio, url} = guitarra
    //console.log(imagen.data.attributes.formats.medium.url)
  return (
    <div className="guitarra">
        <div className="contenido">
            <img src={imagen.data.attributes.formats.medium.url} alt="Imagen de guitarra" />
            <h3>{guitarra.nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">{precio}</p>
           
        </div>
    </div>
  )
}

