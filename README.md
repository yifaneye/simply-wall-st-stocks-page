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

## Get Started

### Development
```shell
yarn install
yarn start
```

## Testing
```shell
yarn test
```

## My thoughts

From my initial exploration on Simply Wall St's website, I found that
 - styled components is used for styles
 - server side rendering is used
 - cypress is used for e2e testing
 - PHP is used for the API

I develop locally instead of on codesandbox. I run Chrome browser without CORS.

I choose to implement pages for pagination as a SEO consideration.
If this was a native app task, I will opt with infinite scrolling for better UX.

* Component grouping (How you organise your components into logical groups)
  - I separate icons components and pages components from other components by placing them into their respective directories.
  - I group components to make them small and manageable to avoid version control conflicts and increase re-usability.
  - I place careful consideration on which component should own the state.
  - I extract business logic and place them into custom hooks to decouple components and business logic.

* Styling architecture (How you implement your styles)
  - From my initial exploration on Simply Wall St's website, I found that styled components is used for styles.
  - I used styled components for styling.
  - I use theme to apply a consistent tone to the website.
  - I use mixin to abstract reusable logic and to simplify the code.
  - I also used normalize.css for reset some legacy styles and for browser compatibility purposes.

* Rendering performance (Check for performance bottlenecks)
  - I try to reduce the number of dependencies to minimise the final bundle size, since this is a small task.
  - I write code that is succinct and elegantly get the thing done.
  - I streamline the DOM and improve some styles for performance.
  - I add key prop to not affect performance.
  - I will use Lighthouse for performance debugging.

  General performance (other than rendering performance):
  - I set the page to preconnect to the API to reduce the time in DNS lookup.
  - I recently looked into differential loading for production.

* Avoid overengineering (Simple and straightforward)
  - Since there is no formal design for this task, so I go with solution that avoids overengineering, simple and straightforward.

* Data structures (How you store internal state)
  - I place careful consideration on which component should own the state.

* Testing practices (https://codesandbox.io/docs/tests)
  - I use jest for unit testing and snapshot testing.
  - From my initial exploration on Simply Wall St's website, I found that cypress is used for e2e testing.
  - I will try to use cypress.
