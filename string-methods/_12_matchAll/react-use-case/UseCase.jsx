import React from 'react';

/**
 * Real-world React use case for .matchAll()
 * Scenario: Extracting named capturing groups from a pattern (e.g., date parsing).
 */

const MatchAllUseCase = () => {
  const [text, setText] = React.useState('2023-01-01, 2024-05-12, 2025-12-25');
  
  // Regex with named groups (y, m, d)
  const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;
  const matches = [...text.matchAll(dateRegex)];

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .matchAll()</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter dates (YYYY-MM-DD)..."
        style={{ padding: '8px', width: '400px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <strong>Extracted Dates:</strong>
        <ul>
          {matches.map((match, idx) => (
            <li key={idx}>
              Year: {match.groups.year}, Month: {match.groups.month}, Day: {match.groups.day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchAllUseCase;
