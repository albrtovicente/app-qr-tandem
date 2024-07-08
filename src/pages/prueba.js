import * as React from "react"
import Layout from "../componentes/layout/layout"
import UploadUserImage from "../componentes/upload-user-images/UploadUserImage"
import ChangeAvatar from "../componentes/change-avatar/change-avatar"


const Prueba = () => {
  
    return (
      <Layout>
        
         <h1 style={{textAlign: `center`}}>Política de privacidad</h1>  
        
         <UploadUserImage></UploadUserImage>
         <ChangeAvatar></ChangeAvatar>
          
  
      </Layout>
      
    )
}
  
  export default Prueba