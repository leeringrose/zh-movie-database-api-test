import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IKnownMovie } from '../../shared/types';

const Carousel: React.FC<IKnownMovie> = (movieInfo) => {

  const { title, release_date, vote_count } = movieInfo;

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='100%'
      height='100%'
    >
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flex={1}
      >
        <Typography component='div' variant='h5'>
          {title}
        </Typography>
      </Box>
      <Box
        width='100%'
        display='flex'
        alignItems='center'
        justifyContent='space-around'
      >
        <Typography component='div' variant='subtitle1'>{release_date}</Typography>
        <Typography component='div' variant='subtitle1'>{vote_count}</Typography>
      </Box>
    </Box >
  );
};

export default Carousel;