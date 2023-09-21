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
import { Menu } from '../../components/Menu';


function Home() {

   return (
      <>
         <div>
            <header>
               <Search />
               <Menu />
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
