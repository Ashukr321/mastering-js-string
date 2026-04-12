import React from 'react';

/**
 * Real-world React use case for .toLocaleUpperCase()
 * Scenario: Displaying an error or warning label where locale-specific casing matters for emphasis.
 */

const ToLocaleUpperCaseUseCase = () => {
  const [text, setText] = React.useState('istanbul');
  const [locale, setLocale] = React.useState('en-US');

  // Convert based on the selected locale
  const convertedText = text.toLocaleUpperCase(locale);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .toLocaleUpperCase()</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text (e.g., istanbul)..."
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

export default ToLocaleUpperCaseUseCase;
