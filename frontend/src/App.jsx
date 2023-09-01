import React from 'react';
import Search from './components/Search.jsx';
import Footer from './components/footer.jsx';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Routes from './Routes.jsx'
import Loja from './pages/Loja/loja'
import Home from './pages/Home/home'


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
            <FontAwesomeIcon icon={faUser} className='user'/>
            <p class="navPg">Seja Bem-vindo!</p>
            <div class="link">
              <a href="#">Entrar |</a>
              <a href="%">Cadastrar</a>
            </div>
            <FontAwesomeIcon icon={faCartShopping} className='cart'/>
          </div>
          <div className="SubNav">
            <a href="#">Categorias<FontAwesomeIcon icon={faBars} className='cat' /></a>
            <a href="#">Carrinho</a>
            <a href="/loja" element = {<Loja />} >loja</a>
            <a href="#">Contato</a>
            <a href="#">Quem Somos?</a>
          </div>

        </header>
      </div>
      <Footer />
    <br />
    <br/>
    <br/>

    <Routes />
    </>
   
      
      

  );
}

export default App;
