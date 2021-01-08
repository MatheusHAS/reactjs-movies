import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme } from '@/presentation/styles/theme'
import Router from './router'
import store from '@/main/store'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.colors.main};
    color: ${(props: any) => props.theme.colors.font};
  }
`

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  )
}

export default Application
