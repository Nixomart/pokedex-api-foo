import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom'
import { PokemonsProvider } from './context/pokemonsProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonsProvider>

    <Router>
    <App />
    </Router>
    </PokemonsProvider>
  </React.StrictMode>,
)
