const Input = ({
  className,
  value,
  setValue, 
  placeholder
}) => {
  return (
    <input 
      className={`${className}__input`}
      type='text'
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder ? placeholder : ''}
    />
  )
}

export default Input