import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../popover2/pipiver.css"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

export default function PerfilPipiver (){
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
   
   const rol = localStorage.getItem('tandem_role')
   const delegacion = localStorage.getItem('tandem_delegacion')
   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;
return(
    <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
           Perfil              
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
                    <li>Delegacion: {delegacion}</li>
                    <li>Rol: {rol}</li>
                </ul>
            </Typography>
        </Popover>
    </div>
)
};
                               