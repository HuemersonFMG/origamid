import { useState } from "react"
import Radio from "./Form/Radio";

const questions = [
  {
    question: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()'
    ],
    answer: 'React.createElement()',
    id: 'q1'
  },
  {
    question: 'Como importamos um componente externo?',
    options: [
      'import Component from "\Component"',
      'require("./Component")',
      'import "./Component"'
    ],
    answer: 'import Component from "\Component"',
    id: 'q2'
  },
  {
    question: 'Qual hook não é nativo?',
    options: [
      'useEffect()',
      'useFetch()',
      'useCallback'
    ],
    answer: 'useFetch()',
    id: 'q3'
  },
  {
    question: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: [
      'set',
      'get',
      'use'
    ],
    answer: 'use',
    id: 'q4'
  },
]

const Index = () => {
  const [answers, setAnswers] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  const [slide, setSlide] = useState(0);
  const [result, setResult] = useState(null);

  function handleChange({target}){
    setAnswers({...answers, [target.id]: target.value});
  }

  function resultFinal(){
    const corrects = questions.filter(({id, answer}) => answers[id] == answer);
    setResult(`You're right: ${corrects.length} from ${questions.length}`)
  }

  function handleNext(){
    if(slide < questions.length - 1){
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultFinal();
    }
  }

  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <section className="section exercises14">
      <div className="container">
        <h1>Quiz</h1>

        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (

            <Radio
              active={slide === index}
              key={question.id}
              value={answers[question.id]}
              onChange={handleChange}
              {...question}
            />

          ))}

          {result ? (
            <p>Result: {result}</p>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}

        </form>
      </div>
    </section>
  )
}

export default Index
