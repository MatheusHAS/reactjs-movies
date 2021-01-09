import React from 'react'
import { Container, Title, Image } from './Styles'
import { IMovie } from '@/domain/models/IMovie'

interface Props {
  movie: IMovie
}

export const MovieListItem: React.FC<Props> = ({ movie }: Props) => {
  return (
    <Container>
      <Image alt={movie.title} height={300} src={movie.poster_path} />
      <Title>{movie.title}</Title>
    </Container>
  )
}
