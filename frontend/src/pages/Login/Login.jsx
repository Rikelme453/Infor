import React from 'react'
import './Login.css';


const Cadastro = () => {

  return (

    <>
      <html lang="pt-br">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
          <title>Document</title>
        </head>
        <body>
          <header>
          <a id="navText" className="navbar-brand" href="/">INFOR HOME</a>
          </header>
          <form className="login" method='POST' action='#'>
            <br /><br /><br />
            <h2>Login</h2>
            <input id="input" className='form-control-sm form-control-lg' type="email" placeholder='Informe Seu Email' /><br /><br />
            <input  id="input"  className='form-control-sm form-control-lg' type="password" placeholder='Informe Sua Senha' /><br /><br />
            <button id ="btn" className='btn btn-primary'>Entrar</button>
          </form>

        </body>
      </html>



    </>
  )

}

export default Cadastro