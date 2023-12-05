import React from 'react';
import { Outlet } from 'react-router-dom';

import Container from '@mui/material/Container';

import Header from '../components/Header';

const AppLayout: React.FC = () => {
  return <>
    <Header />
    <Container
      role='feed'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(0, 0, 0, 0.05)',
        p: 1,
        overflow: 'auto'
      }}
    >
      <Outlet />
    </Container>
  </>;
};

export default AppLayout;