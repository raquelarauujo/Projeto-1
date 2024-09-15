import { useState } from 'react'
import './App.css'
import FirstComponent from './Components/FirstComponent'
import SecondComponent from './Components/SecondComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FirstComponent/>
     <SecondComponent/>

    </>
  )
}

export default App