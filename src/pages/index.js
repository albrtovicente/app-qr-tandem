import * as React from "react"
import Layout from "../componentes/layout/layout"
import { Link } from "gatsby"
import Titulo from "../componentes/titulo/titulo"
import "../componentes/button/button.css"

const IndexPage = () => {
  
  return (
    <Layout>
      
      <Titulo></Titulo>  
      
      <div className="imagenFondo">
        <div className="flexbutton">
          <button className="botonPrincipal"><Link to="/login" style={{color: `white`, textDecoration: `none`}}>Acceso Usuario</Link></button>
          <button className="botonPrincipal"><Link to="/infoInstitucional" style={{color: `white`, textDecoration: `none`}}>Información</Link></button>    
        </div>
      </div>
    </Layout>
    
  )
}

export default IndexPage

