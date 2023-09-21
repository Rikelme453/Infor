import React from 'react'
import indeximage from '../../assets/indexImage.svg'
import './home.css';
function Loja(){
   return(
    <>
     <main>
     <img className ='indexImage' src={indeximage} draggable='false'></img>
     </main>
    </>

   )
}
export default Loja;