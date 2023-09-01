import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para autenticar o usuário com o email e senha
    // Você pode implementar a autenticação aqui
  };

  return (
    <div className="login-page">
      <h1>Faça o Cadastro</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
