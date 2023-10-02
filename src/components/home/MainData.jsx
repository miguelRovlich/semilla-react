import React from 'react';

function MainData() {
  return (
    <div className="container-fluid bg-light">
        <div className="row">
            <div className="col-md-6 mx-auto">
            <h1 className="mt-5"><strong>UNA MIRADA A INTERNET CHILE 2023</strong></h1>
      <p className="mb-5"><strong>¿POR QUÉ DEBES ESTAR PRESENTE EN LA WEB?</strong></p>

      <ul>
        <li>Casi un 88% de los chilenos acceden mensualmente a internet. De ellos, un 82.3% son usuarios activos, unos 16 millones de personas, y otros 16 millones, un 83.5%, son usuarios activos en Redes Sociales.</li>
        <li>Los chilenos pasamos casi 2.5 horas al día conectados al celular y consumimos un promedio de 22 horas a la semana de contenido en las redes sociales.</li>
        <li>Mercado libre: 15% de las ventas del comercio ya se hacen online.</li>
      </ul>
            </div>
        </div>
      <div className="row">
        <div className="col-md-2 mx-auto">
          <h2>Celulares</h2>
          <p>100%</p>
        </div>
        <div className="col-md-2">
          <h2>Usuarios Internet</h2>
          <p>83%</p>
        </div>
        <div className="col-md-2 mx-auto">
          <h2>Usuarios RRSS</h2>
          <p>84%</p>
        </div>
      </div>
    </div>
  );
}

export default MainData;
