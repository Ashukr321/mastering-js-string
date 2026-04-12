import React from 'react';

/**
 * Real-world React use case for .toUpperCase()
 * Scenario: Displaying an error message or label in uppercase for emphasis.
 */

const ToUpperCaseUseCase = () => {
  const [errorMessage, setErrorMessage] = React.useState('Something went wrong!');

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff5f5', border: '1px solid #ff0000', borderRadius: '4px' }}>
      <h3 style={{ color: '#ff0000' }}>Error Message</h3>
      <p style={{ fontWeight: 'bold', color: '#ff0000' }}>
        {errorMessage.toUpperCase()}
      </p>
      <button 
        onClick={() => setErrorMessage('Validation failed!')}
        style={{ padding: '8px', backgroundColor: '#ff0000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Trigger New Error
      </button>
    </div>
  );
};

export default ToUpperCaseUseCase;
