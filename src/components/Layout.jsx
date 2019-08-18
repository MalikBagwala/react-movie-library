import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Div = styled.div`
  margin-left: 17vw;
  padding: 2rem;
  width: calc(100vw - 17vw);
`;

const Layout = ({ children }) => {
  return (<>
    <Sidebar />
    <Div>
      {children}
    </Div>
  </>);
}

export default Layout;