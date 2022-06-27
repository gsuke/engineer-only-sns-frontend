import { apiUrl } from './const';

const fetcher = (endpoint: string) =>
  fetch(`${apiUrl}${endpoint}`).then((response) => response.json());

export default fetcher;
