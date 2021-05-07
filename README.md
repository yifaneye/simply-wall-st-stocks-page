# Simply Wall St Technical Exercise

In this exercise we are looking for something that resembles `https://simplywall.st/stocks/`. 

## Requirements:

* Show a list of companies presented in a tile
* Tile that shows the company name (Apple), unique symbol (NasdaqGS:APPL), snowflake score
* Pagination (Pages, Infinite scrolling or Load more)
* Filtering by country (refer to `https://simplywall.st/stock` for supported country list)
* Sorting by market cap (ASC and DESC direction)
* Some form of basic styling (this is a front-end role). Feel free to use libraries (bootstrap, material-ui) as long as it doesn't conflict with the primary criteria.

## The solution will be scored based on the following:

### Primary criteria:

* Component grouping (How you organise your components into logical groups)
* Styling architecture (How you implement your styles)
* Rendering performance (Check for performance bottlenecks)
* Avoid overengineering (Simple and straightforward)

### Bonus criteria:

* Data structures (How you store internal state)
* Testing practices (https://codesandbox.io/docs/tests)

## API Documentation

For data fetching you will be using the following endpoint:

* POST https://api.simplywall.st/api/grid/filter?include=info,score

The grid API requires the following payload

```
{
  id: string;
  no_result_if_limit: boolean;
  offset: number;
  size: number;
  state: 'read'
  rules: string;
}
```

Most relevant properties for this exercise are `offset`, `size` and most importantly `rules`

The `rules` property requires a JSON serializable value.

Here's an example

```
[
  ['order_by', 'market_cap', 'desc'],
  ['primary_flag', '=', true],
  ['grid_visible_flag', '=', true],
  ['market_cap', 'is_not_null'],
  ['is_fund', '=', false],
  ['aor', ['country_name', 'in', ['AU']]]
]
```

If we wanted to fetch 12 of companies in Canada sorted by Market Cap the payload would look like

```
{
  id: '1',
  no_result_if_limit: true,
  offset: 0,
  size: 12,
  state: 'read',
  rules: JSON.stringify(
    [
      ['order_by', 'market_cap', 'desc'],
      ['primary_flag', '=', true],
      ['grid_visible_flag', '=', true],
      ['market_cap', 'is_not_null'],
      ['is_fund', '=', false],
      ['aor', ['country_name', 'in', ['CA']]]
    ]
  )
}
```