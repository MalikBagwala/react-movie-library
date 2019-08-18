import React, { Component } from 'react';
import MovieCard from './UI/MovieCard';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(10rem, 25rem));
  justify-content: space-evenly;
  align-content: space-between;
  -webkit-box-align: start;
  align-items: start;
  padding: 4rem 0px;
  gap: 4rem 2rem;
`;

class MovieList extends Component {
  state = {}
  render() {
    const { movies } = this.props;
    return (<Div>
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie}></MovieCard>
      ))}
    </Div>);
  }
}

export default MovieList;