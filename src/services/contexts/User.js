import React, { createContext, useReducer } from 'react'
import { users } from '../../data/users'

const UserContext = createContext({})
const initialState = { users }
export const UserProvider = (props) => {
  const actions = {
    CREATE_USER(state, action) {
      console.warn('create')
      const user = action.payload
      user.id = Math.random()
      return {
        ...state,
        users: [...state.users, user],
      }
    },

    UPDATE_USER(state, action) {
      const updated = action.payload
      return {
        ...state,
        users: state.users.map((updateUser) =>
          updateUser.id === updated.id ? updated : updateUser
        ),
      }
    },

    DELETE_USER(state, action) {
      const user = action.payload
      return {
        ...state,
        users: state.users.filter((clickedUser) => clickedUser.id !== user.id),
      }
    },
  }

  function reducer(state, action) {
    const fnActions = actions[action.type]
    return fnActions ? fnActions(state, action) : state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext
