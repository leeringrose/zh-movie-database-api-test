import { useEffect, useState } from 'react';
import axios from 'axios';

import { apiServerURL } from '../config';
import { ISearchResult } from './usePersons';

const usePersons = () => {

  const [result, setResult] = useState<ISearchResult>({} as ISearchResult);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios
          .get(`${apiServerURL}/person/popular`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY
            },
          });
        setResult(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('An error occurred while fetching persons data: ', error);
      }
    };
    fetchData();
  }, []);
  return result;
};

export default usePersons;