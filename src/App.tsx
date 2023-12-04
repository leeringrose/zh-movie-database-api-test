import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { ContextProvider } from './AppContext';
import './App.css';
import Header from './components/Header';
import DisplayPad from './components/DisplayPad';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <ContextProvider>
      <div className='App'>
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 3
            }}
          >
            <SearchBox />
          </Box>
          <DisplayPad />
        </Container>
      </div>
    </ContextProvider>
  );
}

export default App;
