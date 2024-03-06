import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const {datas} = useContext(GlobalContext);

  if(datas === null) return null;

  return (
    <div className="product">
      <h1>Product: </h1>
      
      <ul>
        {datas.map((product) => (
          <li key={product.id}>{product.nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default Product;
