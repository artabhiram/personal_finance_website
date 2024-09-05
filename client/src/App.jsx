import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/authentication';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
