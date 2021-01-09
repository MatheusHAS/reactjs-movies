import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  /* background-color: ${(props: any) => props.theme.colors.secondary}; */
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
`

export const Title = styled.h1`
  font-size: 1.8em;
`

export const BackButton = styled(Link)`
  color: ${(props) => props.theme.colors.font};
`
