import React, { Component } from 'react';
import styled from 'styled-components';
import tmdb_api from '../api/tmdb';
import MovieList from './MovieList';

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

class Genre extends Component {
  state = {
    movies: []
  }
  fetchMovies = async (id) => {
    const res = await tmdb_api.get("/discover/movie", {
      params: {
        with_genres: id
      }
    });
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
    const { genres, match: { params } } = nextProps;
    const genre = genres.find(g => g.name.toLowerCase() === params.name);
    this.fetchMovies(genre.id);
  }
  componentDidMount() {
    this.fetchMovies(28);
  }
  render() {
    // console.log(this.props);
    const { match } = this.props;
    const { movies } = this.state;
    return (<>
      <Div>
        <H2>{match.params.name}</H2>
        <H4>Movies</H4>
        <MovieList movies={movies}></MovieList>
      </Div>
    </>);
  }
}

export default Genre;