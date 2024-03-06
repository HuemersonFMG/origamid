import { useState } from "react"
import Input from "./Form/Input";

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <h1>Component 18</h1>

      <section>
        <h2>Elementos de Formulário - Input/Componentizado</h2>

        <form className="form">
          <Input id="name" label="Name" value={name} setValue={setName} required />
          <Input id="email" label="E-mail" value={email} setValue={setEmail} />

          <button type="submit">Submit</button>
        </form>
      </section>
      <br /><hr /><br />
    </>
  )
}

export default Index
