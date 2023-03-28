import {Link} from '@remix-run/react'

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <div className="logo">

        </div>
        <nav className="navegacion">
          <Link
            to="/"
            >Inicio</Link>
          <Link
            to="/nosotros"
            >Nosotros</Link>
          <Link
            to="/Tienda"
            >Tienda</Link>
          <Link
            to="/Blog"
            >Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
