import styled, { keyframes } from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BeforeImageHoverAnimation = keyframes`
  0%   { top: 300px; }
  100%   { top: 0px; }
`

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid black;
  margin: 10px;
  position: relative;
  height: 300px;
  width: 200px;
  border-radius: ${(props) => props.theme.borderRadius};
  &:hover {
    // border: 1px solid ${(props) => props.theme.colors.main};
    &:before {
      animation-name: ${BeforeImageHoverAnimation};
      animation-duration: 0.5s;
      animation-iteration-count: 1;
      background-image: linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(40, 39, 93, 0.9) 80%);
    }
  }
  &::before {
    border-radius: ${(props) => props.theme.borderRadius};
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    content: '';
    display: block;
    background-image: linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.9) 80%);
  }
`

export const Title = styled.h2`
  font-size: 1em;
  z-index: 2;
  margin: 12px 0;
  padding: 0 12px;
`

export const Image = styled(LazyLoadImage)`
  border-radius: ${(props) => props.theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`
