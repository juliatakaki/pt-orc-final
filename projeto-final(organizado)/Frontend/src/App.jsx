import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/cadastro/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pesquisa from  './components/pesquisa/pesquisa'
import Login from './pages/login/Login'
import Home from './pages/home/home'
import Navbar from './components/Navbar/navbar'
import Menu from './pages/Menu'
import axios from 'axios'

function App(){

  const apiUrl = 'http://localhost:5001'

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path ='/register' element = {<Signup />} />
        <Route path ='/login' element = {<Login />} />
        <Route path ='/menu' element = {<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App