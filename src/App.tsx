import React from 'react';

interface Props {
  name?: string;
}
const App: React.FunctionComponent<Props> = ({ name }) => <h1>The {name}</h1>;
App.defaultProps = {
  name: 'Grid',
};
export { App };
