export default function Index() {
  function handleClick(){
    alert('Clocou!');
  }

  return (
    <>
      <h1>Component 03</h1>

      <section>
        <h2>Eventos</h2>
        <p>Atribuimos eventos diretamente nos componentes do React, passando a chamada por propriedades.</p><br />

        <button onClick={handleClick}>Clicke me!</button>
      </section>
      <br /><hr /><br />
    </>
  )
}
