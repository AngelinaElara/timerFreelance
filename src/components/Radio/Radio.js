const Radio = ({
  className,
  courseRadio,
  setCourseRadio
}) => {
  return (
    <div className={`${className}__radios`}>
      <label className={`${className}__radio`}>
        <input 
          type='radio'
          value='1'
          checked={courseRadio === '1'}
          onChange={(event) => setCourseRadio(event.target.value)}
        />
        1
      </label>
      <label className={`${className}__radio`}>
        <input 
          type='radio'
          value='2'
          checked={courseRadio === '2'}
          onChange={(event) => setCourseRadio(event.target.value)}
        />
        2
      </label>
      <label className={`${className}__radio`}>
        <input 
          type='radio'
          value='3'
          checked={courseRadio === '3'}
          onChange={(event) => setCourseRadio(event.target.value)}
        />
        3
      </label>
      <label className={`${className}__radio`}>
        <input 
          type='radio'
          value='4'
          checked={courseRadio === '4'}
          onChange={(event) => setCourseRadio(event.target.value)}
        />
        4
      </label>
    </div>
  )
}

export default Radio