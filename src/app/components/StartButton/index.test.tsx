import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {BackgroundContext} from '../Background';
import StartButton from '../StartButton';

test('StartButton snapshot', () => {
  const {container} = render(
    <StartButton />
  );
  expect(container).toMatchSnapshot();
});

test('onClick calls function from BackgroundContext.Provider', () => {
  const mockFn = jest.fn(():void => {});
  render(
    <BackgroundContext.Provider value={{changeBackground: mockFn}}>
      <StartButton />
    </BackgroundContext.Provider>
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockFn).toHaveBeenCalled();
});
