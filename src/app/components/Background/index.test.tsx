import React from 'react';
import { render, screen } from '@testing-library/react';
import Background, {BackgroundContext} from '.';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('<Background>', () => {
  test('snapshot', () => {
    const {container} = render(
      <Background>
        <div>child text</div>
      </Background>
    );
    expect(container).toMatchSnapshot();
  });
  test('renders children', () => {
    const childText = 'child component';
    render(
      <Background>
        <div>{childText}</div>
      </Background>
    );
    const textElement = screen.getByText(childText);
    expect(textElement).toBeInTheDocument();
  });
  test('accessibility', async () => {
    const {container} = render(
      <Background>
       child text
      </Background>
    );
    expect(await axe(container!)).toHaveNoViolations();
  });
  describe('<BackgroundContext.Provider>', () => {
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
