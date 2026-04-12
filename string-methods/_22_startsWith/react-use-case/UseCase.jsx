import React from 'react';

/**
 * Real-world React use case for .startsWith()
 * Scenario: Validating if a URL starts with "https://" for security.
 */

const StartsWithUseCase = () => {
  const [url, setUrl] = React.useState('https://example.com');

  const isSecure = url.startsWith('https://');

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .startsWith()</h3>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Enter URL..."
        style={{ padding: '8px', width: '300px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Is Secure? 
          <span style={{ color: isSecure ? 'green' : 'red', fontWeight: 'bold' }}>
            {isSecure ? ' Yes' : ' No (HTTPS recommended)'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StartsWithUseCase;
