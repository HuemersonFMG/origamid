import {useParams, useLocation, NavLink, Outlet} from 'react-router-dom';
import Head from './Head';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  // console.log('Params: ', params);
  // console.log('Location: ', location);
  
  const search = new URLSearchParams(location.search);
  // console.log(search.get('q'));

  return (
    <>
      <Head title="Produto" description="Descrição da página Produto"/>
      <h1>Produto</h1>
      <p>Página Produto: {params.id}</p>

      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">customizado</NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default Produto
