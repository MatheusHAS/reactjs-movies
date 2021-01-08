import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IMovie } from '@/domain/models/IMovie'

interface MovieRouteState {
  state: IMovie
}

export const MovieDetail: React.FC = () => {
  const location: MovieRouteState = useLocation()
  const movie: IMovie = location.state

  return (
    <>
      <Link to="/">Voltar</Link>
      <h1>{movie.title}</h1>
      <span>{movie.overview}</span>
    </>
  )
}
