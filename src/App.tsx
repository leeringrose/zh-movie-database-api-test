import Box from '@mui/material/Box';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Dashboard, PersonDetail, PersonResult } from './pages';
import { AppLayout, SearchLayout } from './Layouts';

function App() {
  return (
    <Box className='App'>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Navigate to='dashboard' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='persons' element={<SearchLayout />}>
            <Route index element={<Navigate to='search' />} />
            <Route path='search' element={<PersonResult />} />
            <Route path='person-detail/:personId' element={<PersonDetail />} />
          </Route>
        </Route>
      </Routes>
    </Box >
  );
}

export default App;
