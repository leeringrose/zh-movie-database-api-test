import React from 'react';
// Import MUI components
import MuiListItem from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';

interface IListItem {
  name?: string
  index: number
  globalId: number
  photoPath?: string
  clickListItem: (personId: number) => void
}

const ListItem: React.FC<IListItem> =
  ({ name, clickListItem, globalId }) => <MuiListItem
    sx={{
      position: 'relative'
    }}
    onClick={() => clickListItem(globalId)}
  >
    <ListItemText
      sx={{
        position: 'inherit',
        display: 'flex',
        alignItems: 'center',
        height: '10px',
        p: 1
      }}>
      <Typography component='div' variant='subtitle1'>{name}</Typography>
    </ListItemText >
  </MuiListItem >;

export default ListItem;