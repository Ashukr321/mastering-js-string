import React from 'react';

/**
 * Real-world React use case for .charCodeAt()
 * Scenario: Simple character strength visualization or validating that only certain characters (e.g., ASCII) are used.
 */

const CharCodeAtUseCase = () => {
  const [text, setText] = React.useState('');

  // Check if all characters are basic ASCII (0-127)
  const isAllAscii = text.split('').every(char => char.charCodeAt(0) <= 127);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Method: .charCodeAt()</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text (try some emojis or symbols)..."
        style={{ padding: '8px', width: '300px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Is basic ASCII? 
          <span style={{ color: isAllAscii ? 'green' : 'red', fontWeight: 'bold' }}>
            {isAllAscii ? ' Yes' : ' No (Contains non-ASCII characters)'}
          </span>
        </p>
        <p>First character's code unit: <strong>{text ? text.charCodeAt(0) : 'None'}</strong></p>
      </div>
    </div>
  );
};

export default CharCodeAtUseCase;
