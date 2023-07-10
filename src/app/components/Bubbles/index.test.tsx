import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from '../Counter';
import Bubble from './Bubble';
import { CBS_KEY } from '../../utils/pageVisits';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

interface StoreType {
  [index: string]: string;
};

var localStorageMock = (function() {
  var store: StoreType = {};
  return {
    getItem: function(key: string) {
      return store[key];
    },
    setItem: function(key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key: string) {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('<Background>', () => {
  test('renders bubbles', () => {
    localStorage.clear();
    render(
      <Counter>
        <Bubble />
      </Counter>
    );
    const bubbles = screen.getAllByRole('presentation');
    expect(bubbles.length).toEqual(1);
  });
  test('accessibility', async () => {
    const {container} = render(
      <Bubble />
    );
    expect(await axe(container!)).toHaveNoViolations();
  });
});
