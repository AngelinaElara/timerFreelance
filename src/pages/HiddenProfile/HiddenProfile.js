import Header from '../../components/Header'
import questionImage from '../../ui/question.png'
import { useNavigate } from 'react-router-dom'

const HiddenProfile = () => {
  const className = 'hiddenProfile'
  const navigate = useNavigate()

  const handleOpenProfileBtnClick = () => {
    navigate('/profile')
  }

  return (
    <>
      <Header page='profile'/>
      <section className={className}>
        <div>
          <img 
            src={questionImage}
            alt='man'
          />
        </div>
        <div className={`${className}__info`}>
          <p className={`${className}__title`}>Твой профиль скрыт</p>
          <p className={`${className}__text`} style={{marginTop: '8px'}}>Теперь твой профиль не виден другим пользователям.</p>
          <p className={`${className}__text`}>Ты можешь снова сделать его доступным для поиска в любой момент.</p>
        </div>
        <button onClick={handleOpenProfileBtnClick}>Открыть профиль</button>
      </section>
    </>
  )
}

export default HiddenProfile