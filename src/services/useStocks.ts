import axios, { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { STOCKS_URL } from '../environments/endpoints';

export interface Scores {
  value: number;
  income: number;
  health: number;
  past: number;
  future: number;
  total: number;
}

export interface Stock {
  id: number;
  name: string;
  unique_symbol: string;
  score: {
    data: Scores;
  };
}

interface Response {
  data: Stock[];
  meta: any[];
}

interface AxiosStocksResponse extends AxiosResponse {
  data: Response;
}

const useStocks = (): [Stock[], boolean, boolean, object] => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [meta, setMeta] = useState<object>({});

  const fetchStocks = useCallback(async (): Promise<AxiosStocksResponse> => {
    const rules = JSON.stringify([
      ['order_by', 'market_cap', 'desc'],
      ['primary_flag', '=', true],
      ['grid_visible_flag', '=', true],
      ['market_cap', 'is_not_null'],
      ['is_fund', '=', false],
      ['country_name', 'in', ['CA']],
    ]);

    const data = {
      id: '0',
      no_result_if_limit: false,
      offset: 0,
      size: 24,
      state: 'read',
      rules: rules,
    };

    return axios.post(STOCKS_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);

  useEffect(() => {
    fetchStocks()
      .then((response: AxiosStocksResponse) => {
        const { data, meta }: Response = response.data;
        setStocks(data);
        setMeta(meta);
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setStocks([]);
        setHasError(true);
        setIsLoading(false);
      });
    // cannot use .finally() here for browser compatibility

    return () => {};
  }, []);

  return [stocks, isLoading, hasError, meta];
};

export default useStocks;
