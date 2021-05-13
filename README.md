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

## Demo

[http://stocks.yifanai.com.s3-website-ap-southeast-2.amazonaws.com](http://stocks.yifanai.com.s3-website-ap-southeast-2.amazonaws.com)

## Get Started

### Development
install dependencies
```shell
yarn install
```

run the development server
```shell
yarn start
```

## Testing
run unit testing and snapshot testing
```shell
yarn test
```

run end-to-end testing
```shell
yarn e2e
```

## My thoughts

From my initial exploration on Simply Wall St's website, I found that
* styled components is used for styles
* Bootstrap is used for UI
* server side rendering is used
* Cypress is used for e2e testing
* PHP is used for the API

I develop locally instead of on codesandbox.

I choose to implement pages for pagination as a SEO consideration.
If this is a native app task, I will opt with infinite scrolling for better UX.

### Primary criteria:

* Component grouping (How you organise your components into logical groups)
  * I separate icons components and pages components from other components by placing them into their respective directories.
  * I group components to make them small and manageable to avoid version control conflicts and increase re-usability.
  * I place careful consideration on which component should own the state.
  * I extract business logic and place them into custom hooks to decouple components from business logic.
  * I adhere to single responsibility of components.

* Styling architecture (How you implement your styles)
  * From my initial exploration on Simply Wall St's website, I found that styled components is used for styles.
  * I use styled components for styling.
  * I use theme to apply a consistent tone to the website.
  * I use mixin to abstract reusable logic and to simplify the code.
  * I improve some styles for performance.
  * I make the page fully responsive.
  * I also used styles from normalize.css for reset some legacy styles and for browser compatibility purposes.
  * I thought about the use of libraries (bootstrap, material-ui). Since this task is only one page, so I decide not to use them, since I will need to customize them. Building the simple components not only to demonstrate my skills, but also reduce the final bundle size. If I am to build a website with multiple pages and many more components, using library will increase the productivity of the team. For a large website, self-made components will also get larger in the final bundle and they take more time to maintain.

* Rendering performance (Check for performance bottlenecks)
  * I streamline the DOM to speed up rendering.
  * From my initial exploration on Simply Wall St's website, I found that Bootstrap is customized to be used the UI. I choose not to use Bootstrap because I want to reduce the final bundling size. (I know that during the build time, there are ways to only bundle the styles and components in use.)
  * I write code that is succinct and elegantly get the thing done.
  * I do not forget to add ```key``` prop where necessary to not affect rendering performance. I use unique ID instead of index (from the map) wherever possible.
  * I try to reduce the number of dependencies to minimise the final bundle size, since this is a small task.
  * I carefully consider the use of React APIs.
  * I consider the use of lazy loading, however, since the website uses server side rendering, I will use server side rendering like Next.js to speed up the rendering by pre-rendering.

  General performance (other than rendering performance):
  * I use Lighthouse for performance debugging.
  * I set the page to preconnect to the domain of the API to reduce the time in DNS lookup.
  * I think differential loading can be used to improve performance for production.
  * I think server side rendering, CDN settings can be used to improve performance.

* Avoid overengineering (Simple and straightforward)
  * I go with solution that avoids overengineering, simple and straightforward.
  * I do not overthink.
  * I thought about Redux, the context API and useReducer for state management. I found that the business logic lies within my ```useStocks``` hook. However, after my careful analysis on the page on the Simply Wall St's website, I found both the market dropdown, and the pagination use anchor (```<a>``` tag) to a new URL for updating the data. So I choose not to use Redux, Context API and useReducer.
  * I write clean code to make a page that satisfy the requirements and resembles `https://simplywall.st/stocks/`.

### Bonus criteria:
* Data structures (How you store internal state)
  * I place careful consideration on which component should own the state.
  * I use the most suitable data type for storing each internal state.
  * I try my best not to directly mutate internal state.
  * I thought about redux and useReducer for state management. I found that the complex logic lies within my ```useStock``` hook. However, after my careful analysis on the page on the website, I found both the market dropdown, and the pagination use anchor to a new URL to update the data. So I choose not to use redux and useReducer.

* Testing practices (https://codesandbox.io/docs/tests)
  * I set up unit testing, snapshot testing and end-to-end testing.
  * I wrote simple tests for each of unit testing, snapshot testing and end-to-end testing.
  * I use jest for unit testing and snapshot testing.
  * From my initial exploration on Simply Wall St's website, I found that Cypress is used for end-to-end testing.
  * I use Cypress for end-to-end testing.

### Others:
  * I use TypeScript to provide types for JavaScript to catch errors and fix them before runtime.
  * I use functional components to make the code cleaner and easier to read.
  * I build my work and put it live at [http://stocks.yifanai.com.s3-website-ap-southeast-2.amazonaws.com](http://stocks.yifanai.com.s3-website-ap-southeast-2.amazonaws.com).
  * I use cypress-webpack-preprocessor-v5 5.0.0-alpha.1 since there is a known issue with Cypress with webpack 5. This package is recommended by the Cypress team on their github issues page. This package only has this version available.

