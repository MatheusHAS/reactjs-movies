import { IApplicationState, IMovie, IMovieListState } from '@/domain/models'
import React, { useEffect } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as MoviesActions from '@/main/store/containers/movies/actions'
import { MovieListItem, SkeletonList } from '@/presentation/components'
import { Container, Posters, Title } from './Styles'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Props {
  loadRequest: (page: number) => void
  movieListState: IMovieListState
}

const Home: React.FC<Props> = ({ loadRequest, movieListState }: Props) => {
  let movies = movieListState.data || []

  useEffect(() => {
    if (movieListState.data !== movies) {
      movies = movieListState.data
    }
  }, [movieListState])

  useEffect(() => {
    if (!movies || movies.length === 0) {
      loadRequest(1)
    }
  }, [])

  const renderMovieItem = (movie: IMovie) => (
    <Link key={movie.id} to={{ pathname: `/movie/${movie.id}`, state: movie }}>
      <MovieListItem movie={movie} />
    </Link>
  )

  const HomeListSkeleton = () => (
    <SkeletonList
      count={8}
      height={300}
      width={200}
      bgColor={'#1d1f35'}
      highlightColor={{
        red: 40,
        green: 39,
        blue: 93,
      }}
    />
  )

  return (
    <Container>
      <Title>Filmes populares</Title>
      {movieListState.loading ? (
        <HomeListSkeleton />
      ) : (
        <InfiniteScroll
          hasMore={movieListState.page < movieListState.totalPages}
          dataLength={movieListState.totalPages}
          loader={<HomeListSkeleton />}
          style={{ overflow: 'hidden' }}
          next={() => loadRequest(movieListState.page + 1)}
        >
          <Posters>{movies && movies.map((movie) => renderMovieItem(movie))}</Posters>
        </InfiniteScroll>
      )}
    </Container>
  )
}

const mapStateToProps = (state: IApplicationState) => ({
  movieListState: state.movies.list,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MoviesActions, dispatch)

const connectInstance = connect(mapStateToProps, mapDispatchToProps)

export default connectInstance(Home)
