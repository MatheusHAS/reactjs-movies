import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/presentation/styles/theme'
import Router from './router'
import store from '@/main/store'

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  )
}

export default Application
