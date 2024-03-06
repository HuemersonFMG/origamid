import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const baseUrl = 'https://ranekapi.origamid.dev/json/api/produto/';

export const GlobalStorage = ({children}) => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => setDatas(json));
  }, []);

  function clearDatas(){
    setDatas(null);
  }

  return (
    <GlobalContext.Provider value={{datas, clearDatas}}>
      {children}
    </GlobalContext.Provider>
  )
}