import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Background, {BackgroundContext} from '.';
import StartButton from '../StartButton';

test('Background snapshot', () => {
  const {container} = render(
    <Background>
      <div>child text</div>
    </Background>
  );
  expect(container).toMatchSnapshot();
});

test('Background renders children', () => {
  const childText = "child component";
  render(
    <Background>
      <div>{childText}</div>
    </Background>
  );
  const textElement = screen.getByText(childText);
  expect(textElement).toBeInTheDocument();
});

test('Background has a gradient style', () => {
  const childText = "child component";
  render(
    <Background>
      {childText}
    </Background>
  );
  const container = screen.getByText(childText);
  expect(container).toHaveStyle('height: 100vh');
  expect(container).toHaveStyle('background-image: linear gradient');
  expect(container).toHaveStyle('overflow: auto');
});

test('BackgroundContext.Provider function gets called', () => {
  const mockFn = jest.fn(() => {});
  render(
    <BackgroundContext.Provider value={{changeBackground: mockFn}}>
      <button>Click Me</button>
    </BackgroundContext.Provider>
  );
  expect(mockFn).toBeDefined();
});
