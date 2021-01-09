import styled, { keyframes } from 'styled-components'

interface ProgressContainerProps {
  percent: number
}

const AnimateProgress = (percent: number) => keyframes`
  0% { width: 0% }
  100% { width: ${percent}% }
`

export const ProgressContainer = styled.div<ProgressContainerProps>`
  height: 12px;
  position: relative;
  background: #dce0e3;
  border-radius: 8px;
  margin-top: 3px;

  & > span {
    animation-name: ${(props) => AnimateProgress(props.percent)};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    display: block;
    height: 100%;
    width: ${(props) => props.percent}%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: ${(props) => (props.percent >= 100 ? '8px' : '20px')};
    border-bottom-left-radius: ${(props) => (props.percent >= 100 ? '8px' : '20px')};
    background-color: #6bb438;
    position: relative;
    overflow: hidden;
  }
`

export const Bar = styled.span`
  /* display: flex;
  flex-flow: row;
  flex-wrap: nowrap; */
`
