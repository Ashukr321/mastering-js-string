import React from 'react';

/**
 * Real-world React use case for .toString()
 * Scenario: Converting values from a form (which might be numbers or other objects) into a string for display or processing.
 */

const ToStringUseCase = () => {
  const [value, setValue] = React.useState(12345);

  // Convert number to string for display or for string methods
  const stringValue = value.toString();
  const reversed = stringValue.split('').reverse().join('');

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .toString()</h3>
      <p>Original Value: {value} (Type: {typeof value})</p>
      <p>String Representation: <code>"{stringValue}"</code> (Type: {typeof stringValue})</p>
      <p>Reversed String: <strong>{reversed}</strong></p>
      <button 
        onClick={() => setValue(Math.floor(Math.random() * 10000))}
        style={{ padding: '8px', cursor: 'pointer' }}
      >
        Random Number
      </button>
    </div>
  );
};

export default ToStringUseCase;
