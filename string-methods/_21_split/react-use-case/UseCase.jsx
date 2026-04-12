import React from 'react';

/**
 * Real-world React use case for .split()
 * Scenario: Converting a comma-separated list of tags into clickable tag components.
 */

const SplitUseCase = () => {
  const [tagInput, setTagInput] = React.useState('react,javascript,web-dev,frontend');

  // Convert input string into an array of trimmed tags
  const tags = tagInput.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .split()</h3>
      <p>Enter comma-separated tags:</p>
      <input 
        type="text" 
        value={tagInput} 
        onChange={(e) => setTagInput(e.target.value)} 
        placeholder="e.g., react, node, css"
        style={{ padding: '8px', width: '300px', marginBottom: '15px' }}
      />
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {tags.map((tag, index) => (
          <span 
            key={`${tag}-${index}`}
            style={{
              padding: '4px 12px',
              backgroundColor: '#e1ecf4',
              color: '#39739d',
              borderRadius: '16px',
              fontSize: '14px',
              border: '1px solid #7aa7c7'
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SplitUseCase;
