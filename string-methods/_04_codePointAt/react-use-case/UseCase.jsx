import React from 'react';

/**
 * Real-world React use case for .codePointAt()
 * Scenario: Validating if the input contains emojis or specific high-order Unicode characters.
 */

const CodePointAtUseCase = () => {
  const [text, setText] = React.useState('Hello 😀');

  const hasHighUnicode = text.split('').some((_, i) => (text.codePointAt(i) || 0) > 0xFFFF);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .codePointAt()</h3>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something with emojis..."
        style={{ padding: '8px', width: '300px' }}
      />
      <p style={{ marginTop: '10px' }}>
        Contains multi-byte Unicode (e.g., emojis)? 
        <strong>{hasHighUnicode ? ' Yes' : ' No'}</strong>
      </p>
    </div>
  );
};

export default CodePointAtUseCase;
