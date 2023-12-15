import Box from '@mui/material/Box';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Feed, PersonDetail, PersonResult } from './pages';
import { AppLayout, SearchLayout } from './Layouts';

function App() {
  return (
    <Box className='App'>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Navigate to='feed' />} />
          <Route path='feed' element={<Feed />} />
          <Route path='persons'>
            <Route index element={<Navigate to='search' />} />
            <Route path='search' element={<>
              <SearchLayout />
              <PersonResult />
            </>} />
            <Route path='detail/:personId' element={<PersonDetail />} />
          </Route>
          <Route path='movies' element={<h2>Movies page</h2>} />
          <Route path='tvshows' element={<h2>TV Shows page</h2>} />
        </Route>
      </Routes>
    </Box >
  );
}

export default App;
