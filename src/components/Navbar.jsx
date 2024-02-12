import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const links = [
    { path: "/", label: "Inicio" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/servicios", label: "Servicios" },
    { path: "/contacto", label: "Contacto", className: "btn btn-primary rounded-pill text-white py-2 px-4" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <div className="container-fluid">
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
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link className={`nav-link text-center ${link.className}`} to={link.path} onClick={toggleNavbar}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
