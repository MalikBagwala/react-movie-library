import { Component } from 'react';
import tmdb_api from '../api/tmdb';
import _ from 'lodash';
class Movie extends Component {
  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const { data } = await tmdb_api.get(`/movie/${params.id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIEDB_API
      }
    });
    const movie = _.pick(data, [
      'original_title',
      'tagline',
      'vote_average',
      'vote_count',
      'overview',
      'homepage',
      'release_date',
      'revenue',
      'genres',
      'poster_path',
      'budget',
      'revenue'
    ]);
    console.log(data, movie);
  }
  render() {
    return null;
  }
}

export default Movie;
