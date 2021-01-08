import React from 'react'
import { Container, Title } from './Styles'
import { IMovie } from '@/domain/models/IMovie'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface Props {
  movie: IMovie
}

export const MovieListItem: React.FC<Props> = ({ movie }: Props) => {
  return (
    <Container>
      <LazyLoadImage alt={movie.title} height={250} src={movie.poster_path} />
      <Title>{movie.title}</Title>
    </Container>
  )
}
