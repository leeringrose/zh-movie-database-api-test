import { useState } from 'react';

import axios from 'axios';

import { apiServerURL } from '../config';

interface IKnowFor {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: Array<number>
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface IPerson {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  known_for: Array<IKnowFor>
}

interface ISearchResult {
  page: number
  results: Array<IPerson>
  total_pages: number
  total_results: number
}

const usePersons = async (searchName: string, pageNumber?: number) => {
  const [persons, setPersons] = useState<Array<IPerson>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  try {
    const result: ISearchResult = await axios
      .get(`${apiServerURL}/search/person`, {
        params: {
          api_key: process.env.API_KEY,
          query: searchName,
          page: pageNumber || 1
        }
      });
    // eslint-disable-next-line no-console
    console.log(result);
    // eslint-disable-next-line no-debugger
    debugger;
    setPersons(result.results);
    setPage(result.page);
    setTotalPages(result.total_pages);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('An error while requesting persons search: %s', error);
  }
  return { persons, page, totalPages };
};

export default usePersons;