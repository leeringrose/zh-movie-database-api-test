import { Dispatch, useEffect, useState } from 'react';
import axios from 'axios';

import { apiServerURL } from '../config';
import { IAction } from '../AppContext';
import { IPerson } from '../shared/types';

export interface ISearchResult {
  page: number
  results: Array<IPerson>
  total_pages: number
  total_results: number
}

const usePersons: (searchName: string, dispatch: Dispatch<IAction>) => ISearchResult =
  (searchName, dispatch) => {

    const [searchResult, setSearchResult] = useState<ISearchResult>({} as ISearchResult);

    useEffect(() => {
      if (searchName) {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${apiServerURL}/search/person`, {
              params: {
                api_key: process.env.REACT_APP_API_KEY,
                query: searchName,
                page: 1,
                include_adult: true,
                language: 'en-US'
              },
            });
            const result: ISearchResult = response.data;
            dispatch({
              type: 'UPDATE_PERSONS',
              newPersons: result.results,
            });
            setSearchResult(result);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('An error occurred while fetching persons data: ', error);
          }
        };

        fetchData();
      }
    }, [searchName, dispatch]);
    return searchResult;
  };

export default usePersons;