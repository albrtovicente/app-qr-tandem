import * as React from "react"
import Layout from "../componentes/layout/layout"
import './registro.css'
import Button from "../componentes/button/button"
import { Link } from "gatsby"





const Registro = () => {
  
    return (
      <Layout>
        <div className="imgFondo">

<div class="signupFrm">
    <form action="" class="form">
      <h1 class="title">Registro</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Usuario</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Delegación</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Email</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Confirmar email</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Contraseña</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Confirmar Contraseña</label>
      </div>

      <input type="submit" class="submitBtn" value="Registrar"/>
    </form>
  </div>
  </div>
          
  
      </Layout>
      
    )
  }
  
  export default Registro