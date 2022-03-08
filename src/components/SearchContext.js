import {createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider =({children})=>{

    const [buscar,setBuscar]=useState('');  // estado buscar productos por categoria, modelo,marca
    
    return(
        <SearchContext.Provider value={{setBuscar,buscar}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;