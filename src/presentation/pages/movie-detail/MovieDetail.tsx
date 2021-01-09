import React from 'react'
import { useLocation } from 'react-router-dom'
import { IMovie, IMovieRouteState } from '@/domain/models'
import { MovieDetailContent } from '@/presentation/components'

export const MovieDetail: React.FC = () => {
  const location: IMovieRouteState = useLocation()
  const movie: IMovie = location.state

  return <MovieDetailContent movie={movie} />
}
