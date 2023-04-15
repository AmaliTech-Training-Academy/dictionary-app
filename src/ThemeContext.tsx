import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext<any>({});

export const ThemeProvider:React.FC<any> = ({children}) => {

  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setToggle(e.matches);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return (
    <ThemeContext.Provider value={{toggle,setToggle}}>
      {children}
    </ThemeContext.Provider>
  )
}
