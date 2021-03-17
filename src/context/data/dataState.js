import React, { useReducer } from 'react'
import DataContext from './dataContext'
import DataReducer from './dataReducer'

import { GET_USER, ADD_REGISTER, DEBUG_SPIN } from '../../types'

const DataState = (props) => {
  const initialState = {
    data: null,
    message: '',
    result: null,
    balance: 99.99,
    loading: true
  }

  const [state, dispatch] = useReducer(DataReducer, initialState)

  const getData = () => {
    const data = localStorage.getItem('data')
    const message = localStorage.getItem('message')
    const result = localStorage.getItem('result')
    const dataFetched = {
      data: data,
      message: message,
      result: result
    }

    dispatch({
      type: GET_USER,
      payload: dataFetched
    })
  }

  const addRegister = (data) => {
    dispatch({
      type: ADD_REGISTER,
      payload: data
    })

    getData()
  }

  const debugSpin = () => {
    dispatch({
      type: DEBUG_SPIN
    })
  }

  return (
    <DataContext.Provider
      value={{
        data: state.data,
        message: state.message,
        result: state.result,
        addRegister,
        getData,
        debugSpin
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataState
