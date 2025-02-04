import React from 'react';
import '../styles/Pagination.css';

function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  recordsPerPage, 
  onRecordsPerPageChange,
  totalRecords 
}) {
  const recordsOptions = [5, 10, 15, 20];

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-container" aria-label="Pagination navigation">
      <div className="records-per-page">
        <label htmlFor="recordsPerPage">Items per page:</label>
        <select 
          id="recordsPerPage"
          value={recordsPerPage}
          onChange={(e) => onRecordsPerPageChange(Number(e.target.value))}
          aria-label="Items per page:"
        >
          {recordsOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="pagination" role="navigation" aria-label="Pagination">
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="nav-button"
        >
          ←
        </button>
        
        <div className="page-numbers" role="group" aria-label="Page numbers">
          {getPageNumbers().map((number, index) => (
            number === '...' ? (
              <span key={`ellipsis-${index}`} className="ellipsis">...</span>
            ) : (
              <button
                key={number}
                onClick={() => onPageChange(number)}
                className={`page-number ${currentPage === number ? 'active' : ''}`}
                aria-current={currentPage === number ? 'page' : null}
                aria-label={`Page ${number}${currentPage === number ? ' (current)' : ''}`}
              >
                {number}
              </button>
            )
          ))}
        </div>

        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="nav-button"
        >
          →
        </button>
      </div>

      <div className="records-info" aria-live="polite">
        Showing {(currentPage - 1) * recordsPerPage + 1} to {Math.min(currentPage * recordsPerPage, totalRecords)} of {totalRecords} entries
      </div>
    </div>
  );
};

export default Pagination;