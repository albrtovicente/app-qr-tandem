
import React, { useState }from "react"
const UpdateUser = ({initialNombre, initialEmail, initialDelegacion}) => {
   

    const [nombre, setNombre] = useState(initialNombre);
    const [email, setemail] = useState(initialEmail);
    const [delegacion, setDelegacion] = useState(initialDelegacion);
    
    const [message, setMessage] = useState('');

    
    const handleNombre=(e) => setNombre(e.target.value);
    const handleEmail=(e) => setemail(e.target.value);
    const handleDelegacion=(e) => setDelegacion(e.target.value);


    const handleUpdateUser = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/update-user.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, nombre, delegacion })
            });
            const data = await response.json();
            
            setMessage(data.message);
            } catch (error) {
                console.error('Error registrando usuario', error);
                setMessage('Error en el registro');
            }
        };
    
    return (

            <div>
            <h3>Actualizar Usuario</h3>
            <form action="/my-handling-form-page" method="post" className="formAcceso" >
                <ul className="lista">
                    
                    <li className="mail">
                    
                        <div className="icono" style={{width: `200px`}}>

                        <input 
                            id="input"
                            type="text"
                            value={email}
                            onChange={handleEmail}
                        />
                        </div>
                            
                            
                    </li>
                    <li className="pass">
                    <div className="icono3">
                        <input
                            type="text"
                            id='text'
                            value={nombre}
                            onChange={handleNombre}
                        />
                        
                    </div>
                    </li>
                    <br></br><br></br>
                    <li>
                    <div className="icono4" style={{width: `200px`, marginLeft: `80px`}}>
                        <input
                            placeholder="delegacion"
                            type="text"
                            value={delegacion}
                            onChange={handleDelegacion}
                        />
                    </div>
                    </li>
                    
                </ul>
            </form>
            
            
            <button onClick={handleUpdateUser} className="button22">Actualizar usuario</button>
            
            
            </div>
    );
};
export default UpdateUser;