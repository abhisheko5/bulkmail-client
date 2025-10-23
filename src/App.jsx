import { useState } from 'react'
import HomePage from './pages/home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
