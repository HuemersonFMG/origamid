import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Index = () => {
  const global = useContext(GlobalContext);

  return (
    <>
      <h1>Component 13</h1>

      <section>
        <h2>createContext + useContext</h2>
        
        <h2>Product: {global.name}</h2>
        
        <button onClick={() => global.counterOne()}>Count + 1</button> &nbsp; 
        <button onClick={() => global.counterTwo()}>Count + 2</button>
        <p>
          Qty: {global.counter}
        </p>
      </section>
    </>
  )
}

export default Index
