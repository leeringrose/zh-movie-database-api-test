import React from 'react';
import { Outlet } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import SearchBox from '../components/SearchBox';

const AppLayout: React.FC = () => {
  return <>
    <Container sx={{ p: 3 }}>
      <SearchBox />
    </Container>
    <Divider sx={{
      width: '100%'
    }} color='rgba(0, 0, 0, 0.3)' />
    <Outlet />
  </>;
};

export default AppLayout;