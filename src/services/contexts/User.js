import React, { createContext, useReducer } from 'react'
import { users } from '../../data/users'

const UserContext = createContext({})
const initialState = { users }
export const UserProvider = (props) => {
  function reducer(state, action) {
    return state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext
