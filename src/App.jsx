import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import Items from './pages/Items'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage'
import NavBar from './components/NavBar'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>

      <NavBar />
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Details' element={<Details/>} />
          <Route path='/Items' element={<Items/>} />
          <Route path='*' element={<ErrorPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App