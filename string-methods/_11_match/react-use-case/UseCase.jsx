import React from 'react';

/**
 * Real-world React use case for .match()
 * Scenario: Extracting numbers from a mixed string (e.g., extracting an ID or price).
 */

const MatchUseCase = () => {
  const [input, setInput] = React.useState('Order #12345 cost $99.99');

  // Extract all sequences of digits
  const allNumbers = input.match(/\d+/g) || [];

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .match()</h3>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type something with numbers..."
        style={{ padding: '8px', width: '300px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Extracted Numbers: 
          <strong> {allNumbers.join(', ') || 'None found'}</strong>
        </p>
      </div>
    </div>
  );
};

export default MatchUseCase;
