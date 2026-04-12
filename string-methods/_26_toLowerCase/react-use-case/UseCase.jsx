import React from 'react';

/**
 * Real-world React use case for .toLowerCase()
 * Scenario: Case-insensitive search filter.
 */

const ToLowerCaseUseCase = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const items = ['React', 'JavaScript', 'Node.js', 'TypeScript', 'CSS'];

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .toLowerCase()</h3>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search (e.g., 'react' or 'REACT')"
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <ul>
        {filteredItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default ToLowerCaseUseCase;
