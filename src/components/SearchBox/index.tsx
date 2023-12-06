import React, { useState, useContext } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { AppContext } from '../../AppContext';
import usePersons from '../../hooks/usePersons';
import ListItem from './ListItem';
import { Box } from '@mui/material';

const SearchBox: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  const { state, dispatch } = useContext(AppContext);
  const { persons } = state;

  // Use the usePersons hook to fetch persons data
  usePersons(searchText, dispatch);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
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
    <Box
      display='flex'
      flexDirection='column'
    >
      <Autocomplete
        options={persons.map((person, index) => ({
          id: index, person
        }))}
        limitTags={5}
        renderOption={(_, option) => <ListItem
          key={option.id}
          index={option.id}
          globalId={option.person.id}
          name={option.person.name}
          photoPath={option.person.profile_path}
          clickListItem={handleListItemClick}
        />}
        getOptionLabel={(option) => option.person.name}
        renderInput={(params) => <TextField
          {...params}
          sx={{
            width: 300,
            cursor: 'pointer'
          }}
          value={searchText}
          label={'Enter Person\'s Name...'}
          onChange={handleSearchChange}
          size='small'
        />}
      />
    </Box>
  );
};

export default SearchBox;