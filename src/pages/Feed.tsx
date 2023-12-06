import React from 'react';

import Container from '@mui/material/Container';
import DisplayPad from '../components/DisplayPad';

const Feed: React.FC = () => {

  return (
    <Container
      sx={{
        p: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
        flex: 1
      }}
    >
      <DisplayPad />
    </Container>
  );
};

export default Feed;