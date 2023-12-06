import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate, useLocation } from 'react-router-dom';

// Import Mui Components
import MuiListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import {
  GenderIdentities,
  DepartmentColorMap,
  warnAdultWithBadge,
} from '../../shared/service';
import { apiServerURL, imageServerURL } from '../../config';
import { IPerson } from '../../shared/types';
import { Chip } from '@mui/material';

interface IListItem {
  personInfo: IPerson;
}

const ListItem: React.FC<IListItem> = ({ personInfo }) => {

  const { name,
    id,
    gender,
    original_name,
    known_for_department,
    adult,
    popularity } = personInfo;
  const [avatarPath, setAvatarPath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();


  // eslint-disable-next-line no-console
  console.log(location);

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

  const handleClickItem = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <MuiListItem
      alignItems='center'
      sx={{
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {isLoading ?
        <CircularProgress size={35} />
        :
        <Card
          sx={{
            ':hover': {
              backgroundColor: 'rgb(0, 0, 0, 0.1)'
            },
            width: '80%',
            height: '100%',
            display: 'flex',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
          onClick={() => handleClickItem(id)}
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
            display='flex'
            flexGrow={1}
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
              {warnAdultWithBadge(adult, <Chip
                color={DepartmentColorMap[`${known_for_department}`]}
                label={known_for_department} />)}
              <Typography variant='subtitle1' color='blue' component='div'>
                {`${GenderIdentities[gender]}`}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Box
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='space-around'
                p={2}
              >
                <Typography component='div' variant='h6'>
                  Popularity:
                </Typography>
                <Typography component='div' variant='subtitle1'>
                  {popularity}
                </Typography>
              </Box>

            </CardContent>
          </Box>
        </Card >
      }
    </MuiListItem >
  );
};

export default ListItem;
