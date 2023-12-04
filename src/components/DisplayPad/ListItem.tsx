import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Mui Components
import MuiListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { GenderIdentities, DepartmentColorMap } from '../../shared/service';
import { apiServerURL, imageServerURL } from '../../config';
import { IPerson } from '../../shared/types';
import { Chip } from '@mui/material';

const warnAdult: (isAdult: boolean, children: ReactNode) => ReactNode =
  (isAdult, children) => {
    if (isAdult) {
      return <Badge
        color='error'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant='dot'
      >{children}</Badge>
        ;
    } else {
      return <>{children}</>;
    }
  };

interface IListItem {
  personInfo: IPerson;
  clickListItem: (personId: number) => void;
}

const ListItem: React.FC<IListItem> = ({ personInfo, clickListItem }) => {

  const { name, id, gender, original_name, known_for_department, adult } = personInfo;
  const [avatarPath, setAvatarPath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${apiServerURL}/person/${id}/images`, {
          params: { api_key: process.env.REACT_APP_API_KEY },
        });

        if (response.data?.profiles) {
          setAvatarPath(response.data.profiles[0].file_path);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('An error occurred while getting images: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAvatars();
  }, [id]);

  return (
    <MuiListItem
      alignItems='center'
      sx={{
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={() => clickListItem(id)}>
      {isLoading ?
        <CircularProgress size={35} />
        :
        <Card
          sx={{
            width: '80%',
            height: '100%',
            display: 'flex',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          <CardContent
            sx={{
              height: '100%',
              minWidth: 200,
              width: 200
            }}>
            <LazyLoadImage
              style={{
                borderRadius: 10
              }}
              width='100%'
              height='100%'
              alt={`${name}'s Avatar`}
              src={avatarPath ? `${imageServerURL}/${avatarPath}`
                : `/assets/Avatar/${gender === 1 ? 'female.png' : 'male.png'}`}
              placeholderSrc={
                `/assets/Avatar/${gender === 1 ? 'female.png' : 'male.png'}`
              }
              effect='blur'
            />
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                height: '100%',
                width: 'fit-content',
                minWidth: 'fit-content',
              }}>
              <Typography component='div' variant='h6'>
                {`${name}`}
              </Typography>
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                {`${original_name}`}
              </Typography>
              <Divider sx={{ width: '100%' }} />
              {warnAdult(adult, <Chip
                color={DepartmentColorMap[`${known_for_department}`]}
                label={known_for_department} />)}
              <Typography variant='subtitle1' color='blue' component='div'>
                {`${GenderIdentities[gender]}`}
              </Typography>
            </CardContent>
            <CardContent>
            </CardContent>
          </Box>
        </Card >
      }
    </MuiListItem >
  );
};

export default ListItem;
