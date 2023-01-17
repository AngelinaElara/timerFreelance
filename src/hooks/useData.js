import {useCallback} from 'react'

const storageName = 'userData'

export const useData = () => {
  const saveData = useCallback((name, lastName, course, telegram, info, competence, desireCompetence, imgSrc) => {
    localStorage.setItem(storageName, JSON.stringify({
      userName: name, userLastName: lastName, userCourse: course, userTelegram: telegram, infoUser: info, userCompetence: competence, desireComp: desireCompetence, src: imgSrc
    }))
  }, [])

  return {saveData}
}