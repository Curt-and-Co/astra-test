import {UseInfiniteQueryOptions, useInfiniteQuery} from 'react-query';
import {queryClient} from '../api';
import {getReactQueryCacheTtl, getTtlRespectingDayChange} from '../api/utils';
import {Show} from '../api/types';
import axiosInstance from '../api/axios';

const FIVE_MINUTES_MS = 1000 * 60 * 5;

enum ENDPOINTS {
  SHOWS = 'shows',
}

const fetchShowsByPage = async (page: number): Promise<Show[]> => {
  const response = await axiosInstance.get(`${ENDPOINTS.SHOWS}?page=${page}`);
  return response.data as Show[];
};

export const useSeriesPageQuery = (
  options?: Omit<
    UseInfiniteQueryOptions<Show[], unknown>,
    'queryKey' | 'queryFn' | 'getNextPageParam'
  >,
) =>
  useInfiniteQuery<Show[]>({
    queryKey: [ENDPOINTS.SHOWS],
    queryFn: ({pageParam = 1}) => fetchShowsByPage(pageParam),
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    ...getReactQueryCacheTtl(getTtlRespectingDayChange(FIVE_MINUTES_MS)),
    ...options,
  });

export const invalidateSeriesPageQuery = async () => {
  await queryClient.invalidateQueries([ENDPOINTS.SHOWS]);
};
