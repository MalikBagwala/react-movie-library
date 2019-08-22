import React from 'react';
import { Route, Switch } from "react-router-dom";
import tmdb_api from './api/tmdb';
import Genre from './components/Genre';
import Layout from './components/Layout';
import Discover from './components/Discover';
import Movie from './components/Movie';

class App extends React.Component {
  state = {
    genres: []
  }
  async componentDidMount() {
    try{
      const res = await tmdb_api.get("/genre/movie/list",{
      params:{
        "api_key": process.env.REACT_APP_MOVIEDB_API
      }}
      );
      const genres = res.data.genres;
      this.setState({ genres  });
    }catch(err){
      console.log(err);
    }
  }
  render(){
  const {genres} = this.state;
  // console.log(genres);
  return (
    <Layout genres={genres}>
      <Switch>
        <Route path="/genre/:name" render={(props)=>{
          return <Genre genres={genres} {...props}></Genre>
        }}
        />
        <Route path="/discover/:type" component={Discover}/>
        <Route path="/movie/:id" component={Movie}/>
      </Switch>
    </Layout>
  );
  }
}

export default App;
