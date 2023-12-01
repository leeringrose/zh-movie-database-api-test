import React from 'react';

import MuiListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface IListItem {
  title?: string
  index: number
}

const ListItem: React.FC<IListItem> = ({ index, title }) => <MuiListItem
  sx={{
    backgroundColor: index % 2 === 1 ? '#f5ca16' : '#fcd844'
  }}
>
  <ListItemText > {title}</ListItemText >
</MuiListItem >;

export default ListItem;