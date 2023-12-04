import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { ContextProvider } from './AppContext';
import './App.css';
import Header from './components/Header';
import { Feed } from './pages';
import DisplayPad from './components/DisplayPad';

function App() {
  return (
    <ContextProvider>
      <Box className='App'>
        <Header />
        <Container
          role='feed'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgb(0, 0, 0, 0.05)',
            p: 1,
            overflow: 'auto'
          }}
        >
          <Feed />
          <DisplayPad />
        </Container>
      </Box>
    </ContextProvider>
  );
}

export default App;
