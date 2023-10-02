import { useState } from 'react'
import logo from '../logo.svg'
import '../App.css'
import MainTitle from '../components/home/MainTitle'
import MainData from '../components/home/MainData'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainTitle/>
    <MainData/>
    </>
  )
}
export default Home