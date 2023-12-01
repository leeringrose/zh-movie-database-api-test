import React, { useContext, lazy, Suspense } from 'react';

import List from '@mui/material/List';

import { AppContext } from '../../AppContext';
const ListItem = lazy(() => import('./ListItem'));
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
        {chosens.map((person, index) => <Suspense
          key={index}
          fallback={'...'}
        >
          <ListItem
            globalId={person.id}
            index={index}
            clickListItem={handleViewDetail}
          />
        </Suspense>)}
      </List>
    </Container>
  );
};

export default DisplayPad;