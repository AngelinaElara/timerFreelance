import { useState, useMemo} from 'react'
import Header from '../../../components/Header'
import image from '../../../ui/memberRole.png'
import competence from '../../../data/competenceList'
import Member from '../../../components/MemberForm/Member'
import { useNavigate } from 'react-router-dom'

const MemberRole = () => {
  const storage = JSON.parse(localStorage.getItem('userData'))
  const [infoUser, setInfoUser] = useState('')
  const [competentionsValue, setCompetentionsValue] = useState('')
  const [userCompetence, setUserCompetence] = useState([])
  const [filterCompetence, setFilterCompetence] = useState([])
  const [isCompetenceClick, setIsCompetenceClick] = useState(false)
  const [isDesiredInputActive, setIsDesiredInputActive] = useState(false)
  const [desireCompValue, setDesireComValue] = useState('')
  const [desireComp, setDesireComp] = useState([])
  const [filterDesireComp, setFilterDesireComp] = useState([])
  const className = 'change'
  const navigate = useNavigate()

  useMemo(() => {
    if(desireCompValue.length) {
      setIsDesiredInputActive(false)
      const foundTags = competence.filter(comp => {
        return comp.toLowerCase().includes(desireCompValue.toLowerCase())
      })
      console.log(foundTags)
      setFilterDesireComp(foundTags)
    } 
  }, [desireCompValue])

  useMemo(() => {
    if(competentionsValue.length) {
      setIsCompetenceClick(false)
      const foundTags = competence.filter(compet => {
        return compet.toLowerCase().includes(competentionsValue.toLowerCase())
      })
      setFilterCompetence(foundTags)
    }
  }, [competentionsValue])

  const handleCompetenceClick = (event) => {
    setUserCompetence([...userCompetence, event.target.textContent])
    setCompetentionsValue('')
    setIsCompetenceClick(false)
  }

  const handleDeleteTags = (indexToRemove) => {
    setUserCompetence([...userCompetence.filter((_, index) => index !== indexToRemove)])
  }

  const handleInputCompetenceClick = () => {
    setIsCompetenceClick(true)
    setFilterCompetence(competence)
  }

  const handleInputDesiredClick = () => {
    setIsDesiredInputActive(true)
    setFilterDesireComp(competence)
  }

  // handle for add tags
  const handleDesireCompetenceClick = (event) => {
    setDesireComp([...desireComp, event.target.textContent])
    setDesireComValue('')
    setIsDesiredInputActive(false)
  }

  const handleDeleteDesireTags = (indexToRemove) => {
    setDesireComp([...desireComp.filter((_, index) => index !== indexToRemove)])
  }

  const handleBackButtonCLick = () => {
    navigate('/profile')
  }

  const handleChangeRoleClick = () => {
    localStorage.setItem('userData', JSON.stringify({
      userName: storage.userName, userLastName: storage.userLastName, userCourse: storage.userCourse, userTelegram: storage.userTelegram, infoUser: infoUser, userCompetence: userCompetence, desireComp: desireComp, src: storage.src || ''
    }))
    localStorage.setItem('role', JSON.stringify({role: 'member'}))
    navigate('/profile')
    window.location.reload()
  }

  return (
    <>
      <Header page='profile'/>
      <section className={className}>
        <div className={`${className}__info`}>
          <h1 className={`${className}__title`}>Переход к роли участника команды</h1>
          <p className={`${className}__text`}>Чтобы сменить роль, заполни несколько полей</p>
          <form className={`${className}__form`}>
            <div className={`${className}__aboutMe`}>
              <p>Обо мне</p>
              <textarea 
                value={infoUser}
                onChange={(event) => setInfoUser(event.target.value)}
                placeholder='Расскажи подробнее о себе и своих навыках'
              />
            </div>
            <Member 
              className={className}
              competentionsValue={competentionsValue}
              setCompetentionsValue={setCompetentionsValue}
              filterCompetence={filterCompetence}
              onCompetenceClick={handleCompetenceClick}
              userCompetence={userCompetence}
              onDeleteTags={handleDeleteTags}
              isCompetenceClick={isCompetenceClick}
              setIsCompetenceClick={setIsCompetenceClick}
              onCompetenceInputClick={handleInputCompetenceClick}
              desireCompValue={desireCompValue}
              setDesireComValue={setDesireComValue}
              isDesiredInputActive={isDesiredInputActive}
              filterDesireComp={filterDesireComp}
              desireComp={desireComp}
              onInputDesiredClick={handleInputDesiredClick}
              onDesireCompetenceClick={handleDesireCompetenceClick}
              onDeleteDesireTags={handleDeleteDesireTags}
            />
            <div className={`${className}__actions`}>
              <button 
                className={`${className}__left`}
                onClick={handleBackButtonCLick}
              >
                Назад
              </button>
              <button 
                className={`${className}__change`}
                onClick={handleChangeRoleClick}
              >
                Сменить роль
              </button>
            </div>
          </form>
        </div>
        <div>
          <img 
            src={image}
            alt='man'
          />
        </div>
      </section>
    </>
  )
}

export default MemberRole