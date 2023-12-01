import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MuiListItem from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';

import { apiServerURL, imageServerURL } from '../../config';

interface IListItem {
  name?: string
  index: number
  globalId: number
  clickListItem: (personId: number) => void
}

const ListItem: React.FC<IListItem> =
  ({ name, clickListItem, globalId }) => {

    const [avatarPath, setAvatarPath] = useState('');

    useEffect(() => {
      const getImages = async () => {
        try {
          const { data } = await axios.get(`${apiServerURL}/person/${globalId}/images`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY
            }
          });
          if (data) setAvatarPath(data.profiles[0].file_path);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('An error while getting images: ', error);
        }
      };
      getImages();
    }, [globalId]);

    return <MuiListItem
      alignItems='center'
      onClick={() => clickListItem(globalId)}
    >
      <ListItemAvatar>
        <Avatar
          alt={`${name}'s Avatar`}
          src={`${imageServerURL}/${avatarPath}`}
        />
      </ListItemAvatar>
      <ListItemText >{name}</ListItemText >
    </MuiListItem >;
  };

export default ListItem;