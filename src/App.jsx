
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Admin from './PAges/Admin'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
