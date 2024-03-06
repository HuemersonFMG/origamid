import React, { useState } from 'react'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Número',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
]


// forma alternativa
const Index = () => {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: '',
    };
  }, {}));


  // // forma inicial
  // const Index = () => {
  //   const [form, setForm] = useState({
  //     nome: '',
  //     email: '',
  //     senha: '',
  //     cep: '',
  //     numero: '',
  //     rua: '',
  //     bairro: '',
  //     cidade: '',
  //     estado: '',
  //   });

  const [response, setResponse] = useState(null);

  function handleChange({target}){
    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  const baseUrl = 'https://ranekapi.origamid.dev/json/api/usuario';

  function handleSubmit(event){
    event.preventDefault();
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(response => {
      setResponse(response);
    });
  }

  return (
    <section>
      <>
        <form className="form" onSubmit={handleSubmit}>
          {formFields.map(({id, label, type}) => (
            <div key={id} className="form__group">
              <label htmlFor={id} className="form__label">{label}</label>
              <input type={type} id={id} value={form[id]} onChange={handleChange} className="form__control"/>
            </div>
          ))}

          {response && response.ok && <p>Formulário enviado</p>}

          <div className="form__group">
            <button>Submit</button>
          </div>
        </form>
      </>
    </section>
  )
}

export default Index
