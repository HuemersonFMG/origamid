import { useState } from "react"

export default function Index() {
  const [increment, setIncrement] = useState(0);

  function fnPluss(){
    setIncrement(increment + 1);
  }

  function fnMinus(){
    if(increment > 0){
      setIncrement(increment - 1);
    }
  }

  return (
    <div>
      <h1>Component 07</h1>

      <section>
        <h2>useState</h2>

        <p>
          É um <b>Hook</b>, função especial do React, que permite controlar o estado e o ciclo de um componente. <br />
          possui 2 argumentos: <br />
          1 - É o valor inicial. <br />
          2 - É uma função que altera o valor inicial. <br />
          Não é permitido modificar o estado diretamente, sempre necessário utilizar a função atualizadora para isso.
        </p><br />

        <button onClick={fnPluss}>+</button>
        {' '} <span>{increment}</span> {' '}
        <button onClick={fnMinus}>-</button>
      </section>
      <br /><hr /><br />
    </div>
  )
}
