import { useState } from 'react'
import '../styles/app.css'
import logo from "../assets/Robble-Logo.svg"
import Search from '../components/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
          <img className="robble-logo" src={logo} alt="" />
        <Search  />
      </div>
      
    </>
  )
}

export default App
