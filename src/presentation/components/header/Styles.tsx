import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: ${(props: any) => props.theme.colors.secondary};
  margin-bottom: 32px;
`

export const Title = styled.h1`
  font-size: 1.8em;
`
