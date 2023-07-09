import React from 'react';
import { render, screen } from '@testing-library/react';
import Background from '.';

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
});
