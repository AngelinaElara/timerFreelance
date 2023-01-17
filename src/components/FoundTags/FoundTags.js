import cross from '../../ui/tagCross.png'
import greenCross from '../../ui/greenCross.png'

const FoundTags = ({
  className, 
  userCompetence,
  onDeleteTags,
  type
}) => {
  return (
    <ul className={`${className}__tagsCompetence`}>
      {userCompetence.length 
        ? userCompetence.map((competence, index) => {
          return (
            <li 
              key={index}
              style={type === 'desired' ? {border: '1px solid #64A6E2', background: '#E8F6F9', color: '#64A6E2'} : {}}
            > 
              {competence}
              <button type='button' onClick={() => onDeleteTags(index)}>
                <img 
                  src={type === 'desired' ? greenCross : cross}
                  alt='cross'
                />
              </button>
            </li>
          )
        })
        : ''
      }
    </ul>
  )
}

export default FoundTags