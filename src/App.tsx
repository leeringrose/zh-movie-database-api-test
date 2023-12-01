import { Container } from '@mui/material';

import { ContextProvider } from './AppContext';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import DisplayPad from './components/DisplayPad';

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
            pt: 5
          }}
        >
          <SearchBox />
          <DisplayPad />
        </Container>
      </div>
    </ContextProvider>
  );
}

export default App;
