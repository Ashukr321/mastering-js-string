import React from 'react';

/**
 * Real-world React use case for .lastIndexOf()
 * Scenario: Getting the file name from a full path or URL.
 */

const LastIndexOfUseCase = () => {
  const [filePath, setFilePath] = React.useState('e:/Job switch/javascript/mastering-js-string/README.md');

  // Find the last occurrence of '/' or '\' to get the file name
  const lastSlashIndex = Math.max(filePath.lastIndexOf('/'), filePath.lastIndexOf('\\'));
  const fileName = lastSlashIndex !== -1 ? filePath.slice(lastSlashIndex + 1) : filePath;

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .lastIndexOf()</h3>
      <input 
        type="text" 
        value={filePath} 
        onChange={(e) => setFilePath(e.target.value)} 
        placeholder="Enter file path..."
        style={{ padding: '8px', width: '400px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>File Name: <strong>{fileName}</strong></p>
      </div>
    </div>
  );
};

export default LastIndexOfUseCase;
