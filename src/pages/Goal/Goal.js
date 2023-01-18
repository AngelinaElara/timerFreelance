import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import searchMan from '../../ui/searchMan.png'
import lookinMan from '../../ui/lookinMan.png'
import { Context } from '../../context/Context'

const Goal = () => {
  const [isTeamLeadActive, setIsTeamLeadActive] = useState(false)
  const [isMemberActive, setisMemberActive] = useState(false)
  const className = 'goal'
  const navigate = useNavigate()
  const context = useContext(Context)

  const handleMemberBtnClick = () => {
    setIsTeamLeadActive(false)
    setisMemberActive(true)
  }

  const handleTeamLeadBtnClick = () => {
    setIsTeamLeadActive(true)
    setisMemberActive(false)
  }

  const handleContinueBtnClick = () => {
    if (isTeamLeadActive) {
      context.getRole('teamlead')
      window.location.reload()
    } else if (isMemberActive) {
      context.getRole('member')
      window.location.reload()
    }
  }
  
  return (
    <>
      <Header page='goal' />
      <section className={className}>
        <div className={`${className}__info`}>
          <h1 className={`${className}__title`}>Привет! Какая у тебя цель?</h1>
          <div className={`${className}__btns`}>
            <button 
              className={isMemberActive ? `${className}__btn active` : `${className}__btn`}
              onClick={handleMemberBtnClick}
            >
              <img 
                src={lookinMan}
                alt='man'
              />
              <p className={isMemberActive ? `${className}__text active` : `${className}__text`}>Ищу команду</p>
            </button>
            <button 
              className={isTeamLeadActive ? `${className}__btn active` : `${className}__btn`}
              onClick={handleTeamLeadBtnClick}
            >
              <img 
                src={searchMan}
                alt='man'
              />
              <p className={isTeamLeadActive ? `${className}__text active` : `${className}__text`}>Ищу участника в свою команду</p>
            </button>
          </div>
          <button 
            className={`${className}__continue`}
            onClick={handleContinueBtnClick}
          >
            Далее
          </button>
        </div>
      </section>
    </>
  )
}

export default Goal