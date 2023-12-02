import Container from '@mui/material/Container';

import { ContextProvider } from './AppContext';
import './App.css';
import Header from './components/Header';
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
            backgroundColor: 'rgb(0, 0, 0, 0.05)',
            pt: 4
          }}
        >
          <DisplayPad />
        </Container>
      </div>
    </ContextProvider>
  );
}

export default App;
