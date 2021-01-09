import React from 'react'
import { MovieHeader, Title, ListDetails, ListItemProgress, Overview } from './Styles'
import { IMovie } from '@/domain/models/IMovie'
import { getYearFromDate } from '@/presentation/utils'
import { ProgressBar } from '@/presentation/components'

interface Props {
  movie: IMovie
}

export const MovieDetailContent: React.FC<Props> = ({ movie }: Props) => {
  return (
    <>
      <MovieHeader bgImage={movie.backdrop_path}>
        <Title>{movie.title}</Title>
        <ListDetails>
          <li>
            Lançamento:<span>{getYearFromDate(movie.release_date)}</span>
          </li>
          <ListItemProgress>
            Popularidade: <ProgressBar percent={movie.popularity > 100 ? 100 : movie.popularity} />
          </ListItemProgress>
        </ListDetails>
      </MovieHeader>
      <Overview>{movie.overview}</Overview>
    </>
  )
}
