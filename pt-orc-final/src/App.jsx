import { useState } from 'react'
import './App.css'
import Pesquisa from './components/pesquisa'

function App(){

  const [pesquisa, setPesquisa] = useState("")



  return(

    <div className='caixa-de-pesquisa'>
      <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa}/>
    </div>
  )
}



export default App
