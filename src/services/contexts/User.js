import React, { createContext, useReducer } from 'react'
import { users } from '../../data/users'

const UserContext = createContext({})
const initialState = { users }
export const UserProvider = (props) => {
  function reducer(state, action) {
    if (action.type === 'DELETE_USER') {
      const user = action.payload
      return {
        users: state.users.filter((clickedUser) => clickedUser.id !== user.id),
      }
    }
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
