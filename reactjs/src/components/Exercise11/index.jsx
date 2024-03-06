import React, { useState } from 'react'

const Index = () => {
  // input
  const [input, setInput] = useState('');

  // select
  const [select, setSelect] = useState('');

  // radio
  const [product, setProduct] = useState('');

  // checked
  const [games, setGames] = useState(['fifa']);
  function handleChange(event){
    if(event.target.checked){
      setGames([...games, event.target.value]);
    } else {
      setGames(games.filter((game) => game !==event.target.value));
    }
  }

  // exercise inputs
  const colorsArray = ['blue', 'purple', 'orange', 'green', 'red', 'grey'];
  const [colors, setColors] = useState([]);

  function handleChangeColors({target}){
    if(target.checked){
      setColors([...colors, target.value]);
    } else {
      setColors(colors.filter((color) => color !== target.value));
    }
  }

  return (
    <section className="section exercises11">
      <div className='container'>
        <h1>Elements Form</h1><br />

        <div className="form__group">
          <h3>Input</h3>
          <label htmlFor="name">Name</label> {' '}
          <input id='name' type="text" placeholder='Enter your name' onChange={({target}) => setInput(target.value)}/>
          <p>Hello: {input}</p>
        </div>

        <div className="form__group">
          <h3>Select</h3>
          <select id="" onChange={({target}) => setSelect(target.value)} value={select}>
            <option value="" disabled>Selecione</option>
            <option value="notebook">Notebook</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablet</option>
          </select>

          <span>{select}</span>
        </div>

        <div className="form__group">
          <h3>Radio</h3>
          <label className='labelRadio'>
            <input type="radio" onChange={({target}) => setProduct(target.value)} checked={product === 'notebook'} value='notebook'/>
            Notebook
          </label> {' '}
          <label className='labelRadio'>
            <input type="radio" onChange={({target}) => setProduct(target.value)} checked={product === 'smartphone'} value='smartphone'/>
            Smartphone
          </label>

          <span>{select}</span>
        </div>

        <div className="form__group">
          <h3>Checkbox</h3>

          <label className='labelCheckbox'>
            <input type="checkbox" value='fifa' checked={games.includes('fifa')} onChange={handleChange} />
            Fifa
          </label> {' '}
          
          <label className='labelCheckbox'>
            <input type="checkbox" value='pes' checked={games.includes('pes')} onChange={handleChange} />
            PES
          </label>
        </div>

        <div className="form__group">
          <h3>Exercises</h3>
          {colorsArray.map((color, index) => (
            <label key={index} className="labelCheckbox">
              <input type="checkbox" value={color} checked={colors.includes(color)} onChange={handleChangeColors}/>
              {color} {' '}
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Index
