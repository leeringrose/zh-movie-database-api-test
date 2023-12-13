import React from 'react';

interface PersonResultProps {
  children?: React.ReactNode
}

const PersonResult: React.FC<PersonResultProps> = ({ children }) => {
  return <>
    <h1>Person Result Pad</h1>
    {children}
  </>;
};

export default PersonResult;