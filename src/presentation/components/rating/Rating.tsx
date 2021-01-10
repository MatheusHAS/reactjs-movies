import React from 'react'
import { Container, Star } from './Styles'

interface RatingProps {
  value: number
}

export const Rating: React.FC<RatingProps> = ({ value }: RatingProps) => {
  const starWithProps = (color: string = null, key: any) => (
    <Star key={key} width={25} height={25} fill={color}>
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
    </Star>
  )

  const renderStars = (value: number = 1) => {
    const ratingValue = Math.round(value) / 2
    const arrayItems: any[] = []
    for (let p = 0; p < 5; p++) {
      arrayItems.push(starWithProps(p < ratingValue ? '#ffd055' : null, `rating-${p}`))
    }
    return arrayItems
  }

  return <Container>{renderStars(value)}</Container>
}
