export default function Index({dados}) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img style={{width: 200}} src={dados.fotos[0].src} alt={dados.titulo} />
      <p>{dados.descricao}</p>
    </div>
  )
}
