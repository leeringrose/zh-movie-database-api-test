import { useState, useEffect } from 'react';
import axios from 'axios';

import { apiServerURL } from '../config';

interface IPersonDetail {
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
  popularity: number
  profile_path: string
}

const usePersonDetail = (personId: string | undefined) => {
  const [personDetail, setPersonDetail] = useState<IPersonDetail>({} as IPersonDetail);

  useEffect(() => {
    if (personId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${apiServerURL}/person/${personId}`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          });
          const result: IPersonDetail = response.data;
          // eslint-disable-next-line no-console
          console.log(result);
          setPersonDetail(result);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('An error occurred while fetching person data: ', error);
        }
      };
      fetchData();
    }
  }, [personId]);

  return personDetail;
};

export default usePersonDetail;