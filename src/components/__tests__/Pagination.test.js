import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination Component', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn(),
    recordsPerPage: 5,
    onRecordsPerPageChange: jest.fn(),
    totalRecords: 50
  };

  test('renders pagination controls', () => {
    render(<Pagination {...defaultProps} />);
    expect(screen.getByLabelText('Previous page')).toBeInTheDocument();
    expect(screen.getByLabelText('Next page')).toBeInTheDocument();
  });

  test('disables previous button on first page', () => {
    render(<Pagination {...defaultProps} />);
    expect(screen.getByLabelText('Previous page')).toBeDisabled();
  });

  test('handles page change correctly', () => {
    render(<Pagination {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('Next page'));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  });

  test('handles records per page change', () => {
    render(<Pagination {...defaultProps} />);
    fireEvent.change(screen.getByLabelText('Items per page:'), { target: { value: '10' } });
    expect(defaultProps.onRecordsPerPageChange).toHaveBeenCalledWith(10);
  });
});
