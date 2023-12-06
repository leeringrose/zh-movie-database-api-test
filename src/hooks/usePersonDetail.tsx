import { Dispatch, useEffect } from 'react';
import axios from 'axios';

import { apiServerURL } from '../config';
import { IAction } from '../AppContext';

interface IPersonDetailResult {
  adult: boolean
  biography: string | null
  also_known_as: Array<string>
  birthday: string | null
  deathday: string | null
  gender: number
  homepage: string | null
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string | null
}

const usePersonDetail = (personId: number, dispatch: Dispatch<IAction>) => {

  useEffect(() => {
    if (personId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${apiServerURL}/person/${personId}`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          });
          const result: IPersonDetailResult = response.data;
          // eslint-disable-next-line no-console
          console.log(result);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('An error occurred while fetching persons data: ', error);
        }
      };

      fetchData();
    }
  }, [personId, dispatch]);
};

export default usePersonDetail;