import React from "react";

function MainTitle() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-7 px-5 ">
          <h1 className="display-4 pt-3">
            <strong className="">No</strong> buscamos ganarle a la competencia
          </h1>
          <h1 className="display-4">
            {" "}
            <strong>Crecemos</strong> junto a tu negocio
          </h1>
          {/* <p className="my-4">
            Tu agencia de marketing digital especializada en gestión de marcas y
            soluciones digitales a medida.
          </p> */}
          <a className="btn btn-lg btn-primary rounded-pill mt-3">
            Cotizar mi estrategia digital
          </a>
        </div>
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <img
            src=".\src\assets\study-room-2282312_1280.png"
            className="mx-5 my-5"
            alt=""
            width="350"
            height="350"
          />
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
