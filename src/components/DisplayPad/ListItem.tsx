import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MuiListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { apiServerURL, imageServerURL } from '../../config';
import { Divider, Typography } from '@mui/material';
import { IPerson } from '../../shared/types';

interface IListItem {
  personInfo: IPerson;
  clickListItem: (personId: number) => void;
}

const GenderIdentities = ['Unknown', 'Female', 'Male'];

const ListItem: React.FC<IListItem> = ({ personInfo, clickListItem }) => {

  const { name, id, gender, original_name, known_for_department, known_for } = personInfo;

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
          <CardMedia
            sx={{
              width: '200px'
            }}
            component='img'
            alt={`${name}'s Avatar`}
            image={avatarPath ? `${imageServerURL}/${avatarPath}`
              : `/assets/Avatar/${gender === 1 ? 'male.png' : 'female.png'}`} />
          <Box
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardContent
              sx={{
                display: 'flex'
              }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component='div' variant='h5'>
                  {`${name}`}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' component='div'>
                  {`${original_name}`}
                </Typography>
                <Divider
                  sx={{
                    my: 2
                  }} />
                <Typography variant='subtitle1'
                  gutterBottom
                  color='error'
                  component='div'>
                  {`${known_for_department}`}
                </Typography>
                <Typography variant='subtitle1' color='blue' component='div'>
                  {`${GenderIdentities[gender]}`}
                </Typography>
              </CardContent>
              <CardContent sx={{ flex: '2 1 auto' }}>
                <Typography component='div' variant='h5'>
                  {`${known_for.map(known => known.title)}`}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' component='div'>
                  Mac Miller
                </Typography>
              </CardContent>
            </CardContent>
          </Box>
        </Card >
      }
    </MuiListItem>
  );
};

export default ListItem;
