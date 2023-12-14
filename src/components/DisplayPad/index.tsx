import React, { useContext, useEffect, useState } from 'react';

import List from '@mui/material/List';
// import Pagination from '@mui/material/Pagination';

import { AppContext } from '../../AppContext';
// import ListItem from './ListItem';
import useRatedPersons from '../../hooks/useRatedPersons';
import { IPerson } from '../../shared/types';
import { ISearchResult } from '../../hooks/usePersons';

interface DisplayPadProps {
  isFeedMode?: boolean
}

const DisplayPad: React.FC<DisplayPadProps> = ({ isFeedMode }) => {

  // const { state } = useContext(AppContext);
  // const { chosens } = state;
  const [feedRender, setFeedRender] =
    useState<ISearchResult>({} as ISearchResult);
  // const [renderlist, setRenderList] = useState<IPerson[]>([]);
  const [currentPage] = useState<number>(1);

  const ratedPersonsResult = useRatedPersons(currentPage);
  setFeedRender(ratedPersonsResult);

  // const handlePaginationChange = (_: React.ChangeEvent<unknown>, value: number) => {
  //   setCurrentPage(value);
  // };

  return <List
    sx={{
      width: '100%',
      height: '100%'
    }}
  >
    {/* <>{feedRender ? <>
      {feedRender.results.map((person, index) =>
        <ListItem
          key={index}
          personInfo={person}
        />)}
      <Pagination
        count={feedRender.total_pages}
        showFirstButton
        showLastButton
        page={currentPage}
        onChange={handlePaginationChange}
      /></>
      : <>
        {renderList.length && renderList.map((person, index) =>
          <ListItem
            key={index}
            personInfo={person}
          />)}
      </>
    }
    </> */}
  </List >;
};

export default DisplayPad;