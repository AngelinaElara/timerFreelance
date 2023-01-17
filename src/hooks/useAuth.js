import {useState, useCallback} from 'react'

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)

  const login = useCallback((auth) => {
    setIsAuth(auth)
    
    localStorage.setItem('auth', JSON.stringify({
      isAuth: auth
    }))
  }, [])


  return {login, isAuth}
}