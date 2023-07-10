import React from 'react';
import { render, screen } from '@testing-library/react';
import Background, {BackgroundContext} from '.';

describe("<Background>", () => {
  test('snapshot', () => {
    const {container} = render(
      <Background>
        <div>child text</div>
      </Background>
    );
    expect(container).toMatchSnapshot();
  });
  test('renders children', () => {
    const childText = "child component";
    render(
      <Background>
        <div>{childText}</div>
      </Background>
    );
    const textElement = screen.getByText(childText);
    expect(textElement).toBeInTheDocument();
  });
  test('has a gradient style', () => {
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
  describe("<BackgroundContext.Provider>", () => {
    test('function is defined', () => {
      const mockFn = jest.fn(() => {});
      render(
        <BackgroundContext.Provider value={{changeBackground: mockFn}}>
          <button>Click Me</button>
        </BackgroundContext.Provider>
      );
      expect(mockFn).toBeDefined();
    });
  });
});
