const Checkbox = ({options, value, setValue}) => {

  function handleChange({target}){
    if(target.checked){
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }

  return (
    <>
    {options.map((option, index) => (
      <label className='labelCheckbox' key={index}>
        <input
          type="checkbox"
          value={option}
          checked={value.includes(option)}
          onChange={handleChange}
        />
        <span>{option}</span> {' '}
      </label>
    ))}
    </>
  )
}

export default Checkbox
