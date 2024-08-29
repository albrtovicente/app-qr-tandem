import * as React from "react"
import Layout from "../componentes/layout/layout"
import './infoInstitucional.css';
import { StaticImage } from "gatsby-plugin-image"



const InfoRetratosOficiales = () => {
  
    return (
      <Layout>
        <div className="flexintitucional">
          
          <div className="indiceInstitucional">
          
          <br/>
             <a href="/infoInstitucional" role='button' className="aInst">Bienvenida de la presidenta</a> <br/><br/>
             <a href="/infohistoria" role='button' className="aInst">Conoce nuestra historia</a> <br/><br/>
             <a href="/infoadministrador" role='button' className="aInst">Consejo de administrador</a> <br/><br/>
             <a href="/infooficiales" role='button' className="aInst">Actos oficiales e institucionales</a> <br/><br/>
             <a href="/infocasaRey" role='button' className="aInst">Casa de S.M. el rey</a> <br/><br/>
             <a href="/infoministerio" role='button' className="aInst">Ministerio</a> <br/><br/><br/>

          </div>

          <div className="Iinstitucional">
            <h1 style={{textAlign: `center`}}>Retratos oficiales</h1>  
            <p>
               <div className="imgInst">
                <StaticImage 
                  style={{width: `300px`,height: `600px`, textAlign: `center`}}
                  src="..\images\rey.jpg"
                />
              </div>
            </p>
            
          </div>
        </div>
        
        
  
         
  
      </Layout>
      
    )
  }
  
  export default InfoRetratosOficiales