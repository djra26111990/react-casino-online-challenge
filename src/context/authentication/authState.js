import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import { LOGIN, LOGOUT, GET_USER } from '../../types'

const AuthState = (props) => {
  const initialState = {
    authenticated: null,
    user: null,
    loading: true
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const userAuthenticated = () => {
    const user = localStorage.getItem('user')

    dispatch({
      type: GET_USER,
      payload: user
    })
  }

  const loginUser = (data) => {
    dispatch({
      type: LOGIN,
      payload: data
    })

    userAuthenticated()
  }

  const logoutUser = () => {
    dispatch({
      type: LOGOUT
    })
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: state.authenticated,
        user: state.user,
        loginUser,
        userAuthenticated,
        logoutUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
