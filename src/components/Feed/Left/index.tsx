import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Left: React.FC = () => {
  return (
    <Paper
      elevation={7}
      sx={{
        p: 4,
        minWidth: 350,
        backgroundColor: 'white',
        borderRadius: '1.3rem',
        border: '3px solid darkgrey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
      }}
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography
          variant='h3'
          component='div'>
          Welcome!
        </Typography>
      </Box>
    </Paper>
  );
};

export default Left;