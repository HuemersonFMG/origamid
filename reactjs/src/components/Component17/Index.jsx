import { useState } from "react";

const Index = () => {
  const [product, setProduct] = useState(false);
  const [color, setColor] = useState(false);

  function handleChange({target}){
    setProduct(target.value);
  }

  return (
    <>
      <h1>Component 17</h1>

      <section>
        <h2>Elementos de Formulário - Input/Radio</h2>

        <form className="form">
          <h2>Products</h2> <br />
          <div className="form__group">
            <label>
              <input type="radio" onChange={handleChange} value="Smartphone" checked={product === 'smartphone'} />
               {' '} Smartphone
            </label>
          </div>
          
          <div className="form__group">
            <label>
              <input type="radio" onChange={handleChange} value="Notebook" checked={product === 'notebook'} />
               {' '} Notebook
            </label>
          </div>
          <p>{product}</p> <br /><br />
          
          <h2>Colors</h2> <br />
          <div className="form__group">
            <label>
              <input type="radio" onChange={({target}) => setColor(target.value)} value="Blue" checked={color === 'Blue'} />
               {' '} Blue
            </label>
          </div>
          
          <div className="form__group">
            <label>
              <input type="radio" onChange={({target}) => setColor(target.value)} value="Red" checked={color === 'red'} />
               {' '} Red
            </label>
          </div>
          <p>{color}</p>
        </form>
      </section>
      <br /><hr /><br />
    </>
  )
}

export default Index
