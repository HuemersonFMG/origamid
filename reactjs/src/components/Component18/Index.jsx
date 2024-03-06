import { useState } from "react"

const Index = () => {
  const [terms, setTerms] = useState(false);
  const [colors, setColors] = useState(['blue']);

  function handleChange({target}){
    if(target.checked){
      setColors([...colors, target.value]);
    } else {
      setColors(colors.filter((color) => color !== target.value ));
    }
  }

  function checkColor(color){
    return colors.includes(color);
  }

  console.log(colors);

  return (
    <>
      <h1>Component 18</h1>

      <section>
        <h2>Elementos de Formulário - Input/Checkbox</h2>

        <form className="form">
          <div className="form__group">
            <label>
              <input type="checkbox" value="Terms" checked={terms} onChange={({target}) => setTerms(target.checked)}/>
              {' '} Agree terms.
            </label>
          </div>
        </form>
        {terms && <p>Acept term.</p>}
      </section>
      <br /><hr /><br />

      <section>
        <h2>Elementos de Formulário - Multiplos Checkbox</h2>

        <form className="form">
          <div className="form__group">
            <label>
              <input type="checkbox" value="blue" onChange={handleChange} checked={checkColor('blue')}/>
              {' '} Blue
            </label>
          </div>
          <div className="form__group">
            <label>
              <input type="checkbox" value="red" onChange={handleChange} checked={checkColor('red')}/>
              {' '} Red
            </label>
          </div>
        </form>
      </section>
      <br /><hr /><br />
    </>
  )
}

export default Index
