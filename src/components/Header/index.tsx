import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import Mui Components
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Container from '@mui/material/Container';
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

  const routerLocation = useLocation();
  const navigate = useNavigate();

  const [current, setCurrent] = useState<number | null>(0);

  useEffect(() => {
    if (routerLocation.pathname.startsWith('/feed')) {
      setCurrent(0);
    } else if (routerLocation.pathname.startsWith('/movies')) {
      setCurrent(1);
    } else if (routerLocation.pathname.startsWith('/tvshows')) {
      setCurrent(2);
    } else if (routerLocation.pathname.startsWith('/persons')) {
      setCurrent(3);
    } else {
      setCurrent(null);
    }
  }, [routerLocation]);

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
      <Container>
        <Toolbar sx={{ justifyContent: 'space-around' }}>
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
                color={index == current ? 'primary' : 'default'}
                onClick={() => handleNavBtnClick(icon.path)}
              >
                {icon.content}
              </IconButton>)
            }
          </Stack>
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;