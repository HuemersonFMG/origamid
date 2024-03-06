export default function Index({name, properties}) {
  return (
    <div style={{border: '1px solid grey', margin: '1em', padding: '1em'}}>
      <p>{name}</p>

      <ul>
        {properties.map((propertie, index) => (
          <li key={index} >
            {propertie}
          </li>
        ))}
      </ul>
    </div>
  )
}
