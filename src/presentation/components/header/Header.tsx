import React from 'react'
import { useLocation } from 'react-router-dom'
import { HeaderContainer, Title, BackButton } from './Styles'

export const Header: React.FC = () => {
  const location = useLocation()
  const showBackButton = () => {
    return true
  }

  return (
    <HeaderContainer>
      {showBackButton() ? <BackButton to="/">Voltar</BackButton> : null}
      <Title>ReactMovies</Title>
    </HeaderContainer>
  )
}
