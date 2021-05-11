export interface SortingStrategy {
  value: string;
  label: string;
}

export const SORTING_STRATEGIES: SortingStrategy[] = [
  {
    value: 'desc',
    label: 'Market Cap High to Low',
  },
  {
    value: 'asc',
    label: 'Market Cap Low to High',
  },
];

export const DEFAULT_SORTING_STRATEGY = SORTING_STRATEGIES[0];
