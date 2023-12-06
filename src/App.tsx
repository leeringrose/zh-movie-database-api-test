import Box from '@mui/material/Box';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Feed } from './pages';
import AppLayout from './Layouts/AppLayout';

function App() {
  return (
    <Box className='App'>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Navigate to='/feed' />} />
          <Route path='feed' element={<Feed />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
