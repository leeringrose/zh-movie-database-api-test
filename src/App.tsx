import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';

function App() {
  return (
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
        <SearchBox searchText='Bruce' />
      </Container>
    </div>
  );
}

export default App;
