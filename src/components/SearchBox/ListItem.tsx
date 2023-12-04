import React from 'react';

import MuiListItem from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface IListItem {
  title?: string
  index: number
  globalId: number
  clickListItem: (personId: number) => void
}

const ListItem: React.FC<IListItem> =
  ({ index, title, clickListItem, globalId }) => <MuiListItem
    sx={{
      backgroundColor: index % 2 === 1 ? '#f5ca16' : '#fcd844'
    }}
    onClick={() => clickListItem(globalId)}
  >
    <ListItemText
      sx={{
        height: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    > {title}</ListItemText >
  </MuiListItem >;

export default ListItem;