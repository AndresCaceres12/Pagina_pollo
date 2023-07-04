import { useState } from 'react'
import './App.css'
import { Carrusel } from './components/Carrusel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Carrusel/>
    </>
  )
}

export default App
