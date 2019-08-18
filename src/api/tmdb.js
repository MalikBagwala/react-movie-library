import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const tmdb_api =  axios.create({
  baseURL: BASE_URL,
  params:{
    "api_key": process.env.REACT_APP_MOVIEDB_API
  }
});

export default tmdb_api;