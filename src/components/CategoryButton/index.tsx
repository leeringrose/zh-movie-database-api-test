import React from 'react';

import Button from '@mui/material/Button';

interface ICategoryButton {
  title: string
}

const CategoryButton: React.FC<ICategoryButton> = ({ title }) => <Button>{title}</Button>;

export default CategoryButton;