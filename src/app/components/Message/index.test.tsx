import React from 'react';
import { render } from '@testing-library/react';
import Message from '.';

describe("<Message>", () => {
  test('snapshot', () => {
    const {container} = render(
      <Message />
    );
    expect(container).toMatchSnapshot();
  });  
});
