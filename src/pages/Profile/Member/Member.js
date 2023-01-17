import { useState, useMemo, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header'
import UserInfo from '../../../components/UserInfo/UserInfo'
import Input from '../../../components/Input/Input'
import Radio from '../../../components/Radio/Radio'
import competence from '../../../data/competenceList'
import MemberComponent from '../../../components/MemberForm/Member'
import { Context } from '../../../context/Context'
import emptyPhoto from '../../../ui/emptyPhoto.png'
import Hide from '../components/Hide'

const Member = () => {
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
  const [isDesiredInputActive, setIsDesiredInputActive] = useState(false)
  const [desireCompValue, setDesireComValue] = useState('')
  const [desireComp, setDesireComp] = useState(storage.desireComp || [])
  const [filterDesireComp, setFilterDesireComp] = useState([])
  const [getBlob, setGetBlob] = useState('')
  const [preview, setPreview] = useState(storage.src || '')
  const [isHideModalActive, setIsHideModalActive] = useState(false)
  const className = 'form'
  const navigate = useNavigate()

  // searching tags for desired competence
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

  // handle for active list competence when user clicked on input
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
    if (
      inputName.length &&
      inputLastName.length &&
      courseRadio &&
      telegram.length &&
      infoUser.length &&
      userCompetence.length &&
      desireComp.length 
      ) {
      context.saveData(inputName, inputLastName, courseRadio, telegram, infoUser, userCompetence, desireComp, preview)
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

  const handleTeamleadButtonClick = () => {
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
                />
              </div>
              <div>
                <p>Фамилия</p>
                <Input 
                  className={className}
                  value={inputLastName}
                  setValue={setInputLastName}
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
            <MemberComponent 
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
            <button onClick={handleTeamleadButtonClick}>Стать тимлидом</button>
            <button onClick={handleHideProfileClick}>Скрыть профиль</button>
          </div>
        </div>
      </section>
      {isHideModalActive ? <Hide setIsHideModalActive={setIsHideModalActive} /> : ''}
    </>
  )
}

export default Member