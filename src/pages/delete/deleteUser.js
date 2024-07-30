
import React, { useState } from 'react';


const DeleteUser = () => {
    const [email, setEmail] = useState('');
    
    const handleEmail=(e) => setEmail(e.target.value);

    const Delete = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/delete-user.php', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email})
            });
            
            const data = await response.json();
            
            } catch (error) {
                console.error('Error registrando usuario', error);
            }
    };

    return (
            <div>
            <h3>Borrar Usuario</h3>
            <form action="/my-handling-form-page" method="post" className="formAcceso" >
                <ul className="lista">
                    
                    <li >
                    
                        <div className="icono">
                        <input
                            placeholder='Email'
                            type="text"
                            value={email}
                            onChange={handleEmail}
                        />                
                        </div>
                    </li>
                    
                </ul>
            </form>
            
            
            <button onClick={Delete} className='button22'>Eliminar usuario</button>
            
            
            </div>
    );
};
export default DeleteUser;