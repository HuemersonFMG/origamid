import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Clear = () => {
  const {clearDatas} = useContext(GlobalContext);

  return(
    <button onClick={clearDatas}>Clear</button>
  )
}

export default Clear;