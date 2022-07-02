import { apiUrl } from './const';

const fetcher = async (endpoint: string) => {
  const response = await fetch(`${apiUrl}${endpoint}`);
  if (response.status === 404) {
    return {};
  }
  return response.json();
};

export default fetcher;
