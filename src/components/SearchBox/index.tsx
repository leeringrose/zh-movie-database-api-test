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

  const handleListItemClick = (globalId: number) => {
    persons.forEach(person => {
      if (person.id === globalId) {
        dispatch({ type: 'ADD_LIST', newPerson: person });
        return;
      }
    });
  };

  return (
    <>
      <Autocomplete
        options={persons.map((person, index) => ({
          id: index, person
        }))}
        renderOption={(_, option) => <ListItem
          key={option.id}
          index={option.id}
          globalId={option.person.id}
          title={option.person.name}
          clickListItem={handleListItemClick}
        />}
        getOptionLabel={(option) => option.person.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField
          {...params}
          value={searchText}
          label={'Enter Actor\'s Name=...'}
          onChange={handleSearchChange}
        />}
      />
    </>
  );
};

export default SearchBox;