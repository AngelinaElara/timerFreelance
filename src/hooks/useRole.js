import {useState, useCallback} from 'react'

export const useRole = () => {
  const [role, setRole] = useState('')

  const getRole = useCallback((userRole) => {
    setRole(userRole)

    localStorage.setItem('role', JSON.stringify({
      role: userRole
    }))
  }, [])

  return {getRole, role}
}