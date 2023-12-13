import React from 'react';

import Container from '@mui/material/Container';
import DisplayPad from '../components/DisplayPad';

interface PersonResultProps {
  children?: React.ReactNode
}

const PersonResult: React.FC<PersonResultProps> = ({ children }) => {
  return <Container>
    <DisplayPad />
    {children}
  </Container>;
};

export default PersonResult;