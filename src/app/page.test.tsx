import React from 'react';
import { render, screen } from '@testing-library/react';

import Page from './page';

describe('<Page />', () => {
  test('renders button', () => {
    render(<Page />);
    const backgroundElement = screen.getByRole("button");
    expect(backgroundElement).toBeInTheDocument();
  });  
});

