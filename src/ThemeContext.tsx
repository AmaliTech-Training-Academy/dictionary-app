import React, { useState } from 'react';

export const ThemeContext = React.createContext<any>({})

export const ThemeProvider:React.FC<any> = ({children}) => {

    const [toggle, setToggle] =useState<boolean>(false);
    const [emptySearchBox, setEmptySearchBox] =useState<any>(false);
  
    return (
    <ThemeContext.Provider value={{toggle,setToggle,emptySearchBox,setEmptySearchBox}}>
        {children}           
    </ThemeContext.Provider>
  )
}
