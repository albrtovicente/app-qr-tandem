import * as React from "react"
import "../header/header.css"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Header =()=>{
    
    return(
        <>
        {/* <header class="site-header">
                 <Link to="/" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>
                    <StaticImage className="logoheader"
                        src="../images/pn1.png"
                /></Link>
            <nav class="nav">
            <ul>
                    
                    <li className="columna">
                    <Link to="/infoInstitucional" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Nosotros</Link>

                    </li>
                    <li className="columna">
                    <Link to="/noticias" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Noticias</Link>

                    </li>
                    <li className="columna">
                    <Link to="/contacto" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Contacto</Link>          

                    </li>
                    <li className="columna">
                    <Link to="/visita" style={{color: `white`, textDecoration: `none`}}>Visita</Link>

                    </li>
                    
                </ul>
            </nav>
        </header> */}
        {/* <div className="header">
            <nav>
                <ul>
                    <li className="columna">
                    <Link to="/" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>
                    <StaticImage className="logoheader"
                        src="../images/pn1.png"
                    /></Link>
                    </li>
                    <li className="columna">
                    <Link to="/infoInstitucional" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Nosotros</Link>

                    </li>
                    <li className="columna">
                    <Link to="/noticias" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Noticias</Link>

                    </li>
                    <li className="columna">
                    <Link to="/contacto" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Contacto</Link>          

                    </li>
                    <li className="columna">
                    <Link to="/visita" style={{color: `white`, textDecoration: `none`}}>Visita</Link>

                    </li>
                    
                </ul>
            </nav> */}
            {/* <div className="header">
            <div id="logo-header">
                <Link to="/" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>
                    <StaticImage className="logoheader"
                src="../images/pn1.png"
                /></Link>
            </div>  

            
                <div className="columna" id="alLadito">
                <Link to="/infoInstitucional" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Nosotros</Link>
                </div> 
                <div className="columna" id="alLadito">
                <Link to="/noticias" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Noticias</Link>
                </div> 

                <div className="columna" id="alLadito">
                <Link to="/contacto" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Contacto</Link>          
                </div> 

                <div className="columna" id="pegadito">
                <Link to="/visita" style={{color: `white`, textDecoration: `none`}}>Visita</Link>
                </div> 
            </div> */}

<header class="header">
    <div class="logo">
        <div className="imgLogo"><Link to="/" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>
                    <StaticImage className="logoheader"
                src="../images/pn1.png"
                /></Link></div>
    </div>
    <nav class="link">
        <ul>
            <li>
            <Link to="/infoInstitucional" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Nosotros</Link>

            </li>
            <li>
            <Link to="/contacto" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Contacto</Link>          

            </li>
            
        </ul>
    </nav>
</header>
        </>
    )
}
export default Header