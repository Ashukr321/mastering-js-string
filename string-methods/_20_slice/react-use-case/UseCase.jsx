import React from 'react';

/**
 * Real-world React use case for .slice()
 * Scenario: Creating a "Read More" component that truncates long text.
 */

const SliceUseCase = ({ text = "", limit = 50 }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Truncate text using slice if it exceeds the limit
  const displayText = isExpanded ? text : text.slice(0, limit) + (text.length > limit ? '...' : '');

  return (
    <div style={{ padding: '20px', maxWidth: '400px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Method: .slice()</h3>
      <p>{displayText}</p>
      {text.length > limit && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ color: '#007bff', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default SliceUseCase;
