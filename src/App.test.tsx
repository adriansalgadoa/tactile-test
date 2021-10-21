import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Tactile React Interview Test/i);
  expect(headerElement).toBeInTheDocument();
});
