import App from "./App";

export default function Index() {

  return (
    <>
      <h1>Component 12</h1>
      
      <section>
        <h2>createContext</h2>

        <p>
          Contexto permite passar dados/estado globais ex: (dados de usuário logado) a todos os componentes, sem a necessidade de utilizar as 'props'. <br />
          - Criar arquivo useContext.jsx <br />
          - Criar variável de contexto (userContext = createContext()) <br />
          - Exportar essa váriavel userContext <br />
          - Geralmente é utilizado na parte global da aplicação. É necessário englobar 'index' ou 'App'. <br />
          - Envolve a aplicação principal pelo context invocando Provider (userContext.Provider) ou seja, a parte principal tem acesso ao contexto e todos os valores de dados/estados. <br />
        </p>

        <App />
      </section>
      <br /><hr/><br />
      
      <section>
        <h2>useContext</h2>

        <p>
          Serve para usar o contexto.
        </p>
      </section>
      <br /><hr/><br />
    </>
  )
}
