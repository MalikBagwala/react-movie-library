import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Tickets } from '../assets/tickets.svg';
import { faCompactDisc, faHeartbeat, faChartBar, faSpinner } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem';
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

const Menu = styled.div`
  padding: 0.5rem;

`;

const Sidebar = ({ genres }) => {
  return (
    <Div>
      <Tickets width={150} />
      <H4>Discover</H4>
      <Menu>
        <MenuItem path="/discover" icon={faHeartbeat} name="Popular"></MenuItem>
        <MenuItem path="/discover" icon={faChartBar} name="Top Rated"></MenuItem>
        <MenuItem path="/discover" icon={faSpinner} name="Upcoming"></MenuItem>
      </Menu>
      <H4>Genres</H4>
      <Menu>
        {genres.map(genre => (
          <MenuItem key={genre.id} path="/genre" icon={faCompactDisc} name={genre.name}></MenuItem>
        ))}
      </Menu>
    </Div>);
}

export default Sidebar;
