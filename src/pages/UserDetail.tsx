import React from 'react';
import { useParams } from 'react-router-dom';

// Import MUI Components
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import usePersonDetail from '../hooks/usePersonDetail';
import PersonImage from '../components/core/PersonImage';

const UserDetail: React.FC = () => {

  const params = useParams();
  const personDetail = usePersonDetail(params.personId);
  const { profile_path, name, gender } = personDetail;

  return <Container sx={{ p: 3 }}>
    <Paper
      role='document'
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column'
      }}
      elevation={3}>
      <Container>
        <Box
          width={300}
          height={350}
        >
          <PersonImage
            path={profile_path}
            gender={gender}
            alt={name}
          />
        </Box>
      </Container>


    </Paper>
  </Container>;
};

export default UserDetail;