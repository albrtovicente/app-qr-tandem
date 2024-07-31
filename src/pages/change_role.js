import * as React from "react"
import { useState } from 'react';

const ChangeRole = ({initialEmail, initialRole, onUserUpdated}) => {
   

    const [email] = useState(initialEmail);
    const [role, setRole] = useState(initialRole);
    const [message, setMessage] = useState('');
    

    
    const handleRole=(e) => setRole(e.target.value);


    const handleChangeRole = async (e) => {
        e.preventDefault();

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
             console.error('Error registrando usuario', error);
             
            onUserUpdated();

         }
     };
 
 return (
     <>
         <div>
      <h2>Actualizar Rol de Usuario</h2>
      <form onSubmit={handleChangeRole}>
        <div>
          <p>{email}</p>
        </div>
        <div>
          <label>
            Role:
            <select id="roleSelect" value={role} onChange={handleRole} required>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="guest">Guest</option>
            </select>
          </label>
        </div>
        <button type="submit">Actualizar Rol</button>
      </form>
      {message && <p>{message}</p>} 
    </div>
        </>
    );
};
export default ChangeRole;
