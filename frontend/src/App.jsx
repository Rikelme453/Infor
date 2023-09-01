import Search from './components/Search.jsx';
import React, { useState } from 'react';

import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [isDarkened, setIsDarkened] = useState(false);

  const handleInputClick = () => {
    setIsDarkened(true);
  };

  return (

    <>

      <div>
        <header>
          <div className="header">
            <a id="navText" className="navbar-brand" href="base.html">INFOR HOME</a>
            <ul className="suggestions">
              <Search onClick={handleInputClick} />
              <div className="lupa_div">

                <FontAwesomeIcon icon={faSearch} className='lupa' />

              </div>


            </ul>
            <p className="navPg">Seja Bem-vindo!</p>
            <div className="link">
              <a href="#">Entrar |</a>
              <a href="%">Cadastrar</a>
            </div>
          </div>
        </header>
      </div>

      <div className="SubNav">
        <a href="#">Categorias</a>
        <a href="#">Carrinho</a>
        <a href="#">loja</a>
        <a href="#">Contato</a>
        <a href="#">Quem Somos?</a>
      </div>

    </>

  );
}

export default App;
