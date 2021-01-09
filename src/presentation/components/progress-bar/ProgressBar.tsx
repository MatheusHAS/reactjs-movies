import React from 'react'
import { ProgressContainer, Bar } from './Styles'

interface Props {
  percent: number
}

export const ProgressBar: React.FC<Props> = ({ percent }: Props) => {
  return (
    <ProgressContainer percent={percent}>
      <Bar />
    </ProgressContainer>
  )
}
