import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Left, MainBoard } from '../components/Feed';

const Feed: React.FC = () => {

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'auto',
        flex: 1,
        p: 3
      }}
    >
      <Box
        p='5rem'
      >
        <Left />
      </Box>
      <Box
        p='5rem'
      >
        <MainBoard />
      </Box>

    </Container >
  );
};

export default Feed;