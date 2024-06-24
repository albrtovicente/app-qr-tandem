import React,{useState} from "react"
import Layout from "../componentes/layout/layout"
import TabTandem from "../componentes/tab/tab"
import {  useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import BasicPopover from "../componentes/popover/popover"
// import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react'
import QRComponent from "../componentes/qrcomp/QrComponent"
import QRCode from "qrcode.react"
import download from "downloadjs"
import { toPng, toJpeg, toSvg } from "html-to-image"

import './CrearQr.css'

function CrearQr() {
    const [inputValue, setInputValue] = useState('');
    const [qrColor, setQrColor] = useState('black');
    const [qrSize, setQrSize] = useState(100);
    const qrRef = useRef(null);
    const handleInputChange = (event) => {
    setInputValue(event.target.value);
    };
    const handleColorChange = (color) => {
    setQrColor(color);
    };
    const handleSizeChange = (size) => {
      setQrSize(parseInt(size, 10));
    };
    const handleDownload = async () => {
      if (qrRef.current) {
        const dataUrl = await toPng(qrRef.current);
        download(dataUrl, 'qr-code.png');
      }
    };
  
    const handleDownload2 = async () => {
      if (qrRef.current) {
        const dataUrl = await toJpeg(qrRef.current);
        download(dataUrl, 'qr-code.jpeg');
      }
    };
  
    const handleDownload3 = async () => {
      if (qrRef.current) {
        const dataUrl = await toSvg(qrRef.current);
        download(dataUrl, 'qr-code.svg');
      }
    };
    // const containerStyle = {
    // //   backgroundColor: "beige",
    //   // border: "2px solid black",
    //   // padding: "20px",
    //   // borderRadius: "10px",
    // };
    const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta']; // Colores ampliados
    return (

      <Layout>
        
        
        <div className="container2">
          <div className="containerQr" >
                  <h1>GENERADOR DE QR</h1>
                <BasicPopover></BasicPopover>

              <div className="contenidoqr">
                <p className="grupo1">Contenido del QR</p>
                  <br />
                  <div className="tabStyle">
                    <TabTandem></TabTandem>
                  </div>
                  {/* <p>Introduce el contenido deseado</p> */}
                  
              </div>
              <div className="personalizarqr">
                <p className="grupo2">Personalizar QR</p>
                <QRComponent
                  onColorChange={handleColorChange}
                  onSizeChange={handleSizeChange}
                  colorOptions={colorOptions}
                />
              </div>
            <br /> 
            <div className="qr-contenido">
              <p className="grupo3">Tu QR</p>
              <div ref={qrRef}>
                <QRCode value={inputValue} size={qrSize} fgColor={qrColor} onChange={handleInputChange}/>
              </div>
            </div>
            <br />
            {/* <TandemButton enlace="#">Generar QR</TandemButton> */}
            <div className="qrcreado">
              {/* <p className="grupo4">QR creado</p>
              <p>{inputValue}</p>
              <p>{qrColor}</p>
              <p>{qrSize}</p> */}
            
            
            <br />
            <p className="grupo5">Descargar QR</p>
            <button onClick={handleDownload} className="button22" role="button">Png</button>
            <button onClick={handleDownload2} className="button22" role="button">Jpeg</button>
            <button onClick={handleDownload3} className="button22" role="button">Svg</button>
            </div>
            <div className="imgCrear">
              <Link to="/CrearQr">
                    <StaticImage className="logoheader"
                src="../images/flecha.png"
              /></Link>
            </div>
        </div>
        </div>
      </Layout>
    );
}
export default CrearQr