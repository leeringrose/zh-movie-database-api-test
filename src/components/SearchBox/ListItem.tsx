import React from 'react';

import MuiListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface IListItem {
  key: number
  title: string
}

const ListItem: React.FC<IListItem> = ({ key, title }) => {

  return <MuiListItem
    sx={{
      backgroundColor: key % 2 === 1 ? '#f5ca16' : '#fcd844'
    }}
  >
    <ListItemText key={key} > {title}</ListItemText >
  </MuiListItem >;
};

export default ListItem;