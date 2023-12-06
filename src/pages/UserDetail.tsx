import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';

const UserDetail: React.FC = () => {

  const params = useParams();

  return <Container>
    {params.personId}
  </Container>;
};

export default UserDetail;