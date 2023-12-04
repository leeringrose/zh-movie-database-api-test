import React from 'react';

import Box from '@mui/material/Box';
import SearchBox from '../components/SearchBox';

const Feed: React.FC = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        p: 3,
        borderBottom: '1px solid rgba(0, 0, 0, 0.3)'
      }}
    >
      <SearchBox />
    </Box>
  );
};

export default Feed;