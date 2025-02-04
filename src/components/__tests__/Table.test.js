import { render, screen } from '@testing-library/react';
import Table from '../Table';

describe('Table Component', () => {
  const mockData = [
    { percentage_funded: 186, amount_pledged: 15283 },
    { percentage_funded: 124, amount_pledged: 12400 }
  ];

  test('renders table headers correctly', () => {
    render(<Table data={mockData} startIndex={0} />);
    expect(screen.getByText('S.No.')).toBeInTheDocument();
    expect(screen.getByText('Percentage funded')).toBeInTheDocument();
    expect(screen.getByText('Amount pledged')).toBeInTheDocument();
  });

  test('renders correct number of rows', () => {
    render(<Table data={mockData} startIndex={0} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockData.length + 1); // +1 for header row
  });

  test('displays formatted currency values', () => {
    render(<Table data={mockData} startIndex={0} />);
    expect(screen.getByText('$15,283')).toBeInTheDocument();
  });
});
