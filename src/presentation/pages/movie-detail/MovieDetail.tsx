import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { IApplicationState, IMovie, IMovieDetail, IMovieRouteState } from '@/domain/models'
import { MovieDetailContent } from '@/presentation/components'
import * as MoviesActions from '@/main/store/containers/movies/actions'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

interface Props {
  loadDetailRequest: (id: number) => void
  movieDetail: IMovieDetail
}

const MovieDetail: React.FC<Props> = ({ loadDetailRequest, movieDetail }: Props) => {
  const location: IMovieRouteState = useLocation()
  const movie: IMovie = location.state

  useEffect(() => {
    if ((movieDetail && movieDetail.id !== movie.id) || !movieDetail) {
      loadDetailRequest(movie.id)
    }
  }, [])

  return <MovieDetailContent movie={movie} movieDetail={movieDetail} />
}

const mapStateToProps = (state: IApplicationState) => ({
  movieDetail: state.movies.detail.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MoviesActions, dispatch)

const connectInstance = connect(mapStateToProps, mapDispatchToProps)

export default connectInstance(MovieDetail)
