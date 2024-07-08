import React from 'react'


const CerrarSesion = () => {
  const handleCerrarSesion =()=>{
    window.location.href='/';
    localStorage.removeItem('tandem_role');
    localStorage.removeItem('tandem_id');
    localStorage.removeItem('tandem_email');
    // localStorage.removeItem('tndm_token');
    window.location.href='/login'
  }

  return (
    <>
      <button onClick={handleCerrarSesion}>Cerrar sesión</button>
    </>
  )
}

export default CerrarSesion