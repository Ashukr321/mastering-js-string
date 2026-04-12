import React from 'react';

/**
 * Real-world React use case for .trim()
 * Scenario: Sanitizing user input in a form to avoid errors from accidental leading/trailing spaces.
 */

const TrimUseCase = () => {
  const [email, setEmail] = React.useState('  user@example.com  ');

  // Trim before validation or submission
  const sanitizedEmail = email.trim();
  const isValid = sanitizedEmail.includes('@');

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .trim()</h3>
      <input 
        type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email..."
        style={{ padding: '8px', width: '300px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Raw Input: <code>"{email}"</code></p>
        <p>Trimmed Output: <code>"{sanitizedEmail}"</code></p>
        <p>Is Valid? <strong>{isValid ? ' Yes' : ' No'}</strong></p>
      </div>
    </div>
  );
};

export default TrimUseCase;
