import Product from "./Product"
import { GlobalStorage } from "./GlobalContext"

const index = () => {
  return (
    <div className="container">
      <GlobalStorage>
        <Product />
      </GlobalStorage>
    </div>
  )
}

export default index;