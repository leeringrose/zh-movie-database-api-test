import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import CategoryButton from '../components/CategoryButton';

const Dashboard: React.FC = () => {

  const navigate = useNavigate();

  const handleClickCategory = (categoryTitle: string) => {
    // eslint-disable-next-line no-console
    console.log(`${categoryTitle} clicked`);
    navigate(`/${categoryTitle}`);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
      sx={{
        overflow: 'auto',
        flex: 1,
        p: 3
      }}
    >
      <CategoryButton title='Persons' onButtonClick={handleClickCategory} />
      <CategoryButton title='Movies' onButtonClick={handleClickCategory} />
      <CategoryButton title='Details' onButtonClick={handleClickCategory} />
    </Box >
  );
};

export default Dashboard;