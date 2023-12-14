import React, { useContext, useEffect, useState } from 'react';

import List from '@mui/material/List';

import { AppContext } from '../../AppContext';
import ListItem from './ListItem';
import NoData from '../NoData';
import { ISearchResult } from '../../hooks/usePersons';
import { IPerson } from '../../shared/types';

interface DisplayPadProps {
  listInfo?: ISearchResult
}

const DisplayPad: React.FC<DisplayPadProps> = ({ listInfo }) => {

  const { state } = useContext(AppContext);
  const { chosens } = state;
  const [renderList, setRenderList] = useState<IPerson[]>([]);

  useEffect(() => {
    if (listInfo) {
      setRenderList(listInfo.results);
    } else if (chosens) {
      setRenderList(chosens);
    }
  }, [listInfo, chosens]);

  return (
    <>
      {renderList ?
        <List
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          {renderList.map((person, index) =>
            <ListItem
              key={index}
              personInfo={person}
            />)}
        </List >
        : <NoData category='Person' issued='chosen' />
      }
    </>
  );
};

export default DisplayPad;