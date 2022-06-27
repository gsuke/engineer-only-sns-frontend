import { apiUrl } from './const';

// TODO: 404でエラーになるので、その対応をする
const fetcher = (endpoint: string) =>
  fetch(`${apiUrl}${endpoint}`).then((response) => response.json());

export default fetcher;
