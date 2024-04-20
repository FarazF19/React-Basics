import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(5)

  // let counter = 5
  const addValue = () => {
    
    if (counter < 20) {
      setCounter(counter + 1)
  }
  return counter;
}
  
  const remValue = () => {

    if (counter > 0){
      setCounter(counter - 1)
      
    }
    return counter;
   
  }

  return (
    <>
      <h1>Chae aur React</h1>
      <h2>Counter value: {counter} </h2>
      
      <button onClick = {addValue}> Add value : {counter}</button>
      <br/>
      <button onClick = {remValue}> Remove value : {counter}</button>
      <footer ><p>lorem ipsum noit ete : {counter}</p></footer> 

      
    </>
  )
}

export default App
