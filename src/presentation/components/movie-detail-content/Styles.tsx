import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface MovieHeaderProps {
  bgImage?: string
}

export const MovieHeader = styled.div<MovieHeaderProps>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 40px;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  width: 100%;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(13 12 12 / 70%);
    background-image: linear-gradient(rgba(0 0 0 / 0%) 43%, rgba(23 22 22 / 100%) 98%);

    z-index: 0;
  }
`

export const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin: 12px 0;
  padding: 0 12px;
  z-index: 1;
`

export const Image = styled(LazyLoadImage)`
  border-radius: ${(props) => props.theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const ListDetails = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  li {
    display: block;
    padding: 0 10px;
    line-height: 1.3em;
    text-align: center;

    span {
      font-weight: bold;
      display: block;
    }
  }
`

export const ListItemProgress = styled.li`
  max-width: 140px;
`

export const Overview = styled.section`
  font-size: 1em;
  line-height: 1.2em;
  font-weight: normal;
  text-align: justify;
  padding: 32px;
  background-color: ${(props) => props.theme.colors.background};
`