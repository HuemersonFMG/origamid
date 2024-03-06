export default function Index() {
  const list = [
    'twitch', 'xbox', 'controller', 'playstation'
  ];

  return (
    <>
      <h1>Component 02</h1>

      <section>
        <h2>Arrays</h2>
        <p>
          JSX por padrão mostra valores uma variável do tipo array
          sem nenhuma alteração (sem espaço, sem virgula), é necessário intervir e fazer alterações necessárias.
        </p>
      </section>
      <br /><hr /><br />

      <section className="card-container">
        <h2>Key</h2>
        <p>
          É um atributo essencial em uma array, ele atribui um identificador único para o elemento do array, pode ser utilizado o proprio index do array, porém é recomendado utilizar id do retorno do array.
        </p><br />
        
        <ul className="card__list">
          {
            list.map((item, index) => (
              <li key={index} className="card__item">
                <a href="#" className="card__link"><i className={`bi bi-${item}`}></i></a>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}
