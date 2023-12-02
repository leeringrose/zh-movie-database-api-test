import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Fallback: React.FC = () => <Box
  sx={{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <CircularProgress size='80%' />
</Box>;

export default Fallback;