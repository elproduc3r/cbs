import React from 'react';
import { render, screen } from '@testing-library/react';

import Page from './page';

describe('<Page />', () => {
  test('renders button', () => {
    const { container } = render(<Page />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot()
  });  
});
