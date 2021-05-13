import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import THEME from './settings/Theme';
import StocksPage from './components/pages/StocksPage';
import { DEFAULT_MARKET } from './models/Markets';

const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Switch>
          <Route path="/:market">
            <StocksPage />
          </Route>
          <Route path="/" exact>
            <Redirect to={`/${DEFAULT_MARKET}`} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export { App };
