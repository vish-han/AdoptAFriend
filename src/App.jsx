import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './Pages'
import { UserContextProvider } from './Context/user'

function App() {
  const [count, setCount] = useState(0)

  return (
      
   <UserContextProvider>
     <div className="App">
    <Home/> 
    </div>
   </UserContextProvider>
  
  )
}

export default App
