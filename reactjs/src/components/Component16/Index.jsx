import { useState } from "react"

const Index = () => {
  const [select, setSelect] = useState('');

  return (
    <>
      <h1>Component 16</h1>

      <section>
        <h2>Elementos de Formulário - Select</h2>

        <form className="form">
          <select id="products" value={select} onChange={({target}) => setSelect(target.value)}>
            <option value="" disabled>Select</option>
            <option value="notebook">Notebook</option>
            <option value="tablet">Tablet</option>
            <option value="smartphone">Smartphone</option>
          </select>{' : '}

          {select}
        </form>
      </section>
      <br /><hr /><br />
    </>
  )
}

export default Index
