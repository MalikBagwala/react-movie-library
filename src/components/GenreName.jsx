import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from "react-router-dom";
const Div = styled.div`
  margin-top: 0.2rem;
  background: ${props => props.isActive ? '#202B33' : "white"};
  color: ${props => props.isActive ? 'white' : "#8A9BA8"};
  border-radius: 5px;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover{
    color: ${props => props.isActive ? "white" : "#202B33"}
  }
`;

const Span = styled.span`
  font-size: 0.9rem;
  margin-left: 10px;
`;


const GenreName = ({ name, history }) => {
  return (
    <Div isActive={history.location.pathname.includes(name.toLowerCase())} onClick={() => {
      history.push(`/genre/${name.toLowerCase()}`)
    }}>
      <FontAwesomeIcon icon={faCompactDisc}></FontAwesomeIcon>
      <Span>{name}</Span>
    </Div >);
}

export default withRouter(GenreName);