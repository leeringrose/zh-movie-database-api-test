import React from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CategoryButton from '../components/CategoryButton';


const Dashboard: React.FC = () => {

  return (
    <Container
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'auto',
        flex: 1
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          height: '200px'
        }}
      >
        <CategoryButton
          title='Discover'
        >
          <h1>Hello Category Name!</h1>
        </CategoryButton>
      </Paper>
    </Container >
  );
};

export default Dashboard;