import { useState } from 'react'
import logo from '../logo.svg'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid p-5 bg-dark text-white text-center">
        <h1>No buscamos ganarle a la competencia, crecemos junto a tu negocio</h1>
        <p>La implementación de una plataforma en línea para tu empresa puede optimizar muchos procesos internos y externos, tales como la comunicación, reducción de costos, aumento de la productividad y proporcionar una experiencia de usuario única.</p> 
        <a className="btn btn-danger rounded-pill">Destruir todo</a>
    </div>
  )
}

export default Home