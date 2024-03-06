import { useState } from 'react';
import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';
import ValidateInput from './ValidateInput';

const Index = () => {
  // Input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Select
  const [product, setProduct] = useState('');

  // Radio
  const [color, setColor] = useState('red');

  // Checkbox
  const [languages, setLanguages] = useState([]);
  

  // Validate
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState(null);

  function validateZipCode(value){
    if(value.length === 0){
      setError('Enter a value!');
      return false;
    } else if(!/^\d{5}-?\d{3}$/.test(value)){
      setError('Enter zip code valid!');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({target}){
    validateZipCode(target.value);
  }

  function handleChange({target}){
    if(error) validateZipCode(target.value);
    setZipCode(target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(validateZipCode(zipCode)){
      console.log('Submited.');
    } else {
      console.log('No submited!');
    }
  }

  return (
    <>
      <div className="form__group">
        <Input id="name" label="Name" value={name} setValue={setName} />
        {name}
        <Input id="email" label="E-mail" value={email} setValue={setEmail} />
        {email}
      </div>

      <div className="form__group">
        <Select options={['notebook', 'smartphone', 'tablet']} value={product} setValue={setProduct} />
        {product}
      </div>

      <div className="form__group">
        <Radio options={['blue', 'red']} value={color} setValue={setColor}/>
      </div>

      <div className="form__group">
        <Checkbox options={['JavaScript', 'TypeScript', 'React']} value={languages} setValue={setLanguages}/>
      </div>

      <div className="form__group">
        <form action="./" onSubmit={handleSubmit}>
          <ValidateInput
            label="Zip Code"
            id="zipCode"
            type="text"
            value={zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="00000-000"
            />
          <span>{error && <p>{error}</p>}</span>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Index
