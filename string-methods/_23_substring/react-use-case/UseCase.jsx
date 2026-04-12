import React from 'react';

/**
 * Real-world React use case for .substring()
 * Scenario: Extracting a domain from an email address for display.
 */

const SubstringUseCase = () => {
  const [email, setEmail] = React.useState('user@example.com');

  // Find the @ index and extract everything after it
  const atIndex = email.indexOf('@');
  const domain = atIndex !== -1 ? email.substring(atIndex + 1) : 'Invalid Email';

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .substring()</h3>
      <input 
        type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email..."
        style={{ padding: '8px', width: '250px' }}
      />
      <p style={{ marginTop: '10px' }}>
        Extracted Domain: <strong>{domain}</strong>
      </p>
    </div>
  );
};

export default SubstringUseCase;
