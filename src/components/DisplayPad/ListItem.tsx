import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MuiListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import { apiServerURL, imageServerURL } from '../../config';
import { Divider } from '@mui/material';

interface IListItem {
  name: string;
  globalId: number;
  clickListItem: (personId: number) => void;
}

const ListItem: React.FC<IListItem> = ({ name, globalId, clickListItem }) => {
  const [avatarPath, setAvatarPath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${apiServerURL}/person/${globalId}/images`, {
          params: { api_key: process.env.REACT_APP_API_KEY },
        });

        if (response.data?.profiles) {
          setAvatarPath(response.data.profiles[0].file_path);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          // eslint-disable-next-line no-console
          console.error('An error occurred while getting images: ', error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchAvatars();
  }, [globalId]);

  return (
    isLoading ? <CircularProgress />
      :
      <>
        <MuiListItem alignItems='flex-start' onClick={() => clickListItem(globalId)}>
          <ListItemAvatar>
            {avatarPath ?
              <Avatar alt={`${name}'s Avatar`} src={`${imageServerURL}/${avatarPath}`} />
              :
              <Avatar>{name.charAt(0)}</Avatar>
            }
          </ListItemAvatar>
          <ListItemText primary={name} secondary='Some secondary text' />
        </MuiListItem>
        <Divider />
      </>
  );
};

export default ListItem;
