import React from 'react';
import Search from '../../components/Search';
import Footer from '../../components/footer';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import App from '../../App';
import Loja from '../Loja/loja';
import indeximage from '../../assets/indexImage.svg'
import './home.css';
import Cadastro from '../Cadastro/Cadastro';
import Login from '../login/Login';


function Home() {

   return (
      <>
         <div>
            <header>
               <div className="header">
                  <a id="navText" className="navbar-brand" href="/" element={< Home />}>INFOR HOME</a>
                  <ul className="suggestions">
                     <Search />
                     <div className="lupa_div">
                        <FontAwesomeIcon icon={faSearch} className='lupa' />
                     </div>
                  </ul>
                  <FontAwesomeIcon icon={faUser} className='user' />
                  <p className="navPg">Seja Bem-vindo!</p>
                  <div className="link">
                  <a href="/login" element={<Login/>} >Entrar | </a>
                     <a href="/cadastro" element={<Cadastro />} >Cadastrar</a>
                  </div>
                  <FontAwesomeIcon icon={faCartShopping} className='cart' />
               </div>
               <div className="SubNav">
                  <a href="#">Categorias<FontAwesomeIcon icon={faBars} className='cat' /></a>
                  <a href="#">Carrinho</a>
                  <a href="/loja" element={<Loja />} >loja</a>
                  <a href="#">Contato</a>
                  <a href="#">Quem Somos?</a>
               </div>
            </header>
         </div>
         <div className="body">
            <main>
               <img className='indexImage' src={indeximage} draggable='false'></img>
            </main>
         </div>
         <br />
         <br />
         <br />
         <Footer />
      </>
   );
}

export default Home;
