import React, { useContext } from 'react';

import List from '@mui/material/List';

import { AppContext } from '../../AppContext';
import ListItem from './ListItem';
import NoData from '../NoData';

const DisplayPad: React.FC = () => {

  const { state } = useContext(AppContext);
  const { chosens } = state;

  const handleViewDetail = (personId: number) => {
    // eslint-disable-next-line no-console
    console.log(personId);
  };

  return (
    <>
      {
        chosens.length ?
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
              />)}
          </List >
          : <NoData category='Person' issued='chosen' />
      }
    </>
  );
};

export default DisplayPad;