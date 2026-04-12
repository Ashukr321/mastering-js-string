import React from 'react';

/**
 * Real-world React use case for .normalize()
 * Scenario: Deep string comparison in a search filter where the input might contain different Unicode representations.
 */

const NormalizeUseCase = () => {
  const [searchTerm, setSearchTerm] = React.useState('Ñ');
  const items = ['N\u0303', 'Apple', 'Banana']; // "N" with tilde and "Ñ"

  // Normalize search term and items for comparison
  const normalizedSearchTerm = searchTerm.normalize('NFC').toLowerCase();
  const filteredItems = items.filter(item => 
    item.normalize('NFC').toLowerCase().includes(normalizedSearchTerm)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .normalize()</h3>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search (e.g., 'Ñ' or 'N\u0303')..."
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => <li key={idx}>{item} (Normalized)</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default NormalizeUseCase;
