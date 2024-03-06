import {useState} from 'react';
import ProductsAPI from '../ProductsAPI/Index';

export default function Index() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  const baseAPI = 'https://ranekapi.origamid.dev/json/api/produto/';

  async function handleClick(e){
    try {
      setLoading(true);
  
      const endPoint = e.target.innerText;
      const response = await fetch(`${baseAPI}${endPoint}`);
      const json = await response.json();
      setDados(json);
  
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Exrcice 04</h1>
      <button onClick={handleClick}>notebook</button> {' '}
      <button onClick={handleClick}>smartphone</button> {' '}
      <button onClick={handleClick}>tablet</button>
      {loading && <p>Loading...</p>}
      {!loading && dados && <ProductsAPI dados={dados}/>}
    </>
  )
}
