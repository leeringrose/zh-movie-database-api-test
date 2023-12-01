import React from 'react';

import usePersons from '../../hooks/usePersons';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ListItem from './ListItem';

interface SearchBoxProps {
  searchText: string
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchText }) => {

  const { persons } = usePersons(searchText);

  return (
    <div>
      <Autocomplete
        disablePortal
        options={persons.map((person, index) => ({
          id: index, title: person.name
        }))}
        renderOption={(_, option) => <ListItem
          title={option.title}
          key={option.id} />}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Movie' />}
      />
    </div>
  );
};

export default SearchBox;