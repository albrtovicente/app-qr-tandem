import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "gatsby"
import CerrarSesion from '../cerrarSesion/cerrar_sesion';
import ChangeRole from '../../pages/change_role';
import { StaticImage } from "gatsby-plugin-image";
import UploadUserImage from '../upload-user-images/UploadUserImage';
import ChangeAvatar from '../change-avatar/change-avatar';

export default function Pipiver (){
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
   
   const rol = localStorage.getItem('tandem_role')
   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;
   if(rol=='guest'){
     return(
         <>
         <div>
             <Button className='boton' aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
                {/* <StaticImage className="logoheader"
                    src={imgruta}
                    loading="eager"
                    width={80}
                    height={80}
                /> */}
                {/* <ChangeAvatar></ChangeAvatar> */}
             </Button>
             <Popover
                 id={id}
                 open={open}
                 anchorEl={anchorEl}
                 onClose={handleClose}
                 anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
                 }}
             >
                 <Typography sx={{ p: 2 }}  style={{}}>
           
                 <ul style={{listStyle: `none`}}>

                     <li>Nombre: {localStorage.getItem('tandem_nombre')}</li>
                     <li>Email: {localStorage.getItem('tandem_email')}</li>
                     <li>Delegacion: {localStorage.getItem('tandem_delegacion')}</li>
                     {/* <UploadUserImage></UploadUserImage> */}
                     <li>role: {rol}</li>
                     <li>
                        <Link to="/index">
                            <CerrarSesion>
                            </CerrarSesion>
                        </Link> 
                     </li>
                     
                 </ul>
                 </Typography>
             </Popover>
             
            </div>
    
         </>
     )
 }
   if(rol=='employee'){
     return(
         <>
         <div>
             <Button aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
                 popover
             </Button>
             <Popover
                 id={id}
                 open={open}
                 anchorEl={anchorEl}
                 onClose={handleClose}
                 anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
                 }}
             >
                 <Typography sx={{ p: 2 }}  style={{}}>
           
                 <ul>

                     <li>ID: {localStorage.getItem('tandem_id')}</li>
                     <li>Nombre: {localStorage.getItem('tandem_nombre')}</li>
                     <li>Email: {localStorage.getItem('tandem_email')}</li>
                     <li>Delegacion: {localStorage.getItem('tandem_delegacion')}</li>
                     <li>role: {rol}</li>
                     <li>
                        <Link to="/index">
                            <CerrarSesion>
                            </CerrarSesion>
                        </Link> 
                     </li>
                 </ul>
                 </Typography>
             </Popover>
             </div>
    
         </>
     )
 }
   if(rol=='admin'){
     return(
         <>
         <div>
             <Button aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
             Popover
             </Button>
             <Popover
                 id={id}
                 open={open}
                 anchorEl={anchorEl}
                 onClose={handleClose}
                 anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
                 }}
             >
                 <Typography sx={{ p: 2 }}  style={{}}>
           
                 <ul>
                    <li>ID: {localStorage.getItem('tandem_id')}</li>
                    <li>Nombre: {localStorage.getItem('tandem_nombre')}</li>
                    <li>Email: {localStorage.getItem('tandem_email')}</li>
                    <li>Delegacion: {localStorage.getItem('tandem_delegacion')}</li>
                    <li>role: {rol}</li>
                    <li>
                        <Link to="/index">
                            <CerrarSesion>
                            </CerrarSesion>
                        </Link> 
                     </li>
                     <li>
                        <Link to="/tablausuario">
                            Tabla de usuarios
                        </Link> 
                     </li>
                     <li>
                        <Link to="/change_role">
                            Cambiar Rol
                        </Link>
                     </li>
                 </ul>
                 </Typography>
             </Popover>
             </div>
    
         </>
     )
 }

  
};
