
import { useEffect, useState } from "react";

export default function Index() {
  const priceUnit = 1.5;
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(priceUnit);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if(quantity > 0){
      setQuantity(quantity - 1);
    }
  };
  
  useEffect(() => {
    setTotal(quantity * priceUnit);
  }, [quantity]);

  return (
    <div>
      <h1>Component 08</h1>

      <section>
        <h2>useEffect</h2>

        <p>
          É um <b>hook</b>, uma função especial do React, que permite controlar o ciclo de um componente e quando ele deve ser renderizado ou re-renderizado. <br />
          possui 2 argumentos: <br />
          1 - É uma função callback que irá ser executada. <br />
          2 - É uma array de dependências, se esta dependência mudar renderize o componente novamente. <br />
        </p>

        <h2>U$: {priceUnit}</h2>
        <button onClick={increment}>+</button> &nbsp;
        
        <span>Qty: {quantity}</span> &nbsp;

        <button onClick={decrement}>-</button>
        <h2>Total: {total}</h2>
      </section>
      <br /><hr/><br />
    </div>
  )
}



