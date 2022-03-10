import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider =({children})=>{
   const [listRegister,setListRegister]=useState([]);
   const [userActive,setUserActive]=useState('');
   const [activeLogin,setActiveLogin]=useState(false);

    let usuarioAnterior = JSON.parse(localStorage.getItem('users')) // recuperar datos de usuarios en localStorage
    
    if (listRegister.length===0 && usuarioAnterior!==null){  //si hay usuarios registrados recuperar esos datos
        setListRegister(usuarioAnterior); //setear en la lista de usuarios los datos recuperados del localStorage
    }
   
   if(listRegister.length>0){  // guardar datos de registro de los usuarios
       localStorage.setItem('users',JSON.stringify(listRegister))
   }
    return(
        <UserContext.Provider value={{setListRegister,listRegister,setUserActive,setActiveLogin,activeLogin,userActive}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;