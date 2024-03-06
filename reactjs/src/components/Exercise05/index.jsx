import { useEffect, useState } from "react";
import ProductsAPI from './ProductsAPI';

export default function Index() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productLocal = localStorage.getItem('product');
    
    if(productLocal !== null){
      setProduct(productLocal);;
    }
  }, []);

  useEffect(() => {
    if(product !== null){
      localStorage.setItem('product', product);
    }
  }, [product]);

  function handleClick({target}){
    setProduct(target.innerText);
  }

  return (
    <div>
      <h1>Exrcice 06</h1>
      <h1>Preferencies: {product}</h1>
      <button onClick={handleClick}>notebook</button> {' '}
      <button onClick={handleClick}>smartphone</button>
      <ProductsAPI product={product}/>
    </div>
  )
}
