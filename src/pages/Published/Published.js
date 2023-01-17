import Header from '../../components/Header'
import man from '../../ui/thinkingMan.png'

const Published = () => {
  const className = 'published'

  return (
    <>
    <Header page='profile'/>
    <section className={className}>
      <div>
        <img 
          src={man}
          alt='man'
        />
      </div>
      <div className={`${className}__info`}>
        <h1 className={`${className}__title`}>Твоя анкета опубликована!</h1>
        <p className={`${className}__text`}>Если пользователям приложения понравится твоя анкета, они смогут написать тебе в Telegram. Чтобы самому просматривать других студентов, скачай приложение.</p>
      </div>
      <button className={`${className}__btn`}>Скачать приложение</button>
    </section>
    </>
  )
}

export default Published