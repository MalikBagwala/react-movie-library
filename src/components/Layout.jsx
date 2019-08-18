import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Div = styled.div`
  margin-left: 17vw;
  padding: 2rem;
`;

const Layout = ({ children, ...SidebarProps }) => {
  return (<>
    <Sidebar {...SidebarProps} />
    <Div>
      {children}
    </Div>
  </>);
}

export default Layout;