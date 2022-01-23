import React from 'react';
import { render, screen } from '@testing-library/react';
import { tickets } from '../../data/tickets.json';
import App from './App';

test('renders learn react link', () => {
  render(<App tickets={tickets}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
