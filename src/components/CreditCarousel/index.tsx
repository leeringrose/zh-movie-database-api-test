import React, { useState } from 'react';
// Import Mui Components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { IMovieCredit } from '../../shared/types';
import { wrapImagePath } from '../../shared/service';
import ThumbnailBar from './ThumbnailBar';

interface CreditCarouselProps {
  items: IMovieCredit[]
}

const CreditCarousel: React.FC<CreditCarouselProps> = ({
  items
}) => {

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

  return <>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
    >
      <Box
        display='flex'
        justifyContent='space-around'
        width='100%'
        height={582.75}
        sx={{
          position: 'relative'
        }}
      >
        <>
          <IconButton
            color='info'
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
                width: '100%',
                opacity: 0.8,
                height: 'auto'
              }}
            />
              : <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                width='100%'
                sx={{
                  position: 'absolute',
                  top: '50%'
                }}
              >
                <Typography
                  variant='h4'
                  color='GrayText'
                >{items[index].title}</Typography>
              </Box>
            }
          </>}
        </>
        <Box
          p={2}
          display='flex'
          justifyContent='space-around'
          alignItems='center'
          width='100%'
          height='100%'
        >
          <Paper
            elevation={13}
            sx={{
              border: '3px solid grey'
            }}
          >
            <img
              width={280}
              height='auto'
              src={wrapImagePath(items[index].poster_path)}
              alt={items[index].poster_path}
            />
          </Paper>
          <Paper
            sx={{
              flex: 1,
              maxWidth: '60%',
              height: '100%',
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              zIndex: 40,
              backgroundColor: 'rgba(200, 200, 200, 0.3)'
            }}
            elevation={8}
          >
            {items[index].character && <Box
              display='inline-flex'
              my={1}
            >
              <Typography
                variant='h6'
                fontWeight={800}
                color='Highlight'
                mr={2}
              >Character:</Typography>
              <Typography
                variant='h5'
                fontWeight={800}
                color='InfoText'
              >{items[index].character}</Typography>
            </Box>}
            {items[index].credit_id && <Box
              display='inline-flex'
              my={1}
            >
              <Typography
                variant='h6'
                fontWeight={800}
                color='Highlight'
                mr={2}
              >Credit ID:</Typography>
              <Typography
                variant='h5'
                fontWeight={800}
                color='InfoText'
              >{items[index].credit_id}</Typography>
            </Box>}
            {items[index].genre_ids && <Box
              display='inline-flex'
              my={1}
            >
              <Typography
                variant='h6'
                fontWeight={800}
                color='Highlight'
                mr={2}
              >Genre IDs:</Typography>
              <Typography
                variant='h5'
                fontWeight={800}
                color='InfoText'
              >{items[index].genre_ids.join(', ')}</Typography>
            </Box>}
            {items[index].credit_id && <Box
              display='inline-flex'
              my={1}
            >
              <Typography
                variant='h6'
                fontWeight={800}
                color='Highlight'
                mr={2}
              >Credit ID:</Typography>
              <Typography
                variant='h5'
                fontWeight={800}
                color='InfoText'
              >{items[index].credit_id}</Typography>
            </Box>}


          </Paper>
        </Box>
      </Box>
      <ThumbnailBar
        paths={items.map(item => item.backdrop_path)}
        selected={index}
      />
    </Box >
  </>;
};

export default CreditCarousel;