import * as React from "react"
import Layout from "../componentes/layout/layout"
import CardTandem from "../componentes/cardTandem/cardTandem"
import './infoInstitucional.css';
import { StaticImage } from "gatsby-plugin-image"



const Administracion = () => {
  
    return (
      <Layout>
        <div className="flexintitucional">
          
          <div className="indiceInstitucional">
          
          <br/>
             <a href="/infoInstitucional" role='button' className="aInst">Bienvenida de la presidenta</a> <br/><br/>
             <a href="/infohistoria" role='button' className="aInst">Nuestra historia</a> <br/><br/>
             <a href="/infooficiales" role='button' className="aInst">Actos oficiales e institucionales</a> <br/><br/>
             <a href="/infocasaRey" role='button' className="aInst">Casa de S.M. el rey</a> <br/><br/>
             <a href="/inforetratosOficiales" role='button' className="aInst">Retratos oficiales</a> <br/><br/>
             <a href="/infoministerio" role='button' className="aInst">Ministerio de la presidencia</a> <br/>

          </div>

          <div className="Iinstitucional">
            <h1 style={{textAlign: `center`}}>Consejo de Administración</h1>  
            <div className="imgInst">
                <StaticImage 
                  style={{width: `1300px`,height: `200px`, textAlign: `center`}}
                  src="..\componentes\images\aranjuez.jpg"
                />
            </div>
            <h3 style={{color:`#e2bb8f`}}>MIEMBROS NATOS
            </h3>
            <h4>Ana de la Cueva Fernández</h4>
            <p>PRESIDENTA DE PATRIMONIO NACIONAL</p>
            <p>
             Es licenciada en Ciencias Económicas y Empresariales por la Universidad Autónoma de Madrid en la especialidad de Economía Cuantitativa.            </p>
            
            <p>
            Ha desarrollado toda su carrera profesional en el Ministerio de Asuntos Económicos y Transformación Digital, donde ingresó por oposición en el Cuerpo de Técnicos Comerciales y Economistas del Estado en 1991.            </p>
            <p>
            Es importante destacar la unidad de sus bienes, ligados por un proceso de creación continuo, especialmente intenso entre el siglo XVI y el XIX, y que ha dado lugar a conjuntos donde las piezas muebles y obras de arte están ligadas a los inmuebles, y todo a la historia política y cultural de España. La coherencia de este conjunto, y las interrelaciones entre espacios, objetos y memoria que en él se producen, otorgan a este Patrimonio su primordial valor cultural e histórico
            </p>
            
            <p>
            Ha sido secretaria de Estado de Economía y Apoyo a la Empresa desde junio de 2018 hasta mayo de 2021, ostentando la Secretaría de la Comisión Delegada del Gobierno para Asuntos Económicos   
            </p>
            
            <p>
            Anteriormente había desempeñado diversos cargos de responsabilidad en el Ministerio, en la Dirección General de Política Comercial e Inversiones Exteriores, la Dirección General de Política Económica y la Dirección General del Tesoro y fue directora del Gabinete del secretario de Estado de Economía.            </p>
            <p>
            Ha sido miembro de los siguientes Consejos de Administración e instituciones nacionales e internacionales: consejera de la Casa de la Moneda y Timbre, consejera de Expansión Exterior (actualmente ICEX), Consejera de la Compañía Española de Crédito a la Exportación (CESCE), consejera de RENFE, consejera de la Sociedad Estatal de Participaciones Industriales (SEPI), consejera de la Autoridad Macroprudencial Consejo de Estabilidad Financiera (AMCESFI), gobernadora alterna por España en el Grupo Banco Mundial, en el Banco Interamericano de Desarrollo, el Banco Centroamericano de Integración Económica, el Banco Asiático de Desarrollo, el Banco Asiático para Inversión en Infraestructuras, el Banco Africano de Desarrollo y el Banco Europeo de Reconstrucción y Desarrollo, presidenta de la Comisión para la prevención del blanqueo de capitales y las infracciones monetarias, miembro de la Comisión de Coordinación del Plan de Recuperación, Transformación y Resiliencia.
            </p>

            <h4>MARÍA DOLORES MENÉNDEZ COMPANY</h4>
            <p>GERENTE DE PATRIMONIO NACIONAL</p>
            <p>
            Es Licenciada en Ciencias Económicas y Empresariales, rama de Economía de la Empresa, por la Universidad Complutense de Madrid. Funcionaria en servicio activo de la Escala Técnica de Gestión de Organismos Autónomos y en excedencia del Cuerpo Técnico de Auditoría y Contabilidad, Executive Master in Public Administration EMPA. ESADE.    
            </p>        
            <p>
            Ha trabajado como Subdirectora General de Administración Financiera y Oficialía Mayor en el Ministerio de Asuntos Económicos y Transformación Digital. Ha sido Secretaria General del Consejo Superior de Deportes y del Instituto Español de Oceanografía y Subdirectora General Adjunta de Administración Económica en la Secretaría General de la Dirección General de Tráfico.            
            </p>
            <p>
            Miembro del Consejo de Administración del Centro para el Desarrollo Tecnológico Industrial E.P.E. (CDTI).
            </p>
            
            
            
            
            
            
          </div>
        </div>
        
        
  
         
  
      </Layout>
      
    )
  }
  
  export default Administracion