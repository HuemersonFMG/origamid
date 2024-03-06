import {Link} from 'react-router-dom';
import Head from './Head';

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Descrição da página Home"/>
      <h1>Home</h1>
      <p>Página Home</p>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  )
}

export default Home
