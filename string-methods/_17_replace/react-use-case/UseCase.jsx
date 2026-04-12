import React from 'react';

/**
 * Real-world React use case for .replace()
 * Scenario: Replacing dynamic placeholders in a template string (e.g., custom emails or notifications).
 */

const ReplaceUseCase = () => {
  const [name, setName] = React.useState('John');
  const [template, setTemplate] = React.useState('Hello, [name]! Welcome to [name]\'s dashboard.');

  // Replace [name] with actual name
  const finalMessage = template.replace(/\[name\]/g, name);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .replace()</h3>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name..."
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <p><strong>Original Template:</strong> {template}</p>
      <p><strong>Final Message:</strong> {finalMessage}</p>
    </div>
  );
};

export default ReplaceUseCase;
