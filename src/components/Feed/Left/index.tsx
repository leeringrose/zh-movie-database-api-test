import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Left: React.FC = () => {
  return (
    <Box
      minWidth={350}
      p={5}
      sx={{
        backgroundColor: 'white',
        borderRadius: '3rem'
      }}
    >
      <Typography variant='h3' component='div'>Welcome!</Typography>
    </Box>
  );
};

export default Left;