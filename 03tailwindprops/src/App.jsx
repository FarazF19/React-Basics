import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-600 text-white font-mono font-extrabold p-4 rounded-xl mb-4'>Tailwind & Props</h1>
     <Card username="chaeaurcode" btnText="Click Me"/>
     <br />
     <Card username="Faraz" btnText="Visit Me"/>

    </>
  )
}

export default App
