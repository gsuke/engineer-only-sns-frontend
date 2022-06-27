import { apiUrl } from './const';

// TODO: 404でエラーになるので、その対応をする
const fetcher = async (endpoint: string) => {
  const response = await fetch(`${apiUrl}${endpoint}`);
  if (response.status === 404) {
    return {};
  }
  return response.json();
};

export default fetcher;
