import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useState, useRef } from "react";
import Layout from "../componentes/layout/layout";
import Qrcomponent from "../componentes/qrcomp/qr";
import QRCode from 'qrcode.react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import download from "downloadjs";
import CenteredTabs from "../componentes/tab/tab";
// import Modall from "../components/modal";
import BasicPopover from "../componentes/popover/popover"
import Pipiver from "../componentes/popover2/pipiver";
import ChangeRole from "./change_role";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './CrearQr.css';
import UploadUserImage from "../componentes/upload-user-images/UploadUserImage";
import ChangeAvatar from "../componentes/change-avatar/change-avatar";
import CerrarSesion from "../componentes/cerrarSesion/cerrar_sesion";


// import Mapa from "../componentes/mapa/mapa";
// import { FaDownload, FaEdit, FaSave } from 'react-icons/fa';
// import SaveDb from "../components/savedb";


function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [latLng, setLatLng] = useState({ lat: 40.030501, lng: -3.604052 });
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const qrRef = useRef(null);
  const [descargado, setDescargado] = useState(false);
  const [inputType, setInputType] = useState('url');
  const [selectedFormat, setSelectedFormat] = useState('png');

  /////////////////
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };
//////////////////////////


  const handleColorChange = (color) => {
    setQrColor(color);
    
  };
  
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleDownload1 = async () => {
    if (qrRef.current) {
      let dataUrl;
      if (selectedFormat === 'png') {
        dataUrl = await toPng(qrRef.current);
        setDescargado(true);
      } else if (selectedFormat === 'jpeg') {
        dataUrl = await toJpeg(qrRef.current);
        setDescargado(true);
      } else if (selectedFormat === 'svg') {
        dataUrl = await toSvg(qrRef.current);
        setDescargado(true);
      }
      download(dataUrl, `qr-code.${selectedFormat}`);
    }
  };

  const containerStyle = {
    backgroundColor: "beige",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta'];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Layout>
      <div className="container2">
      <div className="containerQr" >
      <div className="qr-generador" style={containerStyle}>
        <div className="columnaCrear">
          
        <div className="tituloCrear">
          <h1>GENERADOR DE QR</h1>
        </div>
        <div className="linkCrear">
            {/* <Link to="/pipiver">
                <StaticImage className="logoheader"
                src="..\componentes\images\acceso.png"
                loading="eager"
                width={80}
                height={80}
              /></Link> */}
            <Pipiver>
              <StaticImage className="logoheader"
                src="..\componentes\images\acceso.png"
                loading="eager"
                width={80}
                height={80}
              />
            </Pipiver> 

        </div>
        </div>
        
        {/* <UploadUserImage></UploadUserImage>
        <ChangeAvatar></ChangeAvatar> */}
          <BasicPopover></BasicPopover>
          
          
          
          <div className="contenidoqr">
          <p className="grupo1">Contenido del QR</p>
                  <br />
                   <div className="tabStyle">
          <CenteredTabs 
            inputValue={inputValue} 
            setInputValue={setInputValue} 
            latLng={latLng} 
            setLatLng={setLatLng} 
            setInputType={setInputType}
          />
          </div> 
          </div>
          

        <div className="personalizarqr">
               <p className="grupo2">Personalizar QR</p>
          {/* <h3><FaEdit style={{ color: '#43381b' }}/>Personaliza tu QR:</h3> */}
          <Qrcomponent
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            colorOptions={colorOptions}
          />
        </div>
        <div className="qr-contenido">
            <p className="grupo3">Tu QR</p>
            <div ref={qrRef}>
            <div ref={qrRef}>
            <QRCode
              value={inputType === 'coordinates' ? `${latLng.lat},${latLng.lng}` : inputValue}
              size={qrSize}
              fgColor={qrColor}
            />
            </div>
          </div>
        </div>
        <div className="modales">
          {/* <Modall></Modall> */}
        {/* <SaveDb data={inputValue} nref="manolita" desc="paca" userId="1"></SaveDb> */}
          
        
  <div className="white gr">
    <h3>
      {/* <FaSave></FaSave> */}
      Guardar</h3>       
  <ul><label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange}/>
 </ul>
 <ul>
  <label for="descripcion">Descripción:</label>
  <input type="text" id="descripcion" name="descripcion" value={descripcion} onChange={handleDescripcionChange} />
    </ul>            
    {/* <SaveDb 
                data={inputType === 'coordinates' ? `${latLng.lat},${latLng.lng}` : inputValue} 
                nref={nombre} 
                desc={descripcion} 
                userId="1"
                >
                </SaveDb> */}
    </div>   
    <br />
    <div className="qrcreado"><div className="grupo5">Descargar QR</div>
      <br></br>
    <Button onClick={handleOpen} className='button-collapse'>Descargar QR
       {/* <FaDownload style={{ color: '#43381b' }}/> */}
       </Button>
       </div>
          
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>Selecciona el formato para descargar el QR</p>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="grupo5">
                  <label>
                    <input
                      type="radio"
                      value="png"
                      checked={selectedFormat === 'png'}
                      onChange={handleFormatChange}
                    />
                    PNG
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="jpeg"
                      checked={selectedFormat === 'jpeg'}
                      onChange={handleFormatChange}
                    />
                    JPEG
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="svg"
                      checked={selectedFormat === 'svg'}
                      onChange={handleFormatChange}
                    />
                    SVG
                  </label>
                </div>
                <button onClick={handleDownload1} className="button22">
                  Descargar QR
                </button>
                {descargado && <p className="pdescarga">¡El QR se ha descargado!</p>}
              </Typography>
              <Button onClick={handleClose}>Cerrar</Button>
            </Box>
          </Modal>


        </div>
      </div>
      <div className="imgCrear">
        <Link to="/CrearQr">
              <StaticImage className="logoheader"
          src="/componentes/images/flecha.png"
        /></Link>
      </div>
      {/* <a href="/" role='button' className='button'>Volver a inicio</a> */}
      
    </div>
    </div>
    </Layout>
  );
}

