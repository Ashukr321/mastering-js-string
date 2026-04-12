import React from 'react';

/**
 * Real-world React use case for .at()
 * Scenario: Getting the last character of a user-inputted string (e.g., for simple password validation or formatting)
 */

const AtUseCase = () => {
  const [inputValue, setInputValue] = React.useState('');

  // Use .at(-1) to easily get the last character without calculating .length - 1
  const lastChar = inputValue.at(-1) || 'None';

  return (
    <div>
      <h3>Method: .at()</h3>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Type something..."
      />
      <p>The last character you typed: <strong>{lastChar}</strong></p>
    </div>
  );
};

export default AtUseCase;
