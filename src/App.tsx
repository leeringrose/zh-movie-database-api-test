import Box from '@mui/material/Box';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Dashboard, Feed, UserDetail } from './pages';
import { AppLayout, SearchLayout } from './Layouts';

function App() {
  return (
    <Box className='App'>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Navigate to='dashboard' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='search' element={<SearchLayout />}>
            <Route index element={<Navigate to='feed' />} />
            <Route path='feed' element={<Feed />} />
          </Route>
          <Route path='detail/:personId' element={<UserDetail />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
