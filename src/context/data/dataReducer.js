import { ADD_REGISTER, GET_DATA, NEW_SPIN, DEBUG_SPIN } from '../../types/'

export default (state, action) => {
  switch (action.type) {
    case ADD_REGISTER:
      localStorage.setItem('data', action.payload)
      localStorage.setItem('spin_result', action.payload.result)
      localStorage.setItem('message', action.payload.message)
      localStorage.setItem('balance', action.payload.balance)
      return {
        ...state,
        data: action.payload,
        message: action.payload.message,
        result: action.payload.result,
        balance: action.payload.balance,
        loading: false
      }
    case GET_DATA:
      let data = localStorage.getItem('data')
      let result = localStorage.getItem('spin_result')
      let message = localStorage.getItem('message')
      let balance = localStorage.getItem('balance')
      return {
        ...state,
        data: data,
        result: result,
        message: message,
        balance: balance,
        loading: false
      }
    case DEBUG_SPIN:
      return {
        ...state,
        result: '777',
        message: 'YOU WIN!'
      }

    default:
      return state
  }
}
