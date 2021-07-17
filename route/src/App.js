import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import './App.css'


const App = () => {

  return (
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
  )
}

export default App

