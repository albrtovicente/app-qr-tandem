import React, { useEffect, useState } from 'react';
import Layout from "../componentes/layout/layout";
import PopoverDelete from './delete/popoverDelete';
import UpdateUser from './update_user';
import { Link } from "gatsby"
import Button from "../componentes/button/button"
import { StaticImage } from 'gatsby-plugin-image';
import ModalTandem from '../componentes/modal/modal';
import DeleteUser from './delete/deleteUser';
import ChangeRole from './change_role';
import { colors } from '@mui/material';
function ListUser({ url }) {

    const [users,setUsers]=useState([]);
    const {message,setMessage}=useState('')
    
        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await fetch('http://localhost/api-qr-tandem/v1/list-users.php', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setUsers(data.users)
                    setMessage(data.message)
                } catch (error) {
                    console.log('Error al buscar la lista de usuarios', error);
                    console.error('Stack trace:', error.stack);
                }
            };
            fetchUser();
        }, [url]);
        return (
        <>
        <Layout>
        <div class="containertabla">
        
        <table className="table">
            <thead className="table-header">
            <tr>
                <th className="header__item">Id</th>
                <th className="header__item">Nombre</th>
                <th className="header__item">Correo</th>
                <th className="header__item">Delegacion</th>
                <th className="header__item">Rol</th>
                <th className="header__item">Image_url</th>
                <th className="header__item">Creado</th>
            </tr>
            </thead>
            <tbody className="table-content">
            {users.map((user) => (
            <tr className="table-row"  key={user.id}>
                <td className="table-data">{user.id}</td>
                <td className="table-data">{user.nombre}</td>
                <td className="table-data">{user.email}</td>
                <td className="table-data">{user.delegacion}</td>
                <td className="table-data">{user.role}</td>
                <td className="table-data">{user.image_url}</td>
                <td className="table-data">{user.created_at}</td>
                <td>
                <ModalTandem
                    boton="Modificar"
                    text={<UpdateUser initialNombre={user.nombre} initialEmail={user.email} initialDelegacion={user.delegacion}></UpdateUser>}
                />
                </td >
                
                <td>
                <ModalTandem
                    
                    boton="Cambiar rol"
                    text={<ChangeRole></ChangeRole>}
                />
                </td>

                <td >
                <ModalTandem
                    
                    boton="Borrar"
                    text={<DeleteUser></DeleteUser>}
                />
                </td>
            
            </tr>
            
            
            ))}
            </tbody>
        </table>
        <Button><Link to="/CrearQr" style={{color: `white`, textDecoration: `none`}}>Atrás</Link></Button>
        </div>	 
        </Layout>
        </>
    );
}
export default ListUser;