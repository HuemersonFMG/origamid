export default function Index() {
  function fnOnClick(){
    alert('onClicked');
  }

  function fnOnChange(){
    alert('onChanged');
  }

  function fnOnSubmit(e){
    e.preventDefault();
    alert('onSubmit');
  }

  return (
    <>
      <h1>Component 06</h1>

      <section>
        <h2>onClick</h2>
        <strong>onClick: </strong> Ao clique do botão. <br />

        <button onClick={fnOnClick}>OnClick</button><br/><br/>
      </section>
      <br /><hr /><br />

      <section>
        <h2>onChange</h2>
        <strong>onChange: </strong> Ao alterar valor de um input. <br />
        <label htmlFor="name">Name</label><br />
        <input id="name" type="text" onChange={fnOnChange}/><br /><br />
      </section>
      <br /><hr /><br />

      <section>
        <h2>onSubmit</h2>
        <strong>onSubmit: </strong> Ao submeter/enviar um formulário. <br />

        <form onSubmit={fnOnSubmit}>
          <label htmlFor="email">E-mail</label><br />
          <input type="text" id="email" /><br/><br/>
          <button>OnSubmit</button>
        </form>
      </section>
    </>
  )
}
