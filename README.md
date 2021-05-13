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
[See below for my justifications for primary criteria](#my-justifications-for-primary-criteria)

* Component grouping (How you organise your components into logical groups)
* Styling architecture (How you implement your styles)
* Rendering performance (Check for performance bottlenecks)
* Avoid overengineering (Simple and straightforward)

### Bonus criteria:
[See below for my justifications for bonus criteria](#my-justifications-for-bonus-criteria)

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

[https://stocks.yifanai.com](https://stocks.yifanai.com)

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

# Deployment
build for deployment
```shell
yarn build
```

## My thoughts

### Initial exploration
From my initial exploration on Simply Wall St's website, I found that
* styled-components is used for styles
* server-side rendering is used
* Cypress is used for e2e testing
* PHP is used for the API

### Development
I developed locally on my IDE instead of on CodeSandbox.

### My justifications for primary criteria

* Component grouping (How you organise your components into logical groups)
  * I separated icons components and pages components from other components by placing them into their respective directories.
  * I grouped components to make them small and manageable to avoid version control conflicts and increase re-usability.
  * I placed careful consideration on which component should own the state.
  * I extracted business logic and place them into custom hooks to decouple components from business logic.
  * I adhered to the single responsibility of components.

* Styling architecture (How you implement your styles)
  * From my initial exploration on Simply Wall St's website, I found that styled-components is used for styles. So, I used styled-components for styling.
  * I used a theme to apply a consistent tone to the website.
  * I wrote mixins (my love in Sass) to abstract reusable logic and to simplify the code for styling.
  * I also used styles from normalize.css to reset some legacy styles and for browser compatibility purposes.
  * I thought about the use of libraries (Bootstrap, Material-UI). Since this task is only one page, so I decide not to use them, since I will need to customize them for 1 place of usage. Building the simple components not only demonstrates my skills but also reduces the final bundle size. If I am to build a website with multiple pages and many more components, using a UI library will increase the productivity of the team. For a large website, self-made components will also get larger in the final bundle and they take more time to maintain.

* Rendering performance (Check for performance bottlenecks)
  * I streamlined the DOM to speed up rendering. I write code that is succinct and elegantly get the thing done. I improved some styles for performance.
  * I tried to reduce the number of dependencies to minimise the final bundle size since this is a small task. I chose not to use Bootstrap, Material-UI because I want to reduce the final bundling size. (I know that during the build time, there are ways to only bundle the styles and components in use.)
  * I did not forget to add ```key``` prop where necessary to not affect rendering performance. I use a unique ID instead of an index (from the map) wherever possible.
  * I carefully considered the use of React APIs for rendering performance.
  * I considered the use of lazy loading, however, I found Simply Wall St's website uses server-side rendering. I will use server-side rendering like Next.js to speed up the rendering by pre-rendering.

  General performance (other than rendering performance):
  * I used Lighthouse for performance debugging.
  * I set the page to preconnect to the domain of the API to reduce the time in DNS lookup.
  * I think differential loading can be used to improve performance for production.
  * I think server-side rendering, CDN settings can be used to improve performance.

* Avoid overengineering (Simple and straightforward)
  * I went with solutions that avoid overengineering, simple and straightforward. I did not overthink during my analysis and implementation.
  * I wrote clean code to make a page that satisfies the requirements and resembles `https://simplywall.st/stocks/`.
  * I thought about Redux, React's Context API and useReducer for state management. I found that the business logic lies within my ```useStocks``` hook. However, after my careful analysis on the page on the Simply Wall St's website, I found both the market dropdown and the pagination use anchor (```<a>``` tag) to a new URL and update the data. So I chose not to use Redux, React's Context API and useReducer.

### My justifications for bonus criteria
* Data structures (How you store internal state)
  * I used the most suitable data type for storing each internal state.
  * I placed careful consideration on which component should own the state. I tried my best not to directly mutate the internal state.
  * I thought about redux and useReducer for state management. I found that the complex logic lies within my ```useStock``` hook. However, after my careful analysis of the page on the website, I found both the market dropdown and the pagination use anchor to a new URL to update the data. So I choose not to use redux and useReducer.

* Testing practices (https://codesandbox.io/docs/tests)
  * I set up unit testing, snapshot testing and end-to-end testing. I wrote simple tests for each unit testing, snapshot testing and end-to-end testing.
  * I used jest for unit testing and snapshot testing.
  * From my initial exploration on Simply Wall St's website, I found that Cypress is used for end-to-end testing. So, I used Cypress for end-to-end testing.

### Other highlights
* I chose to implement pages for pagination as an SEO consideration. If this is a native app task, I will opt with infinite scrolling for better UX.
* I used TypeScript throughout to provide types for JavaScript to catch errors and fix them before runtime.
* I used functional components to make the code cleaner and easier to read.
* I used prettier to format my code to adhere to a standard of code style.
* I added different colours to vividly indicate the total score of analysis.
* I made the page fully responsive. It looks consistent and nice even on iPhone 5/5s.
* I built my work and put it live at [https://stocks.yifanai.com](https://stocks.yifanai.com) on AWS using S3, CloudFront and Route53.
* I blocked search indexing with 'noindex' on my deployment, since my page may be considered as duplicate of `https://simplywall.st/stock`. So the search index of `https://simplywall.st/stock` will not be affected by my deployment.

### Notes:
* During my development, the aforementioned "refer to `https://simplywall.st/stock` for supported country list" is not available. So I used document.querySelectorAll() to put together the list of available countries.
* I used cypress-webpack-preprocessor-v5 5.0.0-alpha.1 since there is a known issue with Cypress with webpack 5. This package is recommended by the Cypress team on their GitHub issues page. This package only has this version available at the time for writing.
