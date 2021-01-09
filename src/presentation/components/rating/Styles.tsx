import styled from 'styled-components'

export interface RatingProps {
  fill?: string
}

export const Container = styled.div`
  display: flex;
`

export const Star = styled.svg<RatingProps>`
  fill: ${(props) => props.fill ?? '#dce0e3'};
`
