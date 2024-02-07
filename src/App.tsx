
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import PokemonPage from './pages/pokemon'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:pokemonname' element={<PokemonPage />} />
    </Routes>
  )
}

export default App
