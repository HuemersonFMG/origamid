import { createContext, useState } from "react"

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {
  const [counter, setCounter] = useState(0);

  function addOne(){
    setCounter((counter) => counter + 1);
  }

  function addTwo(){
    setCounter((counter) => counter + 2);
  }

  return (
    <GlobalContext.Provider value={{counter, addOne, addTwo}}>
      {children}
    </GlobalContext.Provider>
  );
};