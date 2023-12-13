import { useState, useEffect } from 'react';
import axios from 'axios';

import { apiServerURL } from '../config';
import { IMovieCredit, ITvCredit } from '../shared/types';

interface IPersonDetail {
  adult: boolean
  biography: string | null
  also_known_as: string[]
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

interface IExternalIds {
  id: number
  freebase_mid: string
  freebase_id: string
  imdb_id: string
  tvrage_id: string
  wikidata_id: string
  facebook_id: string
  instagram_id: string
  tiktok_id: string
  twitter_id: string
  youtube_id: string
}

interface IImage {
  aspect_ratio: number
  height: number
  iso_639_1: number
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

const usePersonDetail = (personId: string | undefined) => {
  const [personDetail, setPersonDetail] = useState<IPersonDetail>({} as IPersonDetail);
  const [externalIds, setExternalIds] = useState<IExternalIds>({} as IExternalIds);
  const [images, setImages] = useState<IImage[]>([]);
  const [movieCredits, setMovieCredits] = useState<IMovieCredit[]>([]);
  const [tvCredits, setTvCredits] = useState<ITvCredit[]>([]);

  useEffect(() => {
    if (personId) {
      const fetchData = async () => {
        try {
          const { data: detail } = await axios
            .get(`${apiServerURL}/person/${personId}`, {
              params: {
                api_key: process.env.REACT_APP_API_KEY,
              },
            });
          setPersonDetail(detail);
          const { data: externalIds } = await axios
            .get(`${apiServerURL}/person/${personId}/external_ids`, {
              params: {
                api_key: process.env.REACT_APP_API_KEY,
              },
            });
          setExternalIds(externalIds);
          const { data: imageData } = await axios
            .get(`${apiServerURL}/person/${personId}/images`, {
              params: {
                api_key: process.env.REACT_APP_API_KEY,
              },
            });
          setImages(imageData.profiles);
          const { data: movieCreditsData } = await axios
            .get(`${apiServerURL}/person/${personId}/movie_credits`, {
              params: {
                api_key: process.env.REACT_APP_API_KEY,
              },
            });
          // eslint-disable-next-line no-console
          console.log(movieCreditsData);
          setMovieCredits(movieCreditsData.cast);
          const { data: tvCreditsData } = await axios
            .get(`${apiServerURL}/person/${personId}/tv_credits`, {
              params: {
                api_key: process.env.REACT_APP_API_KEY,
              },
            });
          // eslint-disable-next-line no-console
          console.log(tvCreditsData);
          setTvCredits(tvCreditsData.cast);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('An error occurred while fetching person data: ', error);
        }
      };
      fetchData();
    }
  }, [personId]);

  return {
    personDetail,
    externalIds,
    images,
    movieCredits,
    tvCredits
  };
};

export default usePersonDetail;