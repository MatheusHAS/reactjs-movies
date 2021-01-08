import { IApplicationState, IMovie } from '@/domain/models'
import React, { useEffect } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as MoviesActions from '@/main/store/containers/movies/actions'
import { MovieListItem } from '@/presentation/components'
import { Container, Posters } from './Styles'

interface Props {
  loadRequest: () => void
  movies: IMovie[]
}

const Home: React.FC<Props> = ({ loadRequest, movies }: Props) => {
  useEffect(() => {
    loadRequest()
  }, [])

  useEffect(() => {
    console.log('movies changed')
    console.log(movies)
  }, [movies])

  const renderMovieItem = (movie: IMovie) => (
    <Link key={movie.id} to={{ pathname: `/movie/${movie.id}`, state: movie }}>
      <MovieListItem movie={movie} />
    </Link>
  )

  return (
    <Container>
      <h1>Homepage</h1>
      <Posters>{movies && movies.map((movie) => renderMovieItem(movie))}</Posters>
    </Container>
  )
}

const mapStateToProps = (state: IApplicationState) => ({
  movies: state.movies.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MoviesActions, dispatch)

const connectInstance = connect(mapStateToProps, mapDispatchToProps)

export default connectInstance(Home)
