import React from 'react';
import '../styles/Table.css';

function Table({ data, startIndex }) {
  return (
    <div className="table-container" role="region" aria-label="Projects data table">
      <table aria-label="Kickstarter projects">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage funded</th>
            <th>Amount pledged</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
              <td>
                <div className="percentage-bar"
                    role="progressbar"
                    aria-valuenow={item.percentage_funded}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${item.percentage_funded}% funded`}
                >
                  <div 
                    className="percentage-fill" 
                    style={{ width: `${Math.min(item.percentage_funded, 100)}%` }}
                  />
                  <span>{item.percentage_funded}%</span>
                </div>
              </td>
              <td>${item.amount_pledged?.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
