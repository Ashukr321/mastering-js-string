import React from 'react';

/**
 * Real-world React use case for .trimEnd()
 * Scenario: Sanitizing input where trailing spaces are not allowed (e.g., username or folder name).
 */

const TrimEndUseCase = () => {
  const [folderName, setFolderName] = React.useState('Project Folder   ');

  // Trim trailing spaces before saving
  const sanitizedFolderName = folderName.trimEnd();

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .trimEnd()</h3>
      <input 
        type="text" 
        value={folderName} 
        onChange={(e) => setFolderName(e.target.value)} 
        placeholder="Enter folder name..."
        style={{ padding: '8px', width: '300px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Raw Input: <code>"{folderName}"</code></p>
        <p>Trimmed Output: <code>"{sanitizedFolderName}"</code></p>
      </div>
    </div>
  );
};

export default TrimEndUseCase;
