import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowRightRounded from '@mui/icons-material/ArrowCircleRightSharp';

// import DisplayPad from '../components/DisplayPad';
import { replaceLastSubpath } from '../shared/service';
// import useRatedPersons from '../hooks/useRatedPersons';

const PersonFeed: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // const [currentPage, setCurrentPage] = useState(1);

  // const ratedPersonsResult = useRatedPersons(currentPage);

  const handleGoSearch = () => {
    navigate(replaceLastSubpath(location.pathname, '/search'));
  };

  // const handePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setCurrentPage(value);
  // };

  return <Container sx={{ p: 3 }}>
    <Button
      variant='contained'
      onClick={() => handleGoSearch()}
    >
      Go to Search!
      <ArrowRightRounded sx={{ ml: 1 }} />
    </Button>
    {/* <DisplayPad
      renderObject={ratedPersonsResult}
      onPaginationChange={handePaginationChange}
    /> */}
  </Container>;
};

export default PersonFeed;