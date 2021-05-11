import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './App';

describe('The stock page', () => {
  // unit test
  it('is truthy', () => {
    expect(App).toBeTruthy();
  });

  // snapshot test
  it('renders the same as snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
