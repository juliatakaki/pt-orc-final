import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/cadastro/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pesquisa from  './components/pesquisa/pesquisa'
import Login from './pages/login/Login'
import Home from './pages/home/home'
import Navbar from './components/Navbar/navbar'
import Menu from './pages/Menu'

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/home' element = {<Home />}></Route>
        <Route path ='/register' element = {<Signup />}></Route>
        <Route path ='/login' element = {<Login />}></Route>
        <Route path ='/menu' element = {<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App