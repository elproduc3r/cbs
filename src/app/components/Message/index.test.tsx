import React from 'react';
import { render } from '@testing-library/react';
import {axe, toHaveNoViolations} from 'jest-axe';
import Message from '.';

expect.extend(toHaveNoViolations);

describe("<Message>", () => {
  test('snapshot', () => {
    const {container} = render(
      <Message />
    );
    expect(container).toMatchSnapshot();
  });  
  test('accessibility', () => {
    const {container} = render(
      <Message />
    );
    expect(container).toHaveNoViolations();
  });  
});
