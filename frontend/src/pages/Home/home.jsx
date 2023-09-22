import React from 'react';
import Search from '../../components/Search';
import Footer from '../../components/footer';
import './home.css'
import indeximage from '../../assets/indexImage.svg'
import indeximage2 from '../../assets/indexImage2.svg'
import './home.css';
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
         <div className='container'>
    <div className='textHome'>
    Bem-vindo à InforHome, o seu destino<br></br>definitivo para todas as suas necessidades<br></br>tecnológicas e de casa!<br></br>Estamos empolgados por você estar aqui<br></br>e ansiosos para mostrar tudo o que nossa<br></br>loja tem a oferecer.

<br></br><br></br>Na InforHome, acreditamos que a tecnologia<br></br>deve tornar sua vida mais fácil e mais divertida.<br></br>É por isso que oferecemos uma ampla gama<br></br>de produtos eletrônicos, dispositivos<br></br>inteligentes para casa, eletrodomésticos<br></br>e muito mais.

    </div>
    <img src={indeximage2} className='indexImage2'></img>
         </div>


         <Footer />
      </>
   );
}

export default Home;
