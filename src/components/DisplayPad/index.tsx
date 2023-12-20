import React, { useContext } from 'react';

import List from '@mui/material/List';

import ListItem from './ListItem';
import { AppContext } from '../../AppContext';


const DisplayPad: React.FC = () => {

  const { state } = useContext(AppContext);

  // eslint-disable-next-line no-console
  console.log(state.chosens);

  return <List
    sx={{
      width: '100%',
      height: '100%'
    }}
  >
    {state?.chosens.map((person, index) => <ListItem
      key={index}
      personInfo={person}
    />)}
  </List >;
};

export default DisplayPad;