import React from 'react';
import { useParams } from 'react-router-dom';

// Import MUI Components
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import usePersonDetail from '../hooks/usePersonDetail';
import PersonImage from '../components/core/PersonImage';
import { warnAdultWithBadge } from '../shared/service';
import { Typography } from '@mui/material';

interface RowWrapperProps {
  children?: React.ReactNode
}

const RowWrapper: React.FC<RowWrapperProps> = ({ children, ...rest }) => {
  return <Box
    display='flex'
    justifyContent='space-around'
    alignItems='center'
    {...rest}
  >
    {children}
  </Box>;
};

const ColumnWrapper: React.FC<RowWrapperProps> = ({ children, ...rest }) => {
  return <Box
    display='flex'
    flexDirection='column'
    justifyContent='space-around'
    alignItems='center'
    {...rest}
  >
    {children}
  </Box>;
};

const PersonDetail: React.FC = () => {

  const params = useParams();
  const personDetail = usePersonDetail(params.personId);
  const {
    profile_path,
    name, gender,
    adult,
    // also_known_as: alsoKnownAs,
    biography
  } = personDetail;

  return <Container sx={{ p: 3 }}>
    <Paper
      role='document'
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid purple'
      }}
      elevation={3}>
      <RowWrapper>
        {warnAdultWithBadge(
          adult,
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
        )}
        <ColumnWrapper>
          <Typography
            color='darkblue'
            component='div'
            variant='h1'>
            {name}
          </Typography>
        </ColumnWrapper>
      </RowWrapper>
      <RowWrapper>
        <Container
          sx={{
            p: 6
          }}
        >
          <Typography
            variant='h6'
            gutterBottom>
            {biography}
          </Typography>
        </Container>
      </RowWrapper>
    </Paper >
  </Container >;
};

export default PersonDetail;