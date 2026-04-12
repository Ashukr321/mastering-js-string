import React from 'react';

/**
 * Real-world React use case for .indexOf()
 * Scenario: Basic search filtering in a list of items.
 */

const IndexOfUseCase = () => {
  const users = ['Alice', 'Bob', 'Charlie', 'David', 'Edward'];
  const [searchTerm, setSearchTerm] = React.useState('');

  // Filter users by finding the index of the search term in their name
  const filteredUsers = users.filter(user => 
    user.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .indexOf()</h3>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search users..."
        style={{ padding: '8px', marginBottom: '10px' }}
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

export default IndexOfUseCase;
