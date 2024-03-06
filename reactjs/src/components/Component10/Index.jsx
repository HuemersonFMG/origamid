import { useMemo, useState } from "react"

export default function Index() {
  const [count, setCount] = useState(0);
  const value = useMemo(() => {
    const localItem = window.localStorage.getItem('product');
    console.log('Ocorreu o MEMO!!!');

    return localItem;
  }, []);

  console.log(value);
  
  return (
    <>
      <h1>Component 10</h1>
      
      <section>
        <h2>useMemo</h2>

        <p>
          Memoriza um valor, evitando a recriação do mesmo, toda vez que um componente for atualizado. <br />
          Recebe um callback e uma array de dependências.
        </p>

        <button onClick={() => setCount(count + 1)}>{count}</button>
      </section>
      <br /><hr/><br />
    </>
  )
}
