import React from 'react';
import { render } from '@testing-library/react';
import Message from '.';

test('Message snapshot', () => {
  const {container} = render(
    <Message />
  );
  expect(container).toMatchSnapshot();
});
