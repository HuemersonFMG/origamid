import Product from './Product';
import { GlobalStorage } from './GlobalContext';

const Index = () => {
  return (
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  )
}

export default Index
