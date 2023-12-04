import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';

const Header = () => {
  const matchMedia = useMediaQuery(json2mq({
    minWidth: 612
  }));
  return (
    <AppBar
      position='sticky'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80px',
        background: '#f5ca16',
        color: 'black'
      }}>
      <Container>
        <Typography variant={`${matchMedia ? 'h3' : 'h5'}`} sx={{
          fontWeight: '700'
        }}>
          CREDIT CROSSOVER
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Header;