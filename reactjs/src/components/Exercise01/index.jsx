export default function Index() {
  const luana = {
    nameClient: 'Luana',
    age: 27,
    purchases: [
      {nameProduct:'Notebook', price: 'U$ 2500'},
      {nameProduct:'Fridge', price: 'U$ 3000'},
      {nameProduct:'Smartphone', price: 'U$ 1500'}
    ],
    active: true,
  };
  
  const mario = {
    nameClient: 'Mario',
    age: 31,
    purchases: [
      {nameProduct:'Notebook', price: 'U$ 2500'},
      {nameProduct:'Fridge', price: 'U$ 3000'},
      {nameProduct:'Smartphone', price: 'U$ 1500'},
      {nameProduct:'Guitar', price: 'U$ 3500'}
    ],
    active: false,
  };

  const datas = mario;

  const total = datas.purchases
  .map((item) => +item.price.replace('U$ ', ''))
  .reduce((acc, curr) => {
    return acc + curr
  })

  return (
    <div>
      <p><strong>Name: </strong>{datas.nameClient}</p>
      <p><strong>Age: </strong>{datas.age}</p>
      <p><strong>Status: </strong><span style={{color: datas.active ? 'green' : 'red'}}>{datas.active = true ? 'Active' : 'Inactive'}</span></p>
      <p><strong>Total: </strong>{total}</p>
      {
        total >= 10000 &&
        <p>You have a lot of expenses</p>
      }

    </div>
  )
}
