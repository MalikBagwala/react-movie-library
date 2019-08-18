import React from 'react';
import { Route, Switch } from "react-router-dom";
import tmdb_api from './api/tmdb';
import Genre from './components/Genre';
import Layout from './components/Layout';

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
  return (
    <Layout {...this.state}>
      <Switch>
        <Route path="/genre/:name" component={Genre} ></Route>
      </Switch>
    </Layout>
  );
  }
}

export default App;
