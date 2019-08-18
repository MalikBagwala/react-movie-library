import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Tickets } from '../assets/tickets.svg';
import GenreName from './GenreName';
const Div = styled.div`
  border-right: 1px solid lightgray;
  position: fixed;
  padding: 1rem;
  height: 100vh;
  width: 17vw;
  ::-webkit-scrollbar {
    display: none;  // Safari and Chrome
  }
`;

const H4 = styled.h4`
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const Genres = styled.div`
  padding: 0.5rem;

`;

const Sidebar = ({ genres }) => {
  return (
    <Div>
      <Tickets width={150} />
      <H4>Genres</H4>
      <Genres>
        {genres.map(genre => (
          <GenreName key={genre.id} name={genre.name}></GenreName>
        ))}
      </Genres>
    </Div>);
}

export default Sidebar;
