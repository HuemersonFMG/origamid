import Input from "./Input";
import useForm from "./useForm";

const Index = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event){
    event.preventDefault();

    
    if(cep.validate() && email.validate() && nome.validate()){
      console.log('Enviado.');
    } else {
      console.log('Não enviado!');
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      /> <br />
      <Input
        label="E-mail"
        id="email"
        type="email"
        placeholder="example@example.com"
        {...email}
      /> <br />
      <Input
        label="Nome"
        id="nome"
        type="text"
        placeholder="Digite seu nome"
        {...nome}
      /> <br />
      <Input
        label="Sobrenome"
        id="sobrenome"
        type="text"
        placeholder="Digite seu sobrenome"
        {...sobrenome}
      /> <br />

      <button>Enviar</button>
    </form>
  )
}

export default Index
