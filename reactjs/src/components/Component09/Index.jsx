import { useRef, useState } from "react"

export default function Index() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = useRef();

  function handleClick(){
    setComments([...comments, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <>
      <h1>Component 09</h1>
      
      <section>
        <h2>useRef</h2>

        <p>
          Retorna um objeto com a propriedade current. <br />
          Pode-se utilizar este objeto para referenciar um elemento do DOM.
        </p>

        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>

        <input type="text" ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/> &nbsp;

        <button onClick={handleClick}>Enviar</button>
      </section>
      <br /><hr/><br />
    </>
  )
}
