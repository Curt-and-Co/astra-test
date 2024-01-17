import {
  QueryClient,
  QueryClientProvider,
  QueryFunction,
  QueryKey,
} from 'react-query';
import axiosInstance from './axios';

const defaultQueryFn: QueryFunction = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}) => {
  if (typeof queryKey[0] !== 'string') {
    throw new Error(
      `Query key must be a string, received ${typeof queryKey[0]}`,
    );
  }

  const params = queryKey[1] ? queryKey[1] : {};

  const response = await axiosInstance.get(queryKey[0], {params});
  return response.data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      queryFn: defaultQueryFn,
    },
    mutations: {},
  },
});

export {QueryClientProvider, queryClient};
