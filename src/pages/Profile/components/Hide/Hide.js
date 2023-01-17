import { useNavigate } from 'react-router-dom'

const Hide = ({
  setIsHideModalActive
}) => {
  const className = 'hide'
  const navigate = useNavigate()

  const handleConfirmBtnClick = () => {
    navigate('/hidden')
  }

  return (
    <div className={className}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}__info`}>
          <p className={`${className}__title`}>Скрыть профиль?</p>
          <p className={`${className}__text`}>Скрой свой профиль, чтобы другие пользователи больше не могли его просматривать. Ты всегда сможешь изменить это в настройках.</p>
        </div>
        <div className={`${className}__btns`}>
          <button onClick={handleConfirmBtnClick}>Да</button>
          <button onClick={() => setIsHideModalActive(false)}>Нет</button>
        </div>
      </div>
    </div>
  )
}

export default Hide