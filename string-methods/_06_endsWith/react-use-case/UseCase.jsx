import React from 'react';

/**
 * Real-world React use case for .endsWith()
 * Scenario: Validating file extension for an upload component.
 */

const EndsWithUseCase = () => {
  const [fileName, setFileName] = React.useState('document.pdf');

  const isPDF = fileName.toLowerCase().endsWith('.pdf');
  const isImage = fileName.toLowerCase().endsWith('.jpg') || fileName.toLowerCase().endsWith('.png');

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .endsWith()</h3>
      <input 
        type="text" 
        value={fileName} 
        onChange={(e) => setFileName(e.target.value)} 
        placeholder="Enter filename..."
        style={{ padding: '8px', width: '300px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Is PDF? <strong>{isPDF ? ' Yes' : ' No'}</strong></p>
        <p>Is Image (JPG/PNG)? <strong>{isImage ? ' Yes' : ' No'}</strong></p>
      </div>
    </div>
  );
};

export default EndsWithUseCase;
