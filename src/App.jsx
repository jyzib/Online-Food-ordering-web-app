import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './component/navbar'
import Herosection from './component/herosection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
       <Route index element={<Herosection/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App