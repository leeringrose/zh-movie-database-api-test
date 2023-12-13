import React, { useEffect, useState } from 'react';
// Import Mui Components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { IMovieCredit } from '../../shared/types';
import { wrapImagePath } from '../../shared/service';
import ThumbnailBar from './ThumbnailBar';
import { Typography } from '@mui/material';

interface CreditCarouselProps {
  items: IMovieCredit[]
}


const CreditCarousel: React.FC<CreditCarouselProps> = ({
  items
}) => {

  useEffect(() => {

    // eslint-disable-next-line no-console
    console.log(items);
  }, [items]);

  const [index, setIndex] = useState<number>(0);

  const handleNavigate = (isNext: boolean) => {
    if (isNext) {
      if (index === items.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        setIndex(items.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };

  return <Box
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='space-between'
    width='100%'
    sx={{
      position: 'relative'
    }}
  >
    <IconButton
      sx={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translate(0, -50%)',
        zIndex: 30
      }}
      onClick={() => handleNavigate(false)}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
    <IconButton
      sx={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translate(0, -50%)',
        zIndex: 30
      }}
      onClick={() => handleNavigate(true)}
    >
      <ArrowForwardIosIcon />
    </IconButton>
    {items.length && <>
      {items[index].backdrop_path ? <img
        src={wrapImagePath(items[index].backdrop_path)}
        alt={`${items[index].title}'s backdrop image`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.5,
          width: '100%',
          height: 'auto'
        }}
      />
        : <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          width='100%'
          height={584}
        >
          <Typography
            variant='h4'
            color='GrayText'
          >{items[index].title}</Typography>
        </Box>
      }
      <ThumbnailBar
        paths={items.map(item => item.backdrop_path)}
        selected={index}
      />
    </>}
  </Box>;
};

export default CreditCarousel;