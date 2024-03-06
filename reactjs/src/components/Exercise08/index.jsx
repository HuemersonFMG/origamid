import { GlobalStorage } from "./GlobalContext"
import Product from "./Product"
import BtnClear from './BtnCear';

const index = () => {
  
  return (

    <section className="exercises08">
      <div className="container">
        <GlobalStorage>
          <Product />
          <BtnClear />
        </GlobalStorage>
      </div>
    </section>
  )
}

export default index
