import React from 'react';
import Search from './components/Search.jsx';
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (

    <>

      <div>
        <header>
          <div className="header">
            <a id="navText" className="navbar-brand" href="base.html">INFOR HOME</a>
            <ul class="suggestions">
              <Search />
                <FontAwesomeIcon icon={faSearch} className='lupa' />
            </ul>
            <FontAwesomeIcon icon={faUser} className='user'/> 
            <p class="navPg">Seja Bem-vindo!</p>
            <div class="link">
              <a href="#">Entrar |  </a>
              <a href="%">Cadastrar</a>
            </div>
            <FontAwesomeIcon icon={faCartShopping} className='cart'/>
          </div>
          <div className="SubNav">
            <a href="#">Categorias<FontAwesomeIcon icon={faBars} className='cat'/></a>
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
