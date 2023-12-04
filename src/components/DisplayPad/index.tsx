import React, { useContext } from 'react';

import List from '@mui/material/List';

import { AppContext } from '../../AppContext';
import ListItem from './ListItem';

const DisplayPad: React.FC = () => {

  const { state } = useContext(AppContext);
  const { chosens } = state;

  const handleViewDetail = (personId: number) => {
    // eslint-disable-next-line no-console
    console.log(personId);
  };

  return (
    <List
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto'
      }}
    >
      {chosens.map((person, index) =>
        <ListItem
          key={index}
          personInfo={person}
          clickListItem={handleViewDetail}
        />
      )}
    </List>
  );
};

export default DisplayPad;