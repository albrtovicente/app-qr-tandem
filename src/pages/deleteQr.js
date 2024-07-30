
import React, { useState } from 'react';


const DeleteQr = () => {
    const [nombre_ref, setNombre_ref] = useState('');
    
    const handleNombre_ref=(e) => setNombre_ref(e.target.value);

    const Delete2 = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/delete-qr.php', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre_ref})
            });
            
            const respuesta = await response.json();
            
            } catch (error) {
                console.error('Error Borrando qr', error);
            }
    };

    return (
            <div>
            <h3>Borrar Qr</h3>
            <form action="/my-handling-form-page" method="post" className="formAcceso" >
                <ul className="lista">
                    
                    <li >
                    
                        <div className="icono">
                        <input
                            placeholder='nombre'
                            type="text"
                            value={nombre_ref}
                            onChange={handleNombre_ref}
                        />                
                        </div>
                    </li>
                    
                </ul>
            </form>
            
            
            <button onClick={Delete2} className='button22'>Eliminar Qr</button>
            
            
            </div>
    );
};
export default DeleteQr;