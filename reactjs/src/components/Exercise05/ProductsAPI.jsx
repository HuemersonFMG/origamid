import { useEffect, useState } from "react"

export default function Index({product}) {
  const baseAPI = 'https://ranekapi.origamid.dev/json/api/produto/';
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    if(product !== null){
      fetch(`${baseAPI}${product}`)
      .then((resp) => resp.json())
      .then((json) => setDatas(json))
      .catch((err) => console.log(err));
    }
  }, [product]);

  if(datas === null){
    return null;
  }

  return (
    <div>
      <h1>{datas.nome}</h1>
      <p>R$ {datas.preco}</p>
    </div>
  )
}
