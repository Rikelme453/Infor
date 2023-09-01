import React from 'react';
import Search from './components/Search.jsx';
import './App.css'
import Routes from './Routes.jsx'
import Loja from './pages/Loja/loja'
import Home from './pages/Home/home'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (

    <>
     
      <div>
        <header>
          <div className="header">
            <a id="navText" className="navbar-brand" href="base.html">INFOR HOME</a>
            <ul class="suggestions">
              <Search />
              <div className="lupa_div">

                <FontAwesomeIcon icon={faSearch} className='lupa' />

              </div>



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
            <a href="/loja" element = {<Loja />} >loja</a>
            <a href="#">Contato</a>
            <a href="#">Quem Somos?</a>
          </div>

        </header>
      </div>
    <br />
    <br/>
    <br/>

    <Routes />
    </>
   
      
      

  );
}

export default App;
