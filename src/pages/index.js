import * as React from "react"
import Layout from "../componentes/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Titulo from "../componentes/titulo/titulo"
import Button from "../componentes/button/button"
import TabTandem from "../componentes/tab/tab"

const IndexPage = () => {
  
  return (
    <Layout>
      
      <Titulo></Titulo>  
      <div className="imagenFondo">
        <div className="flexbutton">

          <Button><Link to="/login" style={{color: `white`, textDecoration: `none`}}>Acceso Usuario</Link></Button>

          <Button><Link to="/infoInstitucional" style={{color: `white`, textDecoration: `none`}}>Información</Link></Button>
          

         
        </div>
      </div>

        

    </Layout>
    
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
