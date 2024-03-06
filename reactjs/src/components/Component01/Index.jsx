export default function Index() {
  return (
    <>
      <h1>Component 01</h1>

      <section>
        <h2>JSX</h2>
        <p>
          Acronimo para JavaScript Extension / JS XML, ou seja, extende funcionalidades do JS, que são convertidos para funções de React. <br />
          É a extenção de React + JS.
        </p>
      </section>
      <br /><hr /><br />

      <section>
        <h2>ClassName</h2>
        <p>
          Substitui a palavra class dos atributos das tags, pois class em JS é utilizado para criar objetos a partir de classes.
        </p>
        <div className="border-red">
          Utilizando propriedade className.
        </div>
      </section>
      <br /><hr /><br />

      <section>
        <h2>htmlFor</h2>
        <p>
          Substitui a palavra for dos atributos das tags, pois for em JS é utilizado para criar loops..
        </p><br />

        <label htmlFor="name">Name</label><br />
        <input id="name" type="text" />
      </section>
      <br /><hr /><br />

      <section>
        <h2>Fragments</h2>
        <p>
          React permite retornar somente um elemento, ou seja, é necessário envolver em uma div 'template/principal' por exemplo: <b>&lt;&gt;</b>...<b>&lt;&gt;</b>
        </p>
      </section>
      <br /><hr /><br />

      <section>
        <h2>Variáveis</h2>
        <p>
          Para retornar valor de uma variável em React por exemplo: <b>&#123;</b>name<b>&#125;</b><br />
          Isto permte criar expressões mais complexas (Ternario, cálculos, ect).
        </p>
      </section>
      <br /><hr /><br />

      <section>
        <h2>Style inline</h2>
        <p style={{color: 'pink'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum quidem fugit amet minima laudantium, quam adipisci sint nobis atque fugiat quibusdam est. Amet delectus, saepe ut obcaecati ad at!
        </p>
      </section>
      <br />
    </>
  )
}
