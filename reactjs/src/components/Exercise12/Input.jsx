const Input = ({id, label, setValue, value, ...props}) => {
  return (
    <>
      <h3>Input</h3>
      <label htmlFor={id}>{label}</label> {' '}
      <input type="text" id={id} name={id} onChange={({target}) => setValue(target.value)} {...props}/>
    </>
  )
}

export default Input
