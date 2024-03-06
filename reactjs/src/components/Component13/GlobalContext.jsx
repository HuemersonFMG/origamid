import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {
  const [counter, setCounter] = useState(0);

  function counterOne(){
    setCounter(counter => counter + 1);
  }
  
  function counterTwo(){
    setCounter(counter => counter + 2);
  }

  return (
    <GlobalContext.Provider value={{name: 'Smartphone', counter, counterOne, counterTwo}}>
      {children}
    </GlobalContext.Provider>
  );
}