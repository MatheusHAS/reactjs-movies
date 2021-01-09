import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HeaderProps } from './Header'

export const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: ${(props) => (props.showBackButton ? 'space-between' : 'center')};
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
`

export const Title = styled.h1`
  font-size: 1.8em;
`

export const BackButton = styled(Link)`
  color: ${(props) => props.theme.colors.font};
  text-decoration: none;
  padding: 8px 20px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: ${(props) => props.theme.borderRadius};

  &:hover {
    background-color: #f1f1f1;
    color: ${(props) => props.theme.colors.main};
  }
`