export default Crearqr;


// import React,{useState} from "react"
// import Layout from "../componentes/layout/layout"
// import TabTandem from "../componentes/tab/tab"
// import {  useRef } from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
// import Opciones2 from "../componentes/opc/opc2"
// import BasicPopover from "../componentes/popover/popover"
// // import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react'
// import Qrcomponent from "../componentes/qrcomp/qr"
// import QRCode from "qrcode.react"
// import download from "downloadjs"
// import { toPng, toJpeg, toSvg } from "html-to-image"
// import CenteredTabs from "../componentes/centeredTabs/centeredTabs"
// import './CrearQr.css'

// function CrearQr() {
//     const [inputValue, setInputValue] = useState('');
//     const [qrColor, setQrColor] = useState('black');
//     const [qrSize, setQrSize] = useState(100);
//     const qrRef = useRef(null);
//     const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//     };
//     const handleColorChange = (color) => {
//     setQrColor(color);
//     };
//     const handleSizeChange = (size) => {
//       setQrSize(parseInt(size, 10));
//     };
//     const handleDownload = async () => {
//       if (qrRef.current) {
//         const dataUrl = await toPng(qrRef.current);
//         download(dataUrl, 'qr-code.png');
//       }
//     };
  
//     const handleDownload2 = async () => {
//       if (qrRef.current) {
//         const dataUrl = await toJpeg(qrRef.current);
//         download(dataUrl, 'qr-code.jpeg');
//       }
//     };
  
//     const handleDownload3 = async () => {
//       if (qrRef.current) {
//         const dataUrl = await toSvg(qrRef.current);
//         download(dataUrl, 'qr-code.svg');
//       }
//     };
//     // const containerStyle = {
//     // //   backgroundColor: "beige",
//     //   // border: "2px solid black",
//     //   // padding: "20px",
//     //   // borderRadius: "10px",
//     // };
//     const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta']; // Colores ampliados
//     return (

//       <Layout>
        
        
//         <div className="container2">
//           <div className="containerQr" >
//                   <h1>GENERADOR DE QR</h1>
//                 <BasicPopover></BasicPopover>

//               <div className="contenidoqr">
//                 <p className="grupo1">Contenido del QR</p>
//                   <br />
//                   <div className="tabStyle">
//                   <CenteredTabs 
//                     inputValue={inputValue} 
//                     setInputValue={setInputValue} 
//                     latLng={latLng} 
//                     setLatLng={setLatLng} 
//                     setInputType={setInputType}
//                   /> 
//                   </div>
//                   {/* <p>Introduce el contenido deseado</p> */}
                  
//               </div>
//               <div className="personalizarqr">
//                 <p className="grupo2">Personalizar QR</p>
//                 <Qrcomponent
//                   onColorChange={handleColorChange}
//                   onSizeChange={handleSizeChange}
//                   colorOptions={colorOptions}
//                 />
//               </div>
//             <br /> 
//             <div className="qr-contenido">
//               <p className="grupo3">Tu QR</p>
//               <div ref={qrRef}>
//               <QRCode
//                 value={inputType === 'coordinates' ? `${latLng.lat},${latLng.lng}` : inputValue}
//                 size={qrSize}
//                 fgColor={qrColor}
//               />
//               </div>
//             </div>
//             <br />
//             {/* <TandemButton enlace="#">Generar QR</TandemButton> */}
//             <div className="qrcreado">
//                {/* <p className="grupo4">QR creado</p>
//               <p>{inputValue}</p>
//               <p>{qrColor}</p>
//               <p>{qrSize}</p> */}
//             <Opciones2></Opciones2>
            
//             <br />
//             <p className="grupo5">Descargar QR</p>
//             <button onClick={handleDownload} className="button22" role="button">Png</button>
//             <button onClick={handleDownload2} className="button22" role="button">Jpeg</button>
//             <button onClick={handleDownload3} className="button22" role="button">Svg</button>
//             </div>
//             <div className="qrcreado">
//               <div className="grupo5">
//                  <p>Guardar Qr</p>
//                  <button onClick={handleDownload} className="button22" role="button">Png</button>
//               </div>
              
//             </div>
//             <div className="imgCrear">
//               <Link to="/CrearQr">
//                     <StaticImage className="logoheader"
//                 src="../images/flecha.png"
//               /></Link>
//             </div>
//         </div>
//         </div>
//       </Layout>
//     );
// }
// export default CrearQr