import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Mui Components
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Stack from '@mui/material/Stack';

import json2mq from 'json2mq';

interface HeaderProps {
  title?: string
  logoPath?: string
  children?: React.ReactNode
}

const icons = [{
  content: <HomeIcon />,
  path: '/feed'
},
{
  content: <MovieIcon />,
  path: '/movies'
},
{
  content: <LiveTvIcon />,
  path: '/tvshows'
},
{
  content: <PersonSearchIcon key='1' />,
  path: '/persons'
}];

const Header: React.FC<HeaderProps> = ({
  title,
  logoPath,
  children
}) => {

  const navigate = useNavigate();

  const matchMedia = useMediaQuery(json2mq({
    minWidth: 612
  }));
  const handleNavBtnClick = (route: string) => {
    navigate(route);
  };

  return (
    <AppBar
      position='fixed'
      component='nav'
      variant='elevation'
      color='inherit'
      sx={{
        height: '64px',
      }}>
      <Toolbar
        sx={{
          justifyContent: 'space-around'
        }}
      >
        {logoPath && <img
          src={logoPath}
          alt='logo image'
          height='90%'
          width='auto'
        />}
        {title && <Typography
          variant={`${matchMedia ? 'h5' : 'h6'}`}
          sx={{
            fontWeight: '600',
          }}>
          {title}
        </Typography>}
        <Stack direction='row' spacing={2}>
          {
            icons.map((icon, index) => <IconButton
              key={index}
              size='large'
              onClick={() => handleNavBtnClick(icon.path)}
            >
              {icon.content}
            </IconButton>)
          }
        </Stack>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;