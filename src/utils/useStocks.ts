import axios, { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { STOCKS_URL } from '../environments/endpoints';
import { DEFAULT_MARKET } from '../models/Markets';
import { DEFAULT_SORTING_STRATEGY } from '../models/SortingStrategies';
import { Stock } from '../models/Stock';
import { URLSearchParams } from './useQuery';
import { PARAMS } from '../settings/Routing';

interface Response {
  data: Stock[];
  meta: any[];
}

const DEFAULT_PAGE_NUMBER = 1;
const PAGE_SIZE = 24;

type PageNumber = number | null;
type PageLink = string | null;

interface AxiosStocksResponse extends AxiosResponse {
  data: Response;
}

const useStocks = (
  marketValue: string = DEFAULT_MARKET,
  sortingValue: string = DEFAULT_SORTING_STRATEGY.value,
  query: URLSearchParams
): [Stock[], boolean, boolean, PageLink, PageLink] => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [page] = useState<PageNumber>(
    Number(query.get(PARAMS.page)) || DEFAULT_PAGE_NUMBER
  );
  const [previousPageLink, setPreviousPageLink] = useState<PageLink>(null);
  const [nextPageLink, setNextPageLink] = useState<PageLink>(null);

  const updatePages = useCallback(
    ({ total_records }): void => {
      const totalPages = Math.ceil(total_records / PAGE_SIZE);
      setPreviousPageLink(page - 1 >= 1 ? `?p=${page - 1}` : null);
      setNextPageLink(page + 1 <= totalPages ? `?p=${page + 1}` : null);
    },
    [page, setPreviousPageLink, setNextPageLink]
  );

  const fetchStocks = useCallback(async (): Promise<AxiosStocksResponse> => {
    const sortingRule = ['order_by', 'market_cap', sortingValue];

    const defaultRules = [
      ['primary_flag', '=', true],
      ['grid_visible_flag', '=', true],
      ['market_cap', 'is_not_null'],
      ['is_fund', '=', false],
    ];

    const marketRule =
      marketValue === 'global'
        ? []
        : [['country_name', 'in', [[marketValue.toUpperCase()]]]];

    const rules = JSON.stringify([sortingRule, ...defaultRules, ...marketRule]);

    const data = {
      id: '0',
      no_result_if_limit: false,
      offset: PAGE_SIZE * (page - 1),
      size: PAGE_SIZE,
      state: 'read',
      rules: rules,
    };

    return await axios.post(STOCKS_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, [page, marketValue, sortingValue]);

  useEffect(() => {
    setIsLoading(true);
    fetchStocks()
      .then((response: AxiosStocksResponse) => {
        const { data, meta }: Response = response.data;
        setStocks(data);
        updatePages(meta);
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
  }, [
    fetchStocks,
    setStocks,
    setIsLoading,
    setHasError,
    updatePages,
    marketValue,
    sortingValue,
  ]);

  return [stocks, isLoading, hasError, previousPageLink, nextPageLink];
};

export default useStocks;
