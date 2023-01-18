import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Goal from '../pages/Goal'
import Form from '../pages/Form'
import Published from '../pages/Published'
import Teamlead from '../pages/Profile/Teamlead'
import Member from '../pages/Profile/Member'
import HiddenProfile from '../pages/HiddenProfile'
import MemberRole from '../pages/RoleTransition/MemberRole'
import TeamleadRole from '../pages/RoleTransition/TeamleadRole'

export const useRoutes = (isAuth, role) => {
  if(isAuth  && role === 'member') {
    return (
      <Routes>
        <Route 
          path='*' 
          element={<Member/>} 
        />
        <Route 
          path='/member' 
          element={<Form type='member'/>} 
        />
        <Route 
          path='/profile' 
          element={<Member/>} 
        />
        <Route
          path='/published'
          element={<Published />}
        />
        <Route 
          path='/hidden'
          element={<HiddenProfile />}
        />
        <Route 
          path = '/change'
          element = {<TeamleadRole />}
        />
      </Routes>
    )
  } else if (isAuth && role === 'teamlead') {
    return (
      <Routes>
        <Route 
          path='*' 
          element={<Teamlead/>} 
        />
        <Route 
          path='/teamlead' 
          element={<Form type='teamlead'/>} 
        />
        <Route 
          path='/profile' 
          element={<Teamlead/>} 
        />
         <Route
          path='/published'
          element={<Published />}
        />
        <Route 
          path='/hidden'
          element={<HiddenProfile />}
        />
        <Route 
          path='/change'
          element={<MemberRole />}
        />
      </Routes>
    )
  } else if (isAuth) {
    return (
      <Routes>
        <Route 
          path='*' 
          element={<Goal />} 
        />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route 
        path='*' 
        element={<Main />} 
      />
      <Route 
        path='/' 
        element={<Main />} 
      />
    </Routes>
  )
}