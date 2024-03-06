export default function Index() {
  const products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 'U$ 2000',
      colors: ['#29D8D5', '#252A34', '#FC3766']
    },
    {
      id: 2,
      name: 'Notebook',
      price: 'U$ 3000',
      colors: ['#FFD045', '#D4394B', '#F37C59']
    },
    {
      id: 3,
      name: 'Tablet',
      price: 'U$ 1500',
      colors: ['#365069', '#47C1C8', '#F95786']
    }
  ]

  const datas = products.filter(({price}) => +price.replace('U$ ', '') > 1500)
  
  return (
    <div>
      {
        datas.map(({id, name, price, colors}) => (
          <div key={id}>
            <h1>{name}</h1>
            <p><strong>Price: </strong>{price}</p>

            <ul>
              {
                colors.map((color) => (
                  <li key={color} style={{backgroundColor: color, color: 'white'}}>
                    {color}
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}
