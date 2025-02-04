import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

  test('renders Kickstarter Projects Dashboard', async () => {
    render(<App />);
    
    expect(screen.getByText(/Kickstarter Projects Dashboard/i)).toBeInTheDocument();
  });
});
