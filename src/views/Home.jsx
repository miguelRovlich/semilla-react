import { useState } from 'react'
import logo from '../logo.svg'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid p-5">

        <div className="row">
          <div className="col-md-6 px-5 py-4">
            
        <h1 className="mb-3">No buscamos ganarle a la competencia, crecemos junto a tu negocio</h1>
        <p className="my-4">Tu agencia de marketing digital especializada en gestión de marcas.</p> 
        <a className="btn btn-primary rounded-pill ">Escribir mi historia de exito</a>
          </div>
          
          <div className="col-md-6 px-5">
            <img src=".\src\assets\web-site-1706400_1280.png" alt="" width="330" height="340" />
          </div>
        </div>
    </div>
  )
}

export default Home