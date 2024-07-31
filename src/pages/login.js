// import React, { useState } from 'react';
import './login.css'
import Layout from "../componentes/layout/layout"




import React, { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleLogin = async () => {
        try {
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const respuesta = await peticion.json();
            console.log(respuesta)
            if (respuesta.message === 'Login exitoso') {
                // Aquí podrías guardar el usuario en el estado global o en localStorage
                localStorage.setItem('tandem_nombre', respuesta.user.nombre);
                localStorage.setItem('tandem_email', respuesta.user.email);
                localStorage.setItem('tandem_id', respuesta.user.id);
                localStorage.setItem('tandem_delegacion', respuesta.user.delegacion);
                localStorage.setItem('tandem_role', respuesta.user.role);
                localStorage.setItem('tandem_img_user', respuesta.user.image_url);
                localStorage.setItem('tandem_users', respuesta.user);
                console.log(respuesta.user);
                window.location.href = '/CrearQr';
                // setMessage('Login exitoso para el usuario con id:'+ respuesta.user.id);
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
          <div className="imagenAntigua">
          <div className="fondoBlanco">
            
            <h3>Acceso empleados</h3>
            <form action="/my-handling-form-page" method="post">
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
            
            
               <button onClick={handleLogin} href="/CrearQr" className='button22' style={{width: `100px`}}>Entrar</button>
               <p>{message}</p>
               <a href="/change-password" role='button' >¿Olvidaste tu contraseña?</a>
               <br></br>
               <a href="/registro" role='button' >Registrarse</a>
             </div>
             </div>



             
             </Layout>
    );
};
export default Login;