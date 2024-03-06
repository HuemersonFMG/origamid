import { products } from "./products"
import Title from '../Title/Index';
import Product from '../Produto/Index';

export default function Index() {
  return (
    <section>
      <Title title='Products'/>
      
      {
        products.map((product) => (
          <Product key={product.name} {...product}/>
        ))
      }
    </section>
  )
}
