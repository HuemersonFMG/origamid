import {useNavigate} from 'react-router-dom';
import Head from './Head';

const Login = () => {
  const navigate = useNavigate();

  function handleclick(){
    navigate('/sobre');
  }
  
  return (
    <>
      <Head title="Login" description="Descrição da página Login"/>
      <button onClick={handleclick}>Login</button>
    </>
  )
}

export default Login
