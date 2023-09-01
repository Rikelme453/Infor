import React from 'react'
import { useEffect, useState } from "react";



const url =`http://127.0.0.1:8000/`

function Loja(){
    const [data, setData] = useState([])
    useEffect(() => {
       fetchData()
       
    }, [])

   const fetchData = async() => {
     const endpoint = `${url}`
   
    try {
        const response = await fetch (endpoint , {
          method: 'GET'
        })

        const data = await response.json()
        console.log(data)
        setData(data)
    }
     catch (e){
       console.log(e)
     }
           
    } 
   return(
    <>
        
     <div>
              
         <body>
              <h1>Página da Loja</h1>
 
              <div className='ProdutoDiv'>
                    <ul>
                        
                     {data && data.map(el => <li key = {el.id}> {el.nome} </li> )}
             
                    </ul>
              </div>
         </body>      
              
     </div>
    
    </>

   )
}
export default Loja;