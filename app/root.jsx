import { useState } from 'react'
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'
import styles from "~/styles/index.css"
import Header from '~/components/header'
import Footer from '~/components/footer'


export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width,initial-scale=1'
        }
    )
}


export function links(){
    return[
        {
            rel:'stylesheet',
            href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:'preconnect',
            href:'https://fonts.googleapis.com'
        },
        {
            rel:'preconnect',
            href:'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel:'stylesheet',
            href:'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel:'stylesheet',
            href: styles
        }
    ]
        
}

export default function App(){

    const [carrito, setCarrito] = useState([]);
    const agregarCarrito = guitarra => {
       // console.log("agregando....", guitarra);
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            //some es un metoddo de array que devuelve booleans si cumple la ccondicion
            // ahora quiero iterar sobre el arreglo e identificar el elemento duplicado para actualizar su cantidad
            
            const carritoActualizado = carrito.map(guitarraState =>{
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
            //console.log("actualizaste la cantidad del elemento")
        } else {
            // registro nuevo, agregar al carrito
            setCarrito([...carrito, guitarra])
        }

    }
    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito
                }}
            />
        </Document>
    )
}

/*
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
*/ 

function Document({children}){
    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores */

export function CatchBoundary() {
    const error = useCatch()
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link to="/" className='error-enlace'>Tal vez quieras volver a la página principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){

    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link to="/" className='error-enlace'>Tal vez quieras volver a la página principal</Link>
        </Document>
    )
}