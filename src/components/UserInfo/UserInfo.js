const UserInfo = ({
  className,
  inputName,
  inputLastName,
  courseRadio,
  userCompetence,
  onImageChange,
  preview,
  emptyPhoto
}) => {

  return (
    <div className={`${className}__header`}>
      <div className={`${className}__img`}>
        <label htmlFor='file-input'>
          <img 
            src={preview.length ? preview : emptyPhoto} 
            alt='avatar'
          />
        </label>
        <input 
          id='file-input' 
          type='file'
          onChange={onImageChange} 
        />
      </div>
      <div className={`${className}__info`}>
        <p className={`${className}__names`}>
          {inputName.length 
            ? <span style={{color: '#000000', textTransform: 'capitalize'}}>{inputName}</span> 
            : <span style={{color: '#6C6C6C', textTransform: 'capitalize'}}>Имя</span>
          } 
          {inputLastName.length 
            ? <span style={{color: '#000000', textTransform: 'capitalize'}}>{inputLastName}</span> 
            : <span style={{color: '#6C6C6C', textTransform: 'capitalize'}}>Фамилия</span>
          }
        </p>
        <p className={`${className}__course`}>{courseRadio} курс</p>
        <ul className={`${className}__userCompetence`}>
          {userCompetence.length 
            ? userCompetence.map((competence, index) => {
              return (
                <li key={index}>{competence}</li>
              )
            })
            : ''
          }
        </ul>
      </div>
    </div>
  )
}

export default UserInfo