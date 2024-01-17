import {useQuery, UseQueryOptions} from 'react-query';
import {getReactQueryCacheTtl, getTtlRespectingDayChange} from '../api/utils';
import {Show} from '../api/types';

const FIVE_MINUTES_MS = 1000 * 60 * 5;

enum ENDPOINTS {
  SHOWS = 'shows',
}

export const useSeriesDetailQuery = (
  seriesId?: number,
  options?: Omit<
    UseQueryOptions<Show | undefined, Error>,
    'queryKey' | 'queryFn'
  >,
) =>
  useQuery<Show | undefined, Error>({
    queryKey: [`${ENDPOINTS.SHOWS}/${seriesId}`],
    ...getReactQueryCacheTtl(getTtlRespectingDayChange(FIVE_MINUTES_MS)),
    ...options,
  });
