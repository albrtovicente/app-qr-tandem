import * as React from "react"
import "../button/button.css"

const Button =({action, children})=>{
    
    return(
        <>

            <button onClick={action} className="boton">
            {children}
            </button>
        </>
    
    )
}
export default Button