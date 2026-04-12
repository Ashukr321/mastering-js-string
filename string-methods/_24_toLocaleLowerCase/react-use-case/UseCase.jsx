import React from 'react';

/**
 * Real-world React use case for .toLocaleLowerCase()
 * Scenario: Converting user input for international audiences where locale-specific casing matters.
 */

const ToLocaleLowerCaseUseCase = () => {
  const [text, setText] = React.useState('ISTANBUL');
  const [locale, setLocale] = React.useState('en-US');

  // Convert based on the selected locale
  const convertedText = text.toLocaleLowerCase(locale);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .toLocaleLowerCase()</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text (e.g., ISTANBUL)..."
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <label>Locale:</label>
        <select value={locale} onChange={(e) => setLocale(e.target.value)} style={{ padding: '4px' }}>
          <option value="en-US">English (en-US)</option>
          <option value="tr-TR">Turkish (tr-TR)</option>
          <option value="el-GR">Greek (el-GR)</option>
        </select>
      </div>
      <p style={{ marginTop: '10px' }}>Converted Result: <strong>{convertedText}</strong></p>
    </div>
  );
};

export default ToLocaleLowerCaseUseCase;
