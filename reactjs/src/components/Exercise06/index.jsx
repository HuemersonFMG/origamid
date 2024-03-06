import React, { useRef, useState } from 'react';
import FleshMessage from './FleshMessage';

const Index = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = useRef();
  
  function handleClick(){
    setComments([...comments, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <section className="exercises06">
      <div className='container'>
        <div className="todo">
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>

          <div className="group">
            <input type="text" ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/> {' '}
            <button onClick={handleClick}>Enviar</button>
          </div>
        </div>

        <div className="flashMessage">
          <FleshMessage />
        </div>
      </div>
    </section>
  )
}

export default Index

