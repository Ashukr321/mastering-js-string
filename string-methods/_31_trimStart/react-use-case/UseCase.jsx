import React from 'react';

/**
 * Real-world React use case for .trimStart()
 * Scenario: Removing leading spaces from a multi-line code or text block display.
 */

const TrimStartUseCase = () => {
  const [text, setText] = React.useState('   Indent this text');

  // Trim leading spaces for display purposes
  const sanitizedText = text.trimStart();

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .trimStart()</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text with leading spaces..."
        style={{ padding: '8px', width: '300px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Raw Input: <code>"{text}"</code></p>
        <p>Trimmed Output: <code>"{sanitizedText}"</code></p>
      </div>
    </div>
  );
};

export default TrimStartUseCase;
