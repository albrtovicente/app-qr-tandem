import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { StaticImage } from "gatsby-plugin-image"

export default function Pipiver (){
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
   const rol = localStorage.getItem('tandem_role')
   const email = localStorage.getItem('tandem_email')
   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;
   if(rol=='guest'){
     return(
         <>
         <div>
             <Button className='boton' aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
                <StaticImage className="logoheader"
                    src="./../images/acceso.png"
                    loading="eager"
                    width={80}
                    height={80}
            />
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

                     <li>Nombre: {localStorage.getItem('tandem_nombre')}</li>
                     <li>Email: {localStorage.getItem('tandem_email')}</li>
                     <li>Delegacion: {localStorage.getItem('tandem_delegacion')}</li>

                     <li>role: {rol}</li>
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
                 </ul>
                 </Typography>
             </Popover>
             </div>
    
         </>
     )
 }

  
};
