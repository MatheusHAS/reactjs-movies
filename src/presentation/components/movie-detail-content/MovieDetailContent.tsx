import React from 'react'
import {
  MovieHeader,
  Title,
  ListDetails,
  ListItemProgress,
  Overview,
  ProductionCompanies,
  CompaniesList,
  ContentTitle,
} from './Styles'
import { IMovie, IMovieDetail, IMovieProductionCompany } from '@/domain/models/IMovie'
import { getYearFromDate } from '@/presentation/utils'
import { ProgressBar } from '@/presentation/components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface Props {
  movie: IMovie
  movieDetail: IMovieDetail
}

export const MovieDetailContent: React.FC<Props> = ({ movie, movieDetail }: Props) => {
  const renderCompany = (company: IMovieProductionCompany) => {
    return <LazyLoadImage key={company.id} width={120} src={company.logo_path} />
  }

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
          <li>
            Código no IMDB:
            <span>{movieDetail ? movieDetail.imdb_id?.toUpperCase() : null}</span>
          </li>
        </ListDetails>
      </MovieHeader>
      <Overview>{movie.overview}</Overview>
      {movieDetail && movieDetail.production_companies.length > 0 ? (
        <>
          <ProductionCompanies>
            <ContentTitle>Produtoras:</ContentTitle>
            <CompaniesList>
              {movieDetail.production_companies.map((company) => (company.logo_path ? renderCompany(company) : null))}
            </CompaniesList>
          </ProductionCompanies>
        </>
      ) : null}
    </>
  )
}
