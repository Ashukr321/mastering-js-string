import React from 'react';

/**
 * Real-world React use case for .search()
 * Scenario: Validating password strength or checking for specific character requirements.
 */

const SearchUseCase = () => {
  const [password, setPassword] = React.useState('');

  // Check if password contains at least one special character
  const hasSpecialChar = password.search(/[!@#$%^&*(),.?":{}|<>]/) !== -1;

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .search()</h3>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter password..."
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Password length: {password.length}</p>
        <p>Contains special character? 
          <span style={{ color: hasSpecialChar ? 'green' : 'red', fontWeight: 'bold' }}>
            {hasSpecialChar ? ' Yes' : ' No'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SearchUseCase;
