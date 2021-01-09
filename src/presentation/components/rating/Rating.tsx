import React from 'react'
import { Container, Star } from './Styles'

interface RatingProps {
  value: number
}

export const Rating: React.FC<RatingProps> = ({ value }: RatingProps) => {
  const star = (color: string | null = null) => {
    return (
      <>
        <Star width={25} height={25} fill={color}>
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </Star>
      </>
    )
  }

  const renderStars = (value: number = 1) => {
    const ratingValue = Math.round(value) / 2
    const arrayItems: any[] = []
    for (let p = 0; p < 5; p++) {
      arrayItems.push(star(p < ratingValue ? '#ffd055' : null))
    }
    return arrayItems
  }

  return <Container>{renderStars(value)}</Container>
}
