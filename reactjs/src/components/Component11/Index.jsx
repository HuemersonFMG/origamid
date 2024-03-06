import { useCallback, useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <>
      <h1>Component 11</h1>

      <section>
        <h2>useCallback</h2>

        <p>
          Permite definirmos um callback e uma lista de dependências do
          callback. Esse callback só será recriado se essa lista de dependências
          for modificada.
        </p>

        <button onClick={handleClick}>{count}</button>
      </section>
      <br />
      <hr />
      <br />
    </>
  );
}
