import {useQuery, UseQueryOptions} from 'react-query';
import {getReactQueryCacheTtl, getTtlRespectingDayChange} from '../api/utils';
import {SearchResponse} from '../api/types';
import axiosInstance from '../api/axios';

const FIVE_MINUTES_MS = 1000 * 60 * 5;

enum ENDPOINTS {
  SEARCH = 'search/shows?q=',
}

const fetchSeries = async (
  searchString?: string,
): Promise<SearchResponse[] | undefined> => {
  if (!searchString) {
    return undefined;
  }

  const response = await axiosInstance.get(
    `${ENDPOINTS.SEARCH}${searchString}`,
  );
  return response.data;
};

export const useSeriesSearchQuery = (
  searchString?: string,
  options?: Omit<
    UseQueryOptions<SearchResponse[] | undefined, Error>,
    'queryKey' | 'queryFn'
  >,
) =>
  useQuery<SearchResponse[] | undefined, Error>({
    queryKey: [ENDPOINTS.SEARCH, searchString],
    queryFn: () => fetchSeries(searchString),
    ...getReactQueryCacheTtl(getTtlRespectingDayChange(FIVE_MINUTES_MS)),
    ...options,
  });
