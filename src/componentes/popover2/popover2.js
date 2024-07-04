// import React from 'react'
// import { Link } from 'gatsby'
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// export default function BasicoPopover2 (){
//    const [anchorEl, setAnchorEl] = React.useState(null);
//    const handleClick = (event) => {
//      setAnchorEl(event.currentTarget);
//    };
//    const handleClose = () => {
//      setAnchorEl(null);
//    };
//    const rol = localStorage.getItem('tandem_role')
//    const email = localStorage.getItem('tandem_email')
//    const open = Boolean(anchorEl);
//    const id = open ? 'simple-popover' : undefined;
//    if(rol=='guest'){
//      return(
//          <>
//          <div>
//              <Button aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
//                  popover
//              </Button>
//              <Popover
//                  id={id}
//                  open={open}
//                  anchorEl={anchorEl}
//                  onClose={handleClose}
//                  anchorOrigin={{
//                  vertical: 'bottom',
//                  horizontal: 'left',
//                  }}
//              >
//                  <Typography sx={{ p: 2 }}  style={{}}>
           
//                  <ul>
//                      <li>Nombre: {localStorage.getItem('tandem_nombre')}</li>
//                      <li>Email: {localStorage.getItem('tandem_email')}</li>
//                      <li>Id: {localStorage.getItem('tandem_id')}</li>
//                      <li>role: {rol}</li>
//                  </ul>
//                  </Typography>
//              </Popover>
//              </div>
    
//          </>
//      )
//  }

  
// };
