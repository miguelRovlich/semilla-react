import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <div className="container-md">
        {/* Logo a la izquierda */}
        <Link className="navbar-brand" to="/">
          <img src=".\src\assets\logo.jpeg" alt="" width="130" height="80" />
        </Link>

        {/* Botón para colapsar en dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-center" to="/" onClick={toggleNavbar}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-center" to="/nosotros" onClick={toggleNavbar}>
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-center" to="/nosotros" onClick={toggleNavbar}>
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary rounded-pill text-white  py-2  px-4" to="/contacto" onClick={toggleNavbar}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
