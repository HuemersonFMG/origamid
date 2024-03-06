import { useState } from "react";

const formFields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text'
  },
  {
    id: 'email',
    label: 'E-mail',
    type: 'email'
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password'
  },
];

const Index = () => {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );

  // const Index = () => {
  //   const [form, setForm] = useState({
  //     name: '',
  //     email: '',
  //     password: ''
  //   });

  function handleSubmit(event){
    event.preventDefault();
    console.log(form);
  }

  function handleChange({target}){
    const {id, value} = target;

    setForm({...form, [id]: value});
  }

  return (
    <>
      <h1>Component 15</h1>

      <section>
        <h2>Elementos de Formulário - Multiplos campos</h2>

        <form className="form" onSubmit={handleSubmit}>
          {formFields.map(({id, label, type}) => (
            <div className="form__group" key={id}>
              <label htmlFor={id} className="form__label">{label}</label> {' '}
              <input id={id} className="form__control" type={type} value={form[id]} onChange={handleChange} />
              
              <p>{form[id]}</p>
            </div>
          ))}

          <div className="form__group">
            <button type="submit">Submit</button>
          </div>
        </form>
        
      </section>
      <br /><hr /><br />
    </>
  )
}

export default Index
