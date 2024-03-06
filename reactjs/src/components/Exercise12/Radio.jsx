const Radio = ({options, value, setValue, ...props}) => {
  return (
    <>
      {options.map((option) => (
        <label key={option} className="labelRadio">
          <input type="radio" value={option} checked={value === option} onChange={({target}) => setValue(target.value)} {...props}/>
          <span>{option}</span> {' '}
        </label>
      ))}
    </>
  )
}

export default Radio
