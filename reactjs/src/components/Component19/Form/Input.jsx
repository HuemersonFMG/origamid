import React from 'react'

const Input = ({id, label, setValue, ...props}) => {
  return (
    <>
      <div className="form__group">
        <label htmlFor={id} className="form__label">{label}</label>
        <input id={id} name={id} type="text" onChange={({target}) => setValue(target.value)} {...props} />
      </div>
    </>
  )
}

export default Input
