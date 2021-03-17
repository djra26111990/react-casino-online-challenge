import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import AuthState from './context/authentication/authState'
import DataState from './context/data/dataState'

const App = () => {
  return (
    <DataState>
      <AuthState>
        <Header />
        <Content />
        <Footer />
      </AuthState>
    </DataState>
  )
}

export default App
