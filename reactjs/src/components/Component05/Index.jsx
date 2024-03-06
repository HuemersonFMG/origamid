const Title = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.children}</h2>
    </>
  )
}

export default function Index() {
  return (
    <>
      <h1>Component 05</h1>

      <section>
        <h2>Props</h2>
        <p>
          É possível passar props de um componente para outro. <br />
          Isso permite e melhora a reusabilidade dos componentes.
        </p>
        <Title title="Títle 01"/>
        <Title title="Títle 02"/>
      </section>
      <br /><hr /><br />

      <section>
        <h2>Children</h2>
        <p>
          É possível passar props como conteúdos internos dos componentes, são os childrens.
        </p>

        <Title>Conteúdo interno (children)</Title>
      </section>
    </>
  )
}
