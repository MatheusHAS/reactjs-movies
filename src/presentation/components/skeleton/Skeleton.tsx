import * as React from 'react'
import { SkeletonLoading, SkeletonContainer } from './Styles'

interface SkeletonListProps {
  count: number
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

export const SkeletonList: React.FC<SkeletonListProps> = (props: SkeletonListProps) => {
  const renderList = () => {
    const arrayItems: any[] = []
    for (let p = 0; p < props.count; p++) {
      arrayItems.push(<SkeletonLoading key={p} {...props} />)
    }
    return arrayItems
  }
  return <SkeletonContainer>{renderList()}</SkeletonContainer>
}

export { SkeletonLoading as Skeleton }
