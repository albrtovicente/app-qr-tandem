
import * as React from "react"
import { useState } from 'react';
const ChangeRole = () => {
   

    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    
    const [message, setMessage] = useState('');

    
    const handleRole=(e) => setRole(e.target.value);
    


    const handleChangeRole = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/change-role.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, role })
            });
            const data = await response.json();
            
            setMessage(data.message);
            } catch (error) {
                console.error('Error cambiando rol del usuario', error);
                setMessage('Error cambiando rol del usuario');
            }
        };
    
    return (
       
            <div >
            
            <h3>Cambio de Role</h3>
            <form action="/my-handling-form-page" method="post" className="formAcceso" >
                <ul className="lista">
                    
                    <li className="mail">
                    
                        <div class="icono">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />                
                        </div>
                    </li>
                    <li className="pass">
                    <div class="icono2">
                        <input
                            // className="input"
                            type="text"
                            placeholder="cambiar rol"
                            id='text'
                            value={role}
                            onChange={handleRole}
                        />
                        <label htmlFor='text' className="label"></label>
                    </div>
                    </li>
                </ul>
            </form>
            
            
            <button onClick={handleChangeRole}>Cambiar Role</button>
            
            </div>
    );
};
export default ChangeRole;