import React, { useContext } from 'react';

import List from '@mui/material/List';

import { AppContext } from '../../AppContext';
import ListItem from './ListItem';
import { Container } from '@mui/material';

const DisplayPad: React.FC = () => {

  const { state } = useContext(AppContext);
  const { chosens } = state;

  const handleViewDetail = (personId: number) => {
    // eslint-disable-next-line no-console
    console.log(personId);
  };

  return (
    <Container
      role='feed'
      maxWidth='md'
      fixed
      sx={{
        p: 6
      }}
    >
      <List dense
        sx={{
          width: '100%',
          maxWidth: 600
        }}
      >
        {chosens.map((person, index) =>
          <ListItem
            key={index}
            globalId={person.id}
            name={person.name}
            clickListItem={handleViewDetail}
          />
        )}
      </List>
    </Container >
  );
};

export default DisplayPad;