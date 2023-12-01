import React from 'react';
import { Container } from '@mui/material';

import ContextWrapper from './AppContext';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <ContextWrapper>
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
    </ContextWrapper>
  );
}

export default App;
