import { createContext } from 'react'

function noop () {}

export const Context = createContext({
  login: noop,
  getRole: noop,
  saveData: noop,
})