import React from 'react';

/**
 * Real-world React use case for .includes()
 * Scenario: Simple search filtering in a list of items.
 */

const IncludesUseCase = () => {
  const users = ['Alice', 'Bob', 'Charlie', 'David', 'Edward'];
  const [searchTerm, setSearchTerm] = React.useState('');

  // Filter the list based on search term (case-insensitive)
  const filteredUsers = users.filter(user => 
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .includes()</h3>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search users..."
        style={{ padding: '8px', marginBottom: '10px', width: '200px' }}
      />
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => <li key={user}>{user}</li>)
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default IncludesUseCase;
