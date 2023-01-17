import FoundTags from '../FoundTags/FoundTags'

const Member = ({
  className,
  competentionsValue,
  setCompetentionsValue,
  filterCompetence,
  onCompetenceClick,
  userCompetence,
  onDeleteTags,
  isCompetenceClick,
  onCompetenceInputClick,
  desireCompValue,
  setDesireComValue,
  isDesiredInputActive,
  filterDesireComp,
  desireComp,
  onInputDesiredClick,
  onDesireCompetenceClick,
  onDeleteDesireTags
}) => {

  return (
    <>
      <div className={`${className}__competentions`}>
        <p>Компетенции</p>
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
      <div className={`${className}__competentions`}>
        <p>Желаемые компетенции</p>
        <input 
          className={`${className}__input`}
          type='text'
          value={desireCompValue}
          onChange={(event) => setDesireComValue(event.target.value)}
          onClick={onInputDesiredClick}
          placeholder={'Поиск'}
        />
        <ul className={`${className}__listAll`}>
          {desireCompValue.length || isDesiredInputActive
            ? filterDesireComp.map((competence, index) => {
                return (
                  <li 
                    key={index}
                    onClick={(event) => onDesireCompetenceClick(event)} 
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
          userCompetence={desireComp}
          onDeleteTags={onDeleteDesireTags}
          type='desired'
        />
      </div>
    </>
  )
}

export default Member