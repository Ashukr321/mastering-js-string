import React from 'react';

/**
 * Real-world React use case for .replaceAll()
 * Scenario: Sanitizing user input by replacing all unwanted characters (e.g., removing all spaces or special characters).
 */

const ReplaceAllUseCase = () => {
  const [input, setInput] = React.useState('A B C D');

  // Replace all spaces with underscores
  const sanitized = input.replaceAll(' ', '_');

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .replaceAll()</h3>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type something with spaces..."
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <p>Original Input: <strong>{input}</strong></p>
      <p>Sanitized Output: <strong>{sanitized}</strong></p>
    </div>
  );
};

export default ReplaceAllUseCase;
