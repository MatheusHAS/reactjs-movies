import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding-top: 96px;

  a {
    text-decoration: none;
    color: ${(props: any) => props.theme.colors.font};
  }
`

export const Posters = styled.section`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  z-index: 2;
  margin: 12px 0;
  padding: 0 12px;
`
