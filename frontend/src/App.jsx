import Search from './components/Search.jsx';
import React, { useState } from 'react';

import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [isDarkened, setIsDarkened] = useState(false);
  const [countInput, setCountInput] = useState(0)

  const handleInputClick = () => {
    setCountInput(countInput + 1)

    if(countInput == 0){
      setIsDarkened(true);
    }else if(countInput == 1 ){
      setIsDarkened(false);
      setCountInput(0)
    }

  };

  const Voltar = () => {
  if (isDarkened) {
    setIsDarkened(false);
  }
};

  console.log(countInput)


  return (

    <>

      <div>
        <header>
          <div className="header">
            <a id="navText" className="navbar-brand" href="base.html">INFOR HOME</a>
            <ul>
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
      <div onClick={Voltar} className={`Body-claro ${isDarkened ? 'Body-escuro' : ''}`}>
        <div className={`SubNav ${isDarkened ? 'SubNav1' : ''}`}>
          <a href="#">Categorias</a>
          <a href="#">Carrinho</a>
          <a href="#">loja</a>
          <a href="#">Contato</a>
          <a href="#">Quem Somos?</a>
        </div>
      </div>

    </>

  );
}

export default App;
