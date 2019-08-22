import React, { Component } from 'react';
import styled from 'styled-components';
import tmdb_api from '../api/tmdb';
import MovieList from './MovieList';
import _ from "lodash";
const H2 = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.7rem;
`;

const H4 = styled.h4`
  text-transform: uppercase;
  font-size:0.8rem;
`;

const Div = styled.div`
  /* ... */
`;

class Discover extends Component {
  state = {
    movies: []
  }
  fetchMovies = async (type) => {
    const res = await tmdb_api.get(`/movie/${type}`);
    const list = res.data.results;
    const movies = list.map(genreMovie => ({
      id: genreMovie.id,
      title: genreMovie.original_title,
      rating: genreMovie.vote_average,
      poster_path: genreMovie.poster_path,
      vote_count: genreMovie.vote_count
    }))
    this.setState({ movies });
  }
  componentWillReceiveProps(nextProps) {
    const { match: { params } } = nextProps;
    this.fetchMovies(params.type);
  }
  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchMovies(params.type);
  }
  render() {
    // console.log(this.props);
    const { match } = this.props;
    const { movies } = this.state;
    return (<>
      <Div>
        <H2>{_.startCase(match.params.type)}</H2>
        <H4>Movies</H4>
        <MovieList movies={movies}></MovieList>
      </Div>
    </>);
  }
}

export default Discover;