import React from 'react'
import { HeaderContainer, Title, BackButton } from './Styles'

export interface HeaderProps {
  showBackButton?: boolean
}

export const Header: React.FC<HeaderProps> = ({ showBackButton }: HeaderProps) => {
  return (
    <HeaderContainer showBackButton={showBackButton}>
      {showBackButton ? <BackButton to="/">Voltar</BackButton> : null}
      <Title>ReactMovies</Title>
    </HeaderContainer>
  )
}
