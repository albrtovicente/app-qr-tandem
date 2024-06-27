

import './registro2.css'
import React, { useState } from 'react';
const ShowPass = () => {
    let password = document.getElementById('password');
    let viewPassword = document.getElementById('viewPassword');
    let click = false;
        viewPassword.addEventListener('click', (e)=>{
    if(!click){
        password.type = 'text'
        click = true
    }else if(click){
        password.type = 'password'
        click = false
    }
    })

    return (
               
                <div class="row">
                    <div class="col s12 m12 l6">
                    <label for="password">Ingrese su contraseña</label>
                        <input type="password" id="password"/>
                    </div>
                    <div class="col s12">
                    <a id="viewPassword">Mostrar contraseña</a>
                    </div>
                </div>
        
    );
};
export default ShowPass;