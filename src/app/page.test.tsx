import React from 'react';
import { render, screen } from '@testing-library/react';

import Page from './page';

describe('<Page />', () => {
  test('renders button', () => {
    render(<Page />);
    const button = screen.getByRole("button");
    const message = screen.getByText(/watch live/i);
    const message2 = screen.getByText(/cbs sports/i);
    expect(message).toBeInTheDocument();
    expect(message2).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });  
});
