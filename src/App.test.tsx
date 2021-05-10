import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './App';

const { describe, it } = global;

describe('App', () => {
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
