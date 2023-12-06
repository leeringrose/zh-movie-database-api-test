import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';
import { Container } from '@mui/material';

const Header = () => {
  const matchMedia = useMediaQuery(json2mq({
    minWidth: 612
  }));
  return (
    <AppBar
      position='fixed'
      component='nav'
      variant='elevation'
      sx={{
        height: '64px',
      }}>
      <Container>
        <Toolbar>
          <Typography
            variant={`${matchMedia ? 'h5' : 'h6'}`}
            sx={{
              fontWeight: '600',
            }}>
            Welcome to Movie Database Api Explorer!
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;