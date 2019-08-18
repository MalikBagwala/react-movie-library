import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import { withRouter } from "react-router-dom";
const Div = styled.div`
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #202B33;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background: #202B33;
    color: white;
  }
`;

const IMG = styled.img`
  width: 100%;
`;

const Text = styled.div`

  font-size: 1rem;
`;
const Content = styled.div`
  padding: 1rem;
   display: flex;
  flex-direction: column;
`;

const MovieCard = ({ title, id, rating, history, poster_path }) => {
  console.log(history);
  return (<Div onClick={() => {
    history.push(`/movie/${id}`)
  }}>
    <IMG src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
    <Content>
      <Text>{title}</Text>
      <Rating rating={rating}></Rating>
    </Content>
  </Div>);
}

export default withRouter(MovieCard);