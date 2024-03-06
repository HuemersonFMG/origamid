import { useContext } from 'react';
import {GlobalContext} from './GlobalContext';

const Product = () => {
  const global = useContext(GlobalContext);

  return (
    <section className='exercises07'>
      <div className='container'>
        <p>
          <strong>Cart:</strong> {global.counter}{' '}
        </p>

        <div className="group">
          <button onClick={() => global.addOne()}>Add +1</button> {' '}
          <button onClick={() => global.addTwo()}>Add +2</button>
        </div>
      </div>
    </section>
  )
}

export default Product
