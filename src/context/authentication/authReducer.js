import { LOGIN, LOGOUT, GET_USER } from '../../types/'

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('user', action.payload.userAuth.user)
      localStorage.setItem('authenticated', true)
      return {
        ...state,
        authenticated: true,
        user: action.payload.userAuth.user,
        loading: false
      }
    case GET_USER:
      localStorage.getItem('user')
      localStorage.getItem('authenticated')
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false
      }
    case LOGOUT:
      localStorage.removeItem('user')
      localStorage.removeItem('authenticated')
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false
      }

    default:
      return state
  }
}
