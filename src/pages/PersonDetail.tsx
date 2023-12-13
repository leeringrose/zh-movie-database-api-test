import React from 'react';
import { useParams } from 'react-router-dom';

// Import MUI Components
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

import usePersonDetail from '../hooks/usePersonDetail';
import PersonImage from '../components/core/PersonImage';
import { warnAdultWithBadge, GenderIdentities } from '../shared/service';
import { Typography } from '@mui/material';

interface WrapperProps {
  children?: React.ReactNode
  sx?: SxProps
}

const RowWrapper: React.FC<WrapperProps> = ({ children, ...rest }) => {
  return <Box
    display='flex'
    justifyContent='space-around'
    alignItems='center'
    flex={1}
    {...rest}
  >
    {children}
  </Box>;
};

const ColumnWrapper: React.FC<WrapperProps> = ({ children, ...rest }) => {
  return <Box
    display='flex'
    flexDirection='column'
    justifyContent='space-around'
    alignItems='center'
    flex={1}
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
    also_known_as: alsoKnownAs,
    biography,
    birthday,
    deathday
  } = personDetail;

  return <Container sx={{ p: 3 }}>
    <Paper
      role='document'
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid purple'
      }}
      elevation={3}>
      <RowWrapper>
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
        <ColumnWrapper
          sx={{
            height: '100%'
          }}
        >
          {warnAdultWithBadge(
            adult,
            <Typography
              color='darkblue'
              component='div'
              variant='h2'>
              {name}
            </Typography>
          )}
          <Typography
            color='GrayText'
            component='div'
            variant='h6'>
            {`( ${birthday ? birthday : '?'} ~ ${deathday ? deathday : '?'} )`}
          </Typography>
        </ColumnWrapper>
      </RowWrapper>
      {biography && <RowWrapper
        sx={{
          py: 6,
          justifyContent: 'flex-start'
        }}
      >
        <Typography
          variant='subtitle1'>
          {biography}
        </Typography>
      </RowWrapper>}
      {alsoKnownAs && <RowWrapper
        sx={{
          py: 2,
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}
      >
        <Typography
          variant='h5'
          color='Highlight'
        >
          Also known as:
        </Typography>
        <Typography
          variant='h6'
          color='InfoText'
          px={2}
        >
          {alsoKnownAs.join(', ')}
        </Typography>
      </RowWrapper>}
      <RowWrapper
        sx={{
          py: 2,
          justifyContent: 'flex-start',
        }}
      >
        <Typography
          variant='h5'
          color='Highlight'
        >
          Gender:
        </Typography>
        <Typography
          px={2}
          variant='h5'
          color='InfoText'>
          {gender ? GenderIdentities[gender] : 'Unknown'}
        </Typography>
      </RowWrapper>
    </Paper >
  </Container >;
};

export default PersonDetail;