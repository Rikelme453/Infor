import React from 'react'
import { useEffect, useState } from "react";
import './loja.css';
import Footer from '../../components/footer';
import Search from '../../components/Search';
import { Menu } from '../../components/Menu';



const url = 'http://127.0.0.1:8000/api/produtos/';


function Loja() {
  const [data, setData] = useState([])
  const [filtName, setFiltName] = useState('');
  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = async () => {
    const endpoint = `${url}`

    try {
      const response = await fetch(endpoint, {
        method: 'GET'
      })

      const data = await response.json()
      console.log(data)
      setData(data)
    }
    catch (e) {
      console.log(e)
    }

  }
  return (
    <>

      <div>
        <header>
          <Search />
          <Menu />
        </header>
        
        <body>  
          <section className='produto-section'>
             {data && data.map(el => <div className='ProdutoDiv' key={el.id_produto}>
              <img className='imagem' src={el.image}></img>

               <h4 className='Nome'>{el.nome}</h4>
                <button className='botao-compra'>Comprar</button>
                <button className='valor_compra'>Preço:{el.valor}R$</button>
                
            </div>)}
          </section>
        </body>
      </div>
      <Footer />
    </>

  )
}
export default Loja;