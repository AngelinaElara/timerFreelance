import { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context' 
import ProfileIcon from './components/ProfileIcon'

const Header = ({
  page
}) => {
  const storage = JSON.parse(localStorage.getItem('userData')) || {}
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const context = useContext(Context)
  const className = 'header'
  const navigate = useNavigate()
  
  const handleLoginBtnClick = (res) => {
    let timer
    const login = 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A3000%3Fid%3Dauth662892&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=188431876057-spa5uml8rv89l930sl3bemrmk1hqn82a.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A3000&prompt&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow'
    const newWindow = window.open(login, '_blank', 'width=500,height=600')
    if (newWindow) {
      timer = setInterval(() => {
        if(newWindow.closed) {
          context.login(true)
          navigate('/goal')
          window.location.reload()
          if (timer) clearInterval(timer)
        }
      }, 500)
    }
  }

  const handleAvatarBtnClick = () => {
    setIsMenuOpen(prevValue => !prevValue)
  }

  const handleLogoutClick = () => {
    localStorage.setItem('auth', JSON.stringify({
      isAuth: false
    }))
    navigate('/')
    window.location.reload()
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  return (
    <header>
      <div className={`container ${className}`}>
        <div>
          <p className={`${className}__logo`}>Тимер</p>
        </div>
        {page === 'main' 
          ? 
            <button className={`${className}__enter`} onClick={handleLoginBtnClick}>Войти с помощью Google</button>
          : page === 'profile' 
            ? <ProfileIcon 
                className={className} 
                img={storage.src || ''}
                onAvatarBtnClick={handleAvatarBtnClick}
              />
            : ''
          }
          {isMenuOpen 
            ? <ul className={`${className}__list`}>
                <li onClick={handleProfileClick}>Редактировать профиль</li>
                <li style={{marginTop: '24px'}} onClick={handleLogoutClick}>Выйти</li>
              </ul>
            : ''
          }
      </div>
    </header>
  )
}

export default Header