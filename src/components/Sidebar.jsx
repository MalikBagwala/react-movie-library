import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Tickets } from '../assets/tickets.svg';
const Div = styled.div`
  border-right: 1px solid lightgray;
  position: fixed;
  padding: 1rem;
  height: 100vh;
  width: 17vw;
`;

const H4 = styled.h4`
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const Genres = styled.div`
  padding: 0.5rem;
  color: lightgray;
`;

const Sidebar = ({ genres }) => {
  console.log(genres);
  return (<Div>
    <Tickets width={150} />
    <H4>Genres</H4>
    <Genres>
      {genres.map(genre => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </Genres>
  </Div>);
}

export default Sidebar;
