import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface NoDataProps {
  category: string
  issued?: string
}

const NoData: React.FC<NoDataProps> = ({ category, issued }) => {
  return <Box
    width='100%'
    height='100%'
    minHeight={400}
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
  >
    <img
      style={{
        opacity: 0.8,
        borderRadius: '5rem'
      }}
      src='/assets/utilities/no-data.gif'
      alt='no_data.gif'
      width={100}
      loading='lazy'
    />
    <Typography
      mt={3}
      component='div'
      variant='h5'
      color='rgba(255, 0, 0, 0.8)'>
      {`No ${category}s`}
      {issued && ` ${issued}`}
    </Typography>
  </Box >;
};

export default NoData;