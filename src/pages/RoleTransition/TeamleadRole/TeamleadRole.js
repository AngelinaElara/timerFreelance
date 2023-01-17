import { useState, useMemo} from 'react'
import Header from '../../../components/Header'
import image from '../../../ui/teamleadRole.png'
import competence from '../../../data/competenceList'
import Teamlead from '../../../components/TeamleadForm/Teamlead' 
import { useNavigate } from 'react-router-dom'

const TeamleadRole = () => {
  const storage = JSON.parse(localStorage.getItem('userData'))
  const [infoUser, setInfoUser] = useState('')
  const [competentionsValue, setCompetentionsValue] = useState('')
  const [userCompetence, setUserCompetence] = useState([])
  const [filterCompetence, setFilterCompetence] = useState([])
  const [isCompetenceClick, setIsCompetenceClick] = useState(false)
  const className = 'change'
  const navigate = useNavigate()

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

  const handleBackButtonCLick = () => {
    navigate('/profile')
  }

  const handleChangeRoleClick = () => {
    localStorage.setItem('userData', JSON.stringify({
      userName: storage.userName, userLastName: storage.userLastName, userCourse: storage.userCourse, userTelegram: storage.userTelegram, infoUser: infoUser, userCompetence: userCompetence, desireComp: [], src: storage.src || ''
    }))
    localStorage.setItem('role', JSON.stringify({role: 'teamlead'}))
    navigate('/profile')
    window.location.reload()
  }

  return (
    <>
      <Header page='profile'/>
      <section className={className}>
        <div className={`${className}__info`}>
          <h1 className={`${className}__title`}>Переход к роли тимлида</h1>
          <p className={`${className}__text`}>Чтобы сменить роль, заполни несколько полей</p>
          <form className={`${className}__form`}>
            <div className={`${className}__aboutMe`}>
              <p>Обо мне</p>
              <textarea 
                value={infoUser}
                onChange={(event) => setInfoUser(event.target.value)}
                placeholder='Расскажи подробнее о себе и своей команде'
              />
            </div>
            <Teamlead 
              className={className}
              competentionsValue={competentionsValue}
              setCompetentionsValue={setCompetentionsValue}
              filterCompetence={filterCompetence}
              onCompetenceClick={handleCompetenceClick}
              userCompetence={userCompetence}
              onDeleteTags={handleDeleteTags}
              isCompetenceClick={isCompetenceClick}
              onCompetenceInputClick={handleInputCompetenceClick}
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

export default TeamleadRole