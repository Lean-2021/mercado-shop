import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider =({children})=>{
   const [listRegister,setListRegister]=useState([]);
   const [userActive,setUserActive]=useState('');
   const [activeLogin,setActiveLogin]=useState(false);

   
          
    return(
        <UserContext.Provider value={{setListRegister,listRegister,setUserActive,setActiveLogin,activeLogin,userActive}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;