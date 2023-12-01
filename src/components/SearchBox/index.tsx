import React, { useState, useContext } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { AppContext } from '../../AppContext';
import usePersons from '../../hooks/usePersons';
import ListItem from './ListItem';

const SearchBox: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  const { state, dispatch } = useContext(AppContext);
  const { persons } = state;

  // Use the usePersons hook to fetch persons data
  usePersons(searchText, dispatch);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    // eslint-disable-next-line no-console
    console.log(persons);
  };

  return (
    <div>
      <Autocomplete
        options={persons.map((person, index) => ({
          id: index, title: person.name
        }))}
        renderOption={(_, option) => <ListItem
          key={option.id}
          index={option.id}
          title={option.title}
        />}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField
          {...params}
          value={searchText}
          label={'Enter Actor\'s name=...'}
          onChange={handleSearchChange}
        />}
      />
    </div>
  );
};

export default SearchBox;