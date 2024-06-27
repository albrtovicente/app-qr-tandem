

import * as React from "react"
import { useState } from 'react';
import Layout from "../componentes/layout/layout"
import './registro.css'
// import Button from "../componentes/button/button"
import { Link } from "gatsby"


const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [delegacion, setDelegacion]= useState('');
    const [message, setMessage] = useState('');

    const hadleNombre=(e) => setNombre(e.target.value);
    const hadleEmail=(e) => setEmail(e.target.value);
    const hadlePassword=(e) => setPassword(e.target.value);
    const hadleDelegacion=(e) => setDelegacion(e.target.value);


    const handleRegistro = async () => {
      
        try {
            const response = await fetch('http://localhost/gatsby/v1/register-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nombre": nombre,
                    "delegacion": delegacion,
                    "email": email,
                   "password": password
                })
            });
            const data = await response.json();
            
            setMessage(data.message);
        } catch (error) {
            console.error('Error registrando usuario', error);
            setMessage('Error en el registro');
        }
    };

    return (
      <Layout>
      <div className="imgFondo">

      <div class="signupFrm">
        <div action="" class="form">
              <div className="columnaRegistro">
                <div className="tituloRegistro">
                  <h1 class="title">Registro</h1>
                </div>
                <div className="botonRegistro">
                <Link to="/login">
                  <button className="button_active">Atrás</button>
                </Link> 
                </div>
              </div>

          <div class="inputContainer">
            <input
                className="input"
                type="text"
                placeholder=""
                id='nombre'
                value={nombre}
                onChange={hadleNombre}
            />
            <label htmlFor='nombre' class="label">Usuario</label>
          </div>

          <div class="inputContainer">
          <input
                className="input"
                type="text"
                placeholder=""
                id='delegacion'
                value={delegacion}
                onChange={hadleDelegacion}
            />
            <label htmlFor='delegacion' class="label">Delegación</label>
          </div>

          <div class="inputContainer">
          <input
                className="input"
                type="text"
                placeholder=""
                id='email'
                value={email}
                onChange={hadleEmail}
            />
            <label htmlFor='email' class="label">Email</label>
          </div>

          {/* <div class="inputContainer">
            <input type="text" class="input" placeholder=""/>
            <label for="" class="label">Confirmar email</label>
          </div> */}

          <div class="inputContainer">
            <input
                className="input"
                type="text"
                placeholder=""
                id='password'
                value={password}
                onChange={hadlePassword}
            />
            <label htmlFor='password' className="label">Contraseña</label>
          </div>

          {/* <div class="inputContainer">
            <input type="text" class="input" placeholder=""/>
            <label for="" class="label">Confirmar Contraseña</label>
          </div> */}
            {/* <button onClick={handleRegistro} className="submitBtn">Registro</button> */}
            <input onClick={handleRegistro} type="submit" class="submitBtn" value="Registrar"/>
            {message && <p>{message}</p>}
            
        </div>
            {/* <input onClick={handleRegistro} type="submit" class="submitBtn" value="Registrar"/>
            {message && <p>{message}</p>} */}
            {/* <button onClick={handleRegistro} className="submitBtn">Registro</button> */}
             
        </div>
        </div>
      </Layout>
    );
};

export default Registro;