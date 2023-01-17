import { useState, useMemo, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header'
import UserInfo from '../../../components/UserInfo/UserInfo'
import Input from '../../../components/Input/Input'
import Radio from '../../../components/Radio/Radio'
import competence from '../../../data/competenceList'
import TeamleadComponent from '../../../components/TeamleadForm/Teamlead'
import { Context } from '../../../context/Context'
import emptyPhoto from '../../../ui/emptyPhoto.png'
import Hide from '../components/Hide'

const Teamlead = () => {
  const context = useContext(Context)
  const storage = JSON.parse(localStorage.getItem('userData')) || {}
  const [inputName, setInputName] = useState(storage.userName || '')
  const [inputLastName, setInputLastName] = useState(storage.userLastName || '')
  const [courseRadio, setCourseRadio] = useState(storage.userCourse || 0)
  const [telegram, setTelegram] = useState(storage.userTelegram || '')
  const [infoUser, setInfoUser] = useState(storage.infoUser || '')
  const [competentionsValue, setCompetentionsValue] = useState('')
  const [userCompetence, setUserCompetence] = useState(storage.userCompetence || [])
  const [filterCompetence, setFilterCompetence] = useState([])
  const [isCompetenceClick, setIsCompetenceClick] = useState(false)
  const [getBlob, setGetBlob] = useState('')
  const [preview, setPreview] = useState(storage.src || '')
  const [isHideModalActive, setIsHideModalActive] = useState(false)
  const className = 'form'
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

  const handleSaveBtnClick = (event) => {
    event.preventDefault()
    if(inputName.length &&
        inputLastName.length &&
        courseRadio &&
        telegram.length &&
        infoUser.length &&
        userCompetence.length 
      )  {
      context.saveData(inputName, inputLastName, courseRadio, telegram, infoUser, userCompetence, '' , preview)
      navigate('/published')
    }
  }

  const handleInputCompetenceClick = () => {
    setIsCompetenceClick(true)
    setFilterCompetence(competence)
  }

  const handleImageChange = (e) => {
    setGetBlob(e.target.files[0])
  }

  const handleMemberButtonClick = () => {
    navigate('/change')
  }

  const handleHideProfileClick = () => {
    setIsHideModalActive(true)
  }

  useEffect(() => {
    if(getBlob) {
      const reader = new FileReader()
      reader.readAsDataURL(getBlob)
      reader.onloadend = function () {
      let base64String = reader.result
      setPreview(base64String)
    }}
  }, [getBlob])

  return (
    <>
      <Header page='profile'/>
      <section className={className}>
        <div className={`${className}__wrapper`}>
          <UserInfo 
            className={className}
            inputName={inputName}
            inputLastName={inputLastName}
            courseRadio={courseRadio}
            userCompetence={userCompetence}
            onImageChange={handleImageChange}
            preview={preview}
            emptyPhoto={emptyPhoto} 
          />
          <span className={`${className}__line`}></span>
          <h1 className={`${className}__title`}>Личные данные</h1>
          <form>
            <div className={`${className}__fullName`}>
              <div>
                <p>Имя</p>
                <Input 
                  className={className}
                  value={inputName}
                  setValue={setInputName}
                  placeholder='Имя'
                />
              </div>
              <div>
                <p>Фамилия</p>
                <Input 
                  className={className}
                  value={inputLastName}
                  setValue={setInputLastName}
                  placeholder='Фамилия'
                />
              </div>
            </div>
            <div className={`${className}__radiosBlock`}>
              <p>Курс</p>
              <Radio 
                className={className}
                courseRadio={courseRadio}
                setCourseRadio={setCourseRadio}
              />
            </div>
            <div className={`${className}__tg`}>
              <p>Telegram-ник</p>
              <Input 
                className={className}
                value={telegram}
                setValue={setTelegram}
                placeholder='Telegram-ник'
              />
            </div>
            <div className={`${className}__aboutMe`}>
              <p>Обо мне</p>
              <textarea 
                value={infoUser}
                onChange={(event) => setInfoUser(event.target.value)}
                placeholder='Обо мне'
              />
            </div>
            <TeamleadComponent 
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
            <button 
              className={`${className}__btn`}
              onClick={handleSaveBtnClick}
            >
              Сохранить
            </button>
          </form>
          <span className={`${className}__line`}></span>
          <div className={`${className}__actions`}>
            <p>Действия с профилем</p>
            <button onClick={handleMemberButtonClick}>Не быть тимлидом</button>
            <button onClick={handleHideProfileClick}>Скрыть профиль</button>
          </div>
        </div>
      </section>
      {isHideModalActive ? <Hide setIsHideModalActive={setIsHideModalActive} /> : ''}
    </>
  )
}

export default Teamlead