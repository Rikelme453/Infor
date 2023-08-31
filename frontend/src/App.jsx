import React from 'react';
import Search from './components/Search.jsx';
import './App.css'


function App() {
  return (

    <>
      <div>
        <header>
          <div className="header">
            <a id="navText" className="navbar-brand" href="base.html">INFOR HOME</a>
            <ul class="suggestions">
              <Search /> 
            </ul>
            <p class="navPg">Seja Bem-vindo!</p>
            <div class="link">
              <a href="#">Entrar |</a>
              <a href="%">Cadastrar</a>
            </div>
            </div>
            <div className="SubNav">
              <a href="#">Categorias</a>
              <a href="#">Carrinho</a>
              <a href="#">loja</a>
              <a href="#">Contato</a>
              <a href="#">Quem Somos?</a>
            </div>
        </header>
      </div>
    </>

  );
}

export default App;
