import React from 'react';

/**
 * Real-world React use case for .localeCompare()
 * Scenario: Sorting a list of strings (e.g., user names) that might contain accented characters.
 */

const LocaleCompareUseCase = () => {
  const [items, setItems] = React.useState(['réservé', 'Apple', 'Banana', 'reserve', 'Zebra']);
  const [sortOrder, setSortOrder] = React.useState('asc');

  // Sort items based on the current locale and selected order
  const sortedItems = [...items].sort((a, b) => {
    const result = a.localeCompare(b, 'en', { sensitivity: 'accent' });
    return sortOrder === 'asc' ? result : -result;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .localeCompare()</h3>
      <button 
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        style={{ padding: '8px', marginBottom: '10px' }}
      >
        Toggle Sort Order: {sortOrder.toUpperCase()}
      </button>
      <ul>
        {sortedItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default LocaleCompareUseCase;
