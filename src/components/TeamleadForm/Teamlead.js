import FoundTags from '../FoundTags/FoundTags'

const Teamlead = ({
  className,
  competentionsValue,
  setCompetentionsValue,
  filterCompetence,
  onCompetenceClick,
  userCompetence,
  onDeleteTags,
  isCompetenceClick,
  onCompetenceInputClick
}) => {
  return (
    <div className={`${className}__competentions`}>
      <p>Требумые компетенции</p>
      <input 
        className={`${className}__input`}
        type='text'
        value={competentionsValue}
        onChange={(event) => setCompetentionsValue(event.target.value)}
        onClick={onCompetenceInputClick}
        placeholder={'Поиск'}
      />
      <ul className={`${className}__listAll`}>
        {competentionsValue.length || isCompetenceClick
          ? filterCompetence.map((competence, index) => {
              return (
                <li 
                  key={index}
                  onClick={(event) => onCompetenceClick(event)} 
                >
                  {competence}
                </li>
              )
          })
          : ''
        }
      </ul>
      <FoundTags 
        className={className}
        userCompetence={userCompetence}
        onDeleteTags={onDeleteTags}
      />
    </div>
  )
}

export default Teamlead