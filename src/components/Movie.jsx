import { Component } from 'react';
import tmdb_api from '../api/tmdb';

class Movie extends Component {
  async componentDidMount() {
    const { match: { params } } = this.props;
    const { data } = await tmdb_api.get(`/movie/${params.id}`, {
      params: {
        "api_key": process.env.REACT_APP_MOVIEDB_API
      }
    });
    console.log(data);
    const movie = {
      original_title: data.original_title,
      tagline: data.tagline,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
      overview: data.overview,
      homepage: data.homepage,
      release_date: data.release_date,
      revenue: data.revenue
    }
    // console.log(movie);
  }
  render() {
    return (null);
  }
}

export default Movie;