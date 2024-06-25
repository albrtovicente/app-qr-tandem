import React, { useState } from 'react';
import './acceso.css'
import Layout from "../componentes/layout/layout"
import Footer from '../componentes/footer/footer';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.message === 'Login exitoso') {
        // Aquí podrías guardar el usuario en el estado global o en localStorage
        console.log(data.user);
        setMessage('Login exitoso');
      } else {
        setMessage('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en el login', error);
      setMessage('Error en el login');
    }
  };

  return (
    <Layout>
    <div className="containerAcceso">
    <div className="imageFondo">
      <h3>Acceso empleados</h3>
      <form action="/my-handling-form-page" method="post" className="formAcceso" >
        <ul className="lista">
            
            <li className="mail">
            
                <div class="icono">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />                
                </div>
            </li>
            <li className="pass">
                <div class="icono2">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </li>
        </ul>
      </form>
      
      
      <button onClick={handleLogin}>Entrar</button>
      <p>{message}</p>
      <a href="#" role='button' >¿Olvidaste tu contraseña?</a>
      <br></br>
      <a href="/registro" role='button' >Registrarse</a>
    </div>
    </div>
    </Layout>
  );
};

export default Login;