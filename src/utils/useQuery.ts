/* this hook is inspired by https://reactrouter.com/web/example/query-parameters */

import { useLocation } from 'react-router-dom';

// simplified URLSearchParams
export interface URLSearchParams {
  get(name: string): string | null;
}

const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};

export default useQuery;
