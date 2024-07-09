import * as React from "react"
import "../footer/footer.css"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Footer =()=>{
    
    return(
        <>
        <div className="containerfooter">
        <div class="footer">
            <div class="logo">
                <div className="imgLogo"><Link to="/" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>
                            <StaticImage className="logoheader"
                        src="../images/pn1.png"
                        /></Link></div>
            </div>
            <nav class="link">
                <ul>
                    <li>
                    <Link to="/avisoLegal" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Aviso legal</Link>          

                    </li>
                    <li>
                    <Link to="/accesibilidad" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Accesibilidad</Link>

                    </li>
                    <li>
                    <Link to="/privacidad" style={{color: `white`, textDecoration: `none`, padding: `20%`}}>Política de privacidad</Link>   

                    </li>                    
                </ul>
            </nav>
            <br></br>
            <nav className="link2">
                <ol>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo1.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo2.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo3.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo5.png"
                            /></Link>
                    </li>
                </ol>
            </nav>
            <nav className="redes">
                <ol>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/inst.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/tiktok.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/twitter.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/youtube.png"
                            /></Link>
                    </li>
                </ol>
            </nav>
        </div>

        </div> 
        {/* <div className="footer2">
        <nav className="link2">
                <ol>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo1.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo2.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo3.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="logofooter"
                                src="../images/logo5.png"
                            /></Link>
                    </li>
                </ol>
            </nav>
            <nav className="redes">
                <ol>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/inst.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/tiktok.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/twitter.png"
                            /></Link>
                    </li>
                    <li className="item">
                        <Link to="/#">
                            <StaticImage className="redesimg"
                                src="../images/youtube.png"
                            /></Link>
                    </li>
                </ol>
            </nav>
        </div>
        </div> */}
        </>
    )
}
export default Footer