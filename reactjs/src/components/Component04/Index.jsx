import Header from "./Header";

export default function Index(props) {
  return (
    <>
      <h1>Component 04</h1>

      <section>
        <h2>Componentes</h2>
        <p>
          É possível dividir a aplicações em partes, e utilizar e reutilizar estas partes onde e quantas vezes necessárias.
        </p>
      </section>
      <br /><hr /><br />

      <section>
        <Header />
      </section>
      <br /><hr /><br />
    </>
  )
}
