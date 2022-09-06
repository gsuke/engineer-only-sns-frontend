import useSWRImmutable from 'swr/immutable';
import type { SWRConfiguration } from 'swr';
import fetcher from '../lib/fetcher';
import type User from '../lib/models/User';

export default function useUser(id: string) {
  const config: SWRConfiguration = {
    shouldRetryOnError: false,
  };

  const { data, error } = useSWRImmutable<User, Error>(`/user/${id}`, fetcher, config);

  return {
    user: data,
    error,
    isLoading: !error && !data,
  };
}
