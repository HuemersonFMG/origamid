import UserContext from './UserContext';
import User from './User';

const App = () => {
  return (
    <UserContext.Provider value={{name: 'Diogo'}}>
      <User />
    </UserContext.Provider>
  );
};

export default App
