import React, { useEffect, useState } from 'react';

import List from '@mui/material/List';
import Pagination from '@mui/material/Pagination';

import ListItem from './ListItem';
import { ISearchResult } from '../../hooks/usePersons';

interface DisplayPadProps {
  renderObject: ISearchResult
  onPaginationChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

const DisplayPad: React.FC<DisplayPadProps> = ({ renderObject, onPaginationChange }) => {

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(renderObject.page);
  }, [renderObject]);

  return <List
    sx={{
      width: '100%',
      height: '100%'
    }}
  >
    {renderObject?.results.map((person, index) => <ListItem
      key={index}
      personInfo={person}
    />)}
    <Pagination
      count={renderObject.total_pages}
      showFirstButton
      showLastButton
      page={currentPage}
      onChange={onPaginationChange}
    />
  </List >;
};

export default DisplayPad;