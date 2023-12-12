import React from 'react';

import Container from '@mui/material/Container';


const Dashboard: React.FC = () => {

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
      <h1>Hello Everyone!</h1>
    </Container>
  );
};

export default Dashboard;