import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {axe, toHaveNoViolations} from 'jest-axe';
import {BackgroundContext} from '../Background';
import StartButton from '../StartButton';

expect.extend(toHaveNoViolations);

describe("<StartButton>", () => {
  test('snapshot', () => {
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
  test('accessibility', async () => {
    const {container} = render(
      <StartButton />
    );
    expect(await axe(container!)).toHaveNoViolations();
  });  
});
