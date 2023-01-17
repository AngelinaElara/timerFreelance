import {useRoutes} from './routes/routes'
import Footer from './components/Footer/Footer'
import { Context } from './context/Context'
import { useAuth } from './hooks/useAuth'
import { useRole } from './hooks/useRole'
import { useData } from './hooks/useData'

const App = () => {
  const storage = JSON.parse(localStorage.getItem('auth')) || {}
  const storageRole = JSON.parse(localStorage.getItem('role')) || {}
  const isAuth = storage.isAuth || false
  const role = storageRole.role || ''
  const {login} = useAuth()
  const {getRole} = useRole()
  const {saveData} = useData()
  const routes = useRoutes(isAuth, role)

  return (
    <Context.Provider value={{
      login, getRole, saveData
    }}>
      {routes}
      <Footer />
    </Context.Provider>
  )
}

export default App 