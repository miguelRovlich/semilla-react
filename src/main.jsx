import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
// import Contact from './views/Contact';
// import Services from './views/Services';
// import Error from './views/Error';
import Navbar from './components/Navbar'; // Importa tu Navbar

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Coloca el Navbar fuera de las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        {/* <Route path="/contacto" element={<Contact />} /> */}
        {/* <Route path="/servicios" element={<Services />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);