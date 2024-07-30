

import * as React from "react"
import { useState, useRef } from 'react';
import './registro.css'
import Layout from "../componentes/layout/layout";
import { Link } from "gatsby"



const GuardarQr = () => {
  // ****************
      // const [inputValue, setInputValue] = useState('');
      // const [latLng, setLatLng] = useState({ lat: 40.030501, lng: -3.604052 });
      // const [qrColor, setQrColor] = useState('black');
      // const [qrSize, setQrSize] = useState(100);
      // const qrRef = useRef(null);
      // const [descargado, setDescargado] = useState(false);
      // const [inputType, setInputType] = useState('url');
      // const [selectedFormat, setSelectedFormat] = useState('png');



    


      // const handleColorChange = (color) => {
      // setQrColor(color);

      // };

      // const handleSizeChange = (size) => {
      // setQrSize(parseInt(size, 10));
      // };

      // const handleFormatChange = (event) => {
      // setSelectedFormat(event.target.value);
      // };

      // const handleDownload = async () => {
      // if (qrRef.current) {
      //   let dataUrl;
      //   if (selectedFormat === 'png') {
      //     dataUrl = await toPng(qrRef.current);
      //     setDescargado(true);
      //   } else if (selectedFormat === 'jpeg') {
      //     dataUrl = await toJpeg(qrRef.current);
      //     setDescargado(true);
      //   } else if (selectedFormat === 'svg') {
      //     dataUrl = await toSvg(qrRef.current);
      //     setDescargado(true);
      //   }
      //   download(dataUrl, `qr-code.${selectedFormat}`);
      // }
      // };

      // const containerStyle = {
      // backgroundColor: "beige",
      // border: "2px solid black",
      // padding: "20px",
      // borderRadius: "10px",
      // textAlign: "center",
      // };
      // const style = {
      //     position: 'absolute',
      //     top: '50%',
      //     left: '50%',
      //     transform: 'translate(-50%, -50%)',
      //     width: 400,
      //     bgcolor: 'background.paper',
      //     border: '2px solid #000',
      //     boxShadow: 24,
      //     p: 4,
      //   };
      // const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta'];

      // const [open, setOpen] = React.useState(false);
      // const handleOpen = () => setOpen(true);
      // const handleClose = () => setOpen(false);
  // **********
    const [data, setData] = useState('');
    const [nombre_ref, setNombre_ref] = useState('');
    const [description, setDescription] = useState('');
    const [created_by, setCreated_by]= useState('');
    const [message, setMessage] = useState('');

    const hadleData=(e) => setData(e.target.value);
    const hadleNombre_ref=(e) => setNombre_ref(e.target.value);
    const hadleDescription=(e) => setDescription(e.target.value);
    const hadleCreated_by=(e) => setCreated_by(e.target.value);


    const handleGuardar = async () => {
      
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/create-qr.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "data": data,
                    "nombre_ref": nombre_ref,
                    "description": description,
                   "created_by": created_by
                })
            });
            const respuesta = await response.json();
            
            setMessage(respuesta.message);
        } catch (error) {
            console.error('Error registrando usuario', error);
            setMessage('Error en el registro');
        }
    };

    return (
    //   <Layout>
    //     <div className="container2">
    //     <div className="containerQr" >
    //     <div className="qr-generador" style={containerStyle}>
    //       <div className="columnaCrear">
            
    //       <div className="tituloCrear">
    //         <h1>GENERADOR DE QR</h1>
    //         <updateUser></updateUser>
    //       </div>
    //       <div className="linkCrear">
            
    //           <Pipiver>
    //             <StaticImage className="logoheader"
    //               src="..\componentes\images\acceso.png"
    //               loading="eager"
    //               width={80}
    //               height={80}
    //             />
    //           </Pipiver> 
  
    //       </div>
    //       </div>
          
    //         <BasicPopover></BasicPopover>
            
            
            
    //         <div className="contenidoqr">
    //         <p className="grupo1">Contenido del QR</p>
    //                 <br />
    //         <div className="tabStyle">
    //         <CenteredTabs 
    //           inputValue={inputValue} 
    //           setInputValue={setInputValue} 
    //           latLng={latLng} 
    //           setLatLng={setLatLng} 
    //           setInputType={setInputType}
    //         />
    //         </div> 
    //         </div>
            
  
    //       <div className="personalizarqr">
    //              <p className="grupo2">Personalizar QR</p>
    //         <Qrcomponent
    //           onColorChange={handleColorChange}
    //           onSizeChange={handleSizeChange}
    //           colorOptions={colorOptions}
    //         />
    //       </div>
    //       <div className="qr-contenido">
    //           <p className="grupo3">Tu QR</p>
    //           <div ref={qrRef}>
    //           <div ref={qrRef}>
    //           <QRCode
    //             value={inputType === 'coordinates' ? `${latLng.lat},${latLng.lng}` : inputValue}
    //             size={qrSize}
    //             fgColor={qrColor}
    //           />
    //           </div>
    //         </div>
    //       </div>
            
          
    // <div className="qr-opciones">
    //   <div className="qr-guardar">
    //   <h3 className="grupo5">
    //     Guardar</h3>       
    //     <ul>
    //       <label for="nombre">Nombre:</label>
    //       <input type="text" id="nombre" name="nombre" value={nombre_ref} onChange={hadleNombre_ref}/>
    //     </ul>
    //     <ul>
    //       <label for="descripcion">Descripción:</label>
    //       <input type="text" id="descripcion" name="descripcion" value={description} onChange={hadleDescription} />
    //     </ul>            
    //     <ul className="button22" >
    //         <ModalTandem
                    
    //                 boton="Guardar"
    //                 text={<GuardarQr></GuardarQr>}
    //             />
          
    //     </ul>            
    //     <button onClick={handleGuardar} type="submit"  className='button22'>Guardar
            
    //         </button> 
    //   </div>
        
    //   <div className="qrcompartir">
    //     <div className="grupo5">Compartir QR</div>
    //       <br></br>
    //     <button onClick={handleOpen} className='button22'>Compartir
    //     </button>
    //   </div>
    //   <div className="qrcreado">
    //     <div className="grupo5">Descargar QR</div>
    //     <br></br>
    //   <button onClick={handleOpen} className='button22'>Descargar QR
    //      </button>
    //   </div>
    //         <Modal
    //           open={open}
    //           onClose={handleClose}
    //           aria-labelledby="modal-modal-title"
    //           aria-describedby="modal-modal-description"
    //         >
    //           <Box sx={style}>
    //             <Typography id="modal-modal-title" variant="h6" component="h2">
    //               <p>Selecciona el formato para descargar el QR</p>
    //             </Typography>
    //             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //               <div className="grupo5">
    //                 <label>
    //                   <input
    //                     type="radio"
    //                     value="png"
    //                     checked={selectedFormat === 'png'}
    //                     onChange={handleFormatChange}
    //                   />
    //                   PNG
    //                 </label>
    //                 <label>
    //                   <input
    //                     type="radio"
    //                     value="jpeg"
    //                     checked={selectedFormat === 'jpeg'}
    //                     onChange={handleFormatChange}
    //                   />
    //                   JPEG
    //                 </label>
    //                 <label>
    //                   <input
    //                     type="radio"
    //                     value="svg"
    //                     checked={selectedFormat === 'svg'}
    //                     onChange={handleFormatChange}
    //                   />
    //                   SVG
    //                 </label>
    //               </div>
    //               <button onClick={handleDownload} className="button22">
    //                 Descargar QR
    //               </button> 
    //               {descargado && <p className="pdescarga">¡El QR se ha descargado!</p>}
    //             </Typography>
    //             <Button onClick={handleClose}>Cerrar</Button>
    //           </Box>
    //         </Modal>
  
  
    //       </div>
    //     </div>       
  
        
    //   </div>
    //   </div>
    //   </Layout>
      <Layout>
      <div className="imgFondo">

      <div class="signupFrm">
        <div action="" class="form">
              <div className="columnaRegistro">
                <div className="tituloRegistro">
                  <h1 class="title">Guardar</h1>
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
                id='data'
                value={data}
                onChange={hadleData}
            />
            <label htmlFor='data' class="label">Datos</label>
          </div>

          <div class="inputContainer">
          <input
                className="input"
                type="text"
                placeholder=""
                id='nombre_ref'
                value={nombre_ref}
                onChange={hadleNombre_ref}
            />
            <label htmlFor='nombre_ref' class="label">nombre_ref</label>
          </div>

          <div class="inputContainer">
          <input
                className="input"
                type="text"
                placeholder=""
                id='description'
                value={description}
                onChange={hadleDescription}
            />
            <label htmlFor='description' class="label">descripcion</label>
          </div>

          <div class="inputContainer">
            <input
                className="input"
                type="text"
                placeholder=""
                id='created_by'
                value={created_by}
                onChange={hadleCreated_by}
            />
            <label htmlFor='created_by' className="label">Creado por:</label>
          </div>

            <input onClick={handleGuardar} type="submit" class="submitBtn" value="guardar"/>
            {message && <p>{message}</p>}
            
        </div>
             
        </div>
        </div>
      </Layout>
    );
};

export default GuardarQr;