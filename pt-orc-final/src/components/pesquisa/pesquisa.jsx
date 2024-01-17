const Pesquisa = ({ pesquisa, setPesquisa }) => {
    return (
      <div className="search">
          <h2>Pesquisar</h2>
          <input type="text" value={pesquisa} onChange={(e) => 
              setPesquisa(e.target.value)} placeholder="Digite sua pesquisa">
          </input>
      </div>
    )
  }
  
  export default Pesquisa