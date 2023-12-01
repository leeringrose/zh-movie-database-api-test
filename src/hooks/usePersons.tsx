import { useEffect, useState } from 'react';
import axios from 'axios';

import { apiServerURL } from '../config';
import { IPerson } from '../shared/types';

interface ISearchResult {
  page: number
  results: Array<IPerson>
  total_pages: number
  total_results: number
}

const usePersons = (searchName: string, pageNumber?: number) => {
  const [persons, setPersons] = useState<Array<IPerson>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPersons = async () => {
      try {
        setLoading(true);
        const response = await axios
          .get(`${apiServerURL}/search/person`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
              query: searchName,
              page: pageNumber || 1
            }
          });
        const result: ISearchResult = response.data;
        setLoading(false);
        setPersons(result.results);
        setPage(result.page);
        setTotalPages(result.total_pages);
      } catch (error) {
        setLoading(true);
        // eslint-disable-next-line no-console
        console.log('An error while requesting persons search: %s', error);
      }
    };
    getPersons();
  }, [searchName]);

  return { persons, page, totalPages, loading };

};

export default usePersons;