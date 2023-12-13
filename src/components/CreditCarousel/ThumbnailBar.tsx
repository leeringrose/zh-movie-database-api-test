import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import { wrapImagePath } from '../../shared/service';

interface ThumbnailBarProps {
  paths: string[]
  selected: number
}

const ThumbnailBar: React.FC<ThumbnailBarProps> = ({ paths, selected }) => {

  const [shows, setShows] = useState<number[]>([]);

  useEffect(() => {
    let result = [];
    for (let i = selected, j = 0; j < 5; i++, j++) {
      if (i === paths.length) {
        i = 0;
      }
      result.push(i);
    }
    for (let i = selected, j = 0; j < 5; i--, j++) {
      if (i === -1) {
        i = paths.length - 1;
      }
      result = [i, ...result];
    }
    setShows(result);
  }, [paths, selected]);

  return <Box
    display='flex'
    alignItems='stretch'
    justifyContent='stretch'
    sx={{
      position: 'absolute',
      overflow: 'hidden',
      width: '100%',
      height: '120px',
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'lightblue',
      bottom: 0
    }}
  >
    {shows.map((current, index) => <img
      key={index}
      src={wrapImagePath(paths[current])}
      alt={paths[current]}
      style={{
        flex: 1,
        border: selected === current ?
          '3px solid black'
          : undefined
      }}
    />)}
  </Box>;
};

export default ThumbnailBar;