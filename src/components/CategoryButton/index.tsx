import React from 'react';

import Button from '@mui/material/Button';

interface ICategoryButton {
  title: string
  children: React.ReactNode
}

const CategoryButton: React.FC<ICategoryButton> = ({ title, children }) => {

  return <Button>
    {title}
    {children}
  </Button>;
};

export default CategoryButton;