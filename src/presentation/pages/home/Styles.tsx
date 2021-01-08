import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${(props: any) => props.theme.colors.font};
  }
`

export const Posters = styled.section`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`
