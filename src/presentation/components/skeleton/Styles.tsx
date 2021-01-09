import styled, { keyframes } from 'styled-components'

const SkeletonOptions = {
  bgColor: '#eeeeee',
  bgHighlightColor: '#f5f5f5',
  duration: 1,
}

const SkeletonAnimation = keyframes`
  100% {
    transform: translateX(100%);
  }
`
export const SkeletonContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;

  & span {
    margin: 10px;
  }
`

interface SkeletonLoadingProps {
  height?: number
  width?: number
  borderRadius?: string
  bgColor?: string
  highlightColor?: {
    red: number
    green: number
    blue: number
  }
}

export const SkeletonLoading = styled.span<SkeletonLoadingProps>`
  display: inline-block;
  background-repeat: no-repeat;
  height: ${(props) => (props.height ? `${props.height}px` : '1em')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '4px')};
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : SkeletonOptions.bgColor)};

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(
          ${(props) =>
            props.highlightColor
              ? `${props.highlightColor.red}, ${props.highlightColor.green}, ${props.highlightColor.blue}`
              : '255, 255, 255'},
          0
        )
        0,
      rgba(
          ${(props) =>
            props.highlightColor
              ? `${props.highlightColor.red}, ${props.highlightColor.green}, ${props.highlightColor.blue}`
              : '255, 255, 255'},
          0.2
        )
        20%,
      rgba(
          ${(props) =>
            props.highlightColor
              ? `${props.highlightColor.red}, ${props.highlightColor.green}, ${props.highlightColor.blue}`
              : '255, 255, 255'},
          0.5
        )
        60%,
      rgba(
        ${(props) =>
          props.highlightColor
            ? `${props.highlightColor.red}, ${props.highlightColor.green}, ${props.highlightColor.blue}`
            : '255, 255, 255'},
        0
      )
    );
    animation: ${SkeletonAnimation} ${SkeletonOptions.duration}s infinite;
    content: '';
  }
`
