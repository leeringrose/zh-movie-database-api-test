import React from 'react';

import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ICategoryButton {
  title: string
  imageName?: string
  children?: React.ReactNode,
  onButtonClick: (title: string) => void
}

// eslint-disable-next-line max-len
const CategoryButton: React.FC<ICategoryButton> = ({ title, children, imageName, onButtonClick, ...rest }) => {

  // eslint-disable-next-line no-console
  console.log(rest);


  const matches = useMediaQuery('(min-width: 601px)');

  return <Paper
    elevation={3}
    sx={{
      position: 'relative',
      borderRadius: '2em',
      width: matches ? 800 : '100%',
      height: matches ? 250 : 150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      ':hover': {
        opacity: 0.7,
        border: '3px solid #112bbe'
      }
    }}
    onClick={() => onButtonClick(title)}
    {...rest}
  >
    {imageName && <img
      style={{
        position: 'absolute',
        borderRadius: '2em',
        zIndex: 0
      }}
      width='100%'
      height='100%'
      src={`/assets/images/category-buttons/${imageName}`}
      alt={'category-background'}
    />}
    <h1 style={{ zIndex: 10 }}>{title}</h1>
    {children && children}
  </Paper >;
};

export default CategoryButton;